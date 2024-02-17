<template>
  <div class="pb-4 text-3xl font-black text-black dark:text-white">
    {{ children }}
  </div>
</template>

<script setup lang="ts">
import type { BlogPostHeadingProps } from './types'

defineProps<BlogPostHeadingProps>()
</script>
