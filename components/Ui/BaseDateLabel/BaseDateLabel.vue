<template>
  <div class="text-main-1">{{ value }}</div>
</template>

<script setup lang="ts">
import type { BaseDateLabelProps } from './types'

defineProps<BaseDateLabelProps>()
</script>
