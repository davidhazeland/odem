import {mapValues, get} from 'lodash'

export const notNegative = (value, previousValue) => value >= 0 ? value : previousValue

export const mapPath = (source, map) => {
  return mapValues(map, value => {
    if (typeof value === 'string') {
      return get(source, value)
    } else {
      const {path, format} = value
      return format(get(source, path))
    }
  })
}
