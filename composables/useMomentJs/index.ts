import moment from 'moment'
import type { createNewDate, getDateInFormat } from './types'

export const useMomentJs = () => {
  const createNewDate: createNewDate = (date = undefined) => moment(date)

  const getDateInFormat: getDateInFormat = (date, format) =>
    moment(date).format(format)

  return { newDate: createNewDate, formatDate: getDateInFormat }
}
