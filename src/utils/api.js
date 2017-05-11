import axios from 'axios'
import { camelizeKeys, decamelizeKeys } from 'humps'

export function create({baseURL, token}) {
  return axios.create({
    baseURL,
    headers: {
      'Authorization': `Bearer ${token}`
    },
    transformRequest: [data => decamelizeKeys(data)],
    transformResponse: [data => camelizeKeys(data)]
  })
}

export function updateToken(instance, token) {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`
  return instance;
}
