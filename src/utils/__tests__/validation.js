import test from 'tape';
import {required} from '../validation';

test('required', assert => {
  assert.deepEqual(required(1), undefined);
  assert.end();
})
