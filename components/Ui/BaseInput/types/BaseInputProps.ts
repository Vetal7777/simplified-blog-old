import type { BaseInputSize, BaseInputType } from '~/constants/global'
import type { ValidateData } from './ValidateData'

export type BaseInputProps = {
  name: string
  topLeftLabel?: string
  bottomLeftLabel?: string
  topRightLabel?: string
  bottomRightLabel?: string
  modelValue: string
  placeholder?: string
  size?: BaseInputSize
  clearButton?: true
  type?: BaseInputType
  validate?: ValidateData
}
