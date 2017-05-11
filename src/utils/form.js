import {mapValues, get} from 'lodash'

export const notNegative = (value, previousValue) => value >= 0 ? value : previousValue

export const mapPath = (source, map) => {
  return mapValues(map, path => get(source, path))
}
