<template>
  <Teleport to="body">
    <Transition>
      <div
        v-if="isLoading"
        class="dark:bg-main-2 fixed left-0 top-0 z-20 flex h-screen w-screen items-center justify-center bg-white"
      >
        <span class="du-loading du-loading-spinner du-loading-lg" />
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()

const { isLoading } = storeToRefs(appStore)
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
