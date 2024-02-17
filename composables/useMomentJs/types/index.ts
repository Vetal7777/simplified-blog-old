import type moment from 'moment'
import type { MomentJsFormat } from '~/constants/moment'

export type createNewDate = (date?: string) => moment.Moment

export type getDateInFormat = (
  date: string | moment.Moment | Date,
  format: MomentJsFormat
) => string
