import type { BaseInputSize, BaseInputType } from '~/constants/global'

export type BaseInputProps = {
  topLeftLabel?: string
  bottomLeftLabel?: string
  topRightLabel?: string
  bottomRightLabel?: string
  modelValue: string
  placeholder?: string
  size?: BaseInputSize
  clearButton?: true
  type?: BaseInputType
}
