<template>
  <div
    :class="[
      'relative min-w-full rounded-lg border border-transparent p-1',
      { edit: editMode }
    ]"
  >
    <slot />
    <BaseDeleteButton
      class="delete-button"
      v-if="editMode && !editProcess"
      @remove="$emit('remove')"
    />
  </div>
</template>

<script setup lang="ts">
import BaseDeleteButton from '~/components/Ui/BaseDeleteButton.vue'
import { useAppStore } from '~/stores/app'
import type { ContentContainerProps } from './types'

defineProps<ContentContainerProps>()

const appStore = useAppStore()

const { editMode } = storeToRefs(appStore)
</script>

<style lang="scss" scoped>
.edit:hover {
  @apply cursor-pointer border-black dark:border-white;

  .delete-button {
    @apply flex animate-slide-in;
  }
}
</style>
