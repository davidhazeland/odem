import test from 'tape'
import { create } from '../api'

test('request() function', assert => {
  const api = create({
    baseURL: 'https://httpbin.org',
    token: 'token'
  })
  api.get('/get').then(response => {
    assert.deepEqual(response.status, 200,
      'should be returned 200')
    assert.end()
  })
})
