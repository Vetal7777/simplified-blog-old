<template>
  <Teleport to="body">
    <Transition name="slide-fade">
      <div
        v-if="editMode"
        class="du-card fixed right-4 top-1/2 z-10 w-fit bg-white shadow-xl dark:bg-neutral"
      >
        <div
          class="du-card-body flex flex-row gap-3 text-black dark:text-white"
        >
          <button class="w-min transition-all hover:scale-105 hover:opacity-80">
            <Icon name="bx:heading" size="20" />
          </button>
          <button class="w-min transition-all hover:scale-105 hover:opacity-80">
            <Icon name="mdi:text" size="20" />
          </button>
          <button class="w-min transition-all hover:scale-105 hover:opacity-80">
            <Icon name="material-symbols:code" size="20" />
          </button>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()

const { editMode } = storeToRefs(appStore)
</script>

<style lang="scss" scoped>
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-20px);
  opacity: 0;
}
</style>
