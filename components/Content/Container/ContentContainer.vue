<template>
  <div
    :class="[
      'relative min-w-full rounded-lg border border-transparent p-1',
      { edit: editMode }
    ]"
  >
    <slot />
    <BaseDeleteButton
      v-if="editMode && !editProcess"
      class="delete-button"
      @remove="$emit('remove')"
    />
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import type { ContentContainerProps } from './types/ContentContainerProps'

defineProps<ContentContainerProps>()
defineEmits(['remove'])

const appStore = useAppStore()

const { editMode } = storeToRefs(appStore)
</script>

<style lang="scss" scoped>
.edit:hover {
  @apply cursor-pointer border-black dark:border-white;

  .delete-button {
    @apply animate-slide-from-right flex;
  }
}
</style>
