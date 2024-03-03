import moment from 'moment'
import type { CreateNewDate } from './types/CreateNewDate'
import type { GetDateInFormat } from './types/GetDateInFormat'

export const useMomentJs = () => {
  const createNewDate: CreateNewDate = (date = undefined) => moment(date)

  const getDateInFormat: GetDateInFormat = (date, format) =>
    moment(date).format(format)

  return { newDate: createNewDate, formatDate: getDateInFormat }
}
