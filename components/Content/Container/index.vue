<template>
  <div
    :class="[
      'relative rounded-lg border border-transparent p-1 ',
      { edit: editMode }
    ]"
  >
    <slot />
    <div
      v-if="editMode && !editProcess"
      class="delete-button absolute right-4 top-0 hidden h-full items-center justify-center"
    >
      <button
        class="btn btn-circle h-6 min-h-6 w-6"
        @click.stop="$emit('remove')"
      >
        <Icon name="tabler:trash-filled" color="red" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { ContentContainerProps } from './types'

defineProps<ContentContainerProps>()
</script>

<style lang="scss" scoped>
.edit:hover {
  @apply cursor-pointer border-black dark:border-white;

  .delete-button {
    @apply animate-slide-in flex;
  }
}
</style>
