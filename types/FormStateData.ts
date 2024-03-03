import type { ValidateData } from '~/components/Ui/BaseInput/types/ValidateData'

export type FormStateData = {
  [key: string]: {
    value: string
    validate: ValidateData
    error: string
  }
}
