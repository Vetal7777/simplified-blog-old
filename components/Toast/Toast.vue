<template>
  <Teleport to="body">
    <Transition>
      <div class="toast fixed bottom-8 right-8 z-20" v-if="state.show">
        <div
          :class="[
            'alert ',
            {
              'alert-info': state.type === ToastType.info,
              'alert-success': state.type === ToastType.success,
              'border-red-500 bg-red-600 text-black':
                state.type === ToastType.error
            }
          ]"
        >
          <span>{{ state.message }}</span>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { ToastType } from '~/constants/toast'

const { $toast } = useNuxtApp()

const state = computed(() => $toast.state.value)
</script>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
