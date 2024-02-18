<template>
  <div
    :class="['rounded-lg border border-transparent p-1 ', { edit: editMode }]"
  >
    <slot />
  </div>
</template>

<script setup lang="ts">
import type { ContentContainerProps } from './types'

defineProps<ContentContainerProps>()
</script>

<style lang="scss" scoped>
.edit:hover {
  @apply cursor-pointer border-black dark:border-white;
}
</style>
