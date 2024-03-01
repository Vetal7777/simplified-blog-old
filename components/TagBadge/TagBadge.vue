<template>
  <div class="badge badge-outline">
    {{ tag }}
  </div>
</template>

<script setup lang="ts">
import type { TagBadgeProps } from './types'

defineProps<TagBadgeProps>()
</script>
