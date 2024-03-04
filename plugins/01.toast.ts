import { ToastType } from '~/constants/toast'
import type { ToastState } from '~/types/ToastState'

export default defineNuxtPlugin(() => {
  const state = ref<ToastState>({
    message: null,
    show: false,
    type: null
  })

  const showToast = (message: string, type = ToastType.info) => {
    state.value.message = message
    state.value.show = true
    state.value.type = type

    setTimeout(() => hideToast(), 2000)
  }

  const hideToast = () => {
    state.value.message = null
    state.value.show = false
    state.value.type = null
  }

  return {
    provide: {
      toast: {
        state,
        showToast
      }
    }
  }
})
