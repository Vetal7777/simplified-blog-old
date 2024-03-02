<template>
  <!-- Heading with link -->
  <a
    v-if="link"
    :href="link"
    class="base-heading hover:underline"
    :class="sizeData"
  >
    {{ value }}
  </a>
  <!-- Simple heading -->
  <div v-else class="base-heading" :class="sizeData" @click="$emit('click')">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import { BaseHeadingSize } from '@/constants/global'
import type { BaseHeadingProps } from './types'

const props = withDefaults(defineProps<BaseHeadingProps>(), {
  size: BaseHeadingSize.md
})

const sizeData = computed(() => ({
  'text-4xl': props.size === BaseHeadingSize.lg,
  'text-3xl': props.size === BaseHeadingSize.md
}))
</script>

<style lang="scss" scoped>
.base-heading {
  @apply font-black text-black dark:text-white;
}
</style>
