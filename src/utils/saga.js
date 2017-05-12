import _ from 'lodash'
import { delay } from 'redux-saga'
import {
  call,
  spawn,
  all
} from 'redux-saga/effects'

export const flatten = sagaList => {
  return _.values(sagaList).reduce((acc, item) => {
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

export const create = sagaList => {
  return function*() {
    const sagas = flatten(sagas).map(makeRestartable)
    yield all(sagas.map(saga => call(saga)))
  }
}
