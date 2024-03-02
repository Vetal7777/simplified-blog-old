<template>
  <div class="badge badge-outline">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import type { BaseBadgeProps } from './types'

defineProps<BaseBadgeProps>()
</script>
