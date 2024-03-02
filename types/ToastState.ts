import type { ToastType } from '~/constants/toast'

export type ToastState = {
  message: string | null
  show: boolean
  type: ToastType | null
}
