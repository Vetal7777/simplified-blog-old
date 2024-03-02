import type moment from 'moment'
import type { MomentJsFormat } from '~/constants/moment'

export type GetDateInFormat = (
  date: string | moment.Moment | Date,
  format: MomentJsFormat
) => string
