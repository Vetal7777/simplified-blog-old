<template>
  <div class="pb-2 text-black dark:text-white">
    {{ children }}
  </div>
</template>

<script setup lang="ts">
import type { BlogPostSimpleTextProps } from './types'

defineProps<BlogPostSimpleTextProps>()
</script>
