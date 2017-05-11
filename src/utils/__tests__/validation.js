import test from 'tape';
import {required} from '../validation';

test('required', nest => {
  nest.test('pass', assert => {
    assert.deepEqual(required(1), undefined)
    assert.end()
  })
})

test('required', nest => {
  nest.test('pass', assert => {
    assert.deepEqual(required(1), undefined)
    assert.end()
  })
})
