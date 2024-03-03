<template>
  <div class="du-badge du-badge-outline">
    {{ value }}
  </div>
</template>

<script setup lang="ts">
import type { BaseBadgeProps } from './types/BaseBadgeProps'

defineProps<BaseBadgeProps>()
</script>
