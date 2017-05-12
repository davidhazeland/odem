import 'babel-polyfill'

import test from 'tape'

import { flatten } from '../saga'

test('flatten() function', assert => {
  const sagaList = {
    List: {
      Request: 'list-request',
      Success: 'list-success'
    },
    Item: {
      Request: 'item-request'
    }
  }

  const actual = flatten(sagaList)
  const expected = ['list-request', 'list-success', 'item-request']

  assert.deepEqual(actual, expected,
    'should flatten saga list')
  assert.end()
})
