import _ from 'lodash'
import { delay } from 'redux-saga'
import { call, spawn, all, fork, take } from 'redux-saga/effects'

export const flatten = sagas => {
  return _.values(sagas).reduce((acc, item) => {
    return acc.concat(_.values(item))
  }, [])
}

const makeRestartable = saga => {
  return function* () {
    yield spawn(function* () {
      while (true) {
        try {
          yield call(saga)
          console.error("unexpected root saga termination. The root sagas are supposed to be sagas that live during the whole app lifetime!",saga)
        } catch (e) {
          console.error("Saga error, the saga will be restarted",e)
        }
        yield delay(1000) // Avoid infinite failures blocking app TODO use backoff retry policy...
      }
    })
  }
}

export const combineSagas = sagas => {
  return function*() {
    const sagaList = flatten(sagas).map(makeRestartable)
    yield all(sagaList.map(saga => call(saga)))
  }
}


export function* takeFirst(pattern, saga, ...args) {
  const task = yield fork(function* () {
    while(true) {
      const action = yield take(pattern);
      yield call(saga, ...args.concat(action));
    }
  });
  return task;
}
