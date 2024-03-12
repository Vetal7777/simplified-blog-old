<template>
  <Teleport to="body">
    <Transition>
      <div v-if="state.show" class="du-toast fixed bottom-8 right-8 z-20">
        <div
          :class="[
            'du-alert ',
            {
              'du-alert-info': state.type === ToastType.info,
              'du-alert-success': state.type === ToastType.success,
              'border-red bg-red text-black': state.type === ToastType.error
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
