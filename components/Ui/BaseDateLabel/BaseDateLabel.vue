<template>
  <div class="text-base-light-gray">{{ value }}</div>
</template>

<script setup lang="ts">
import type { BaseDateLabelProps } from './types'

defineProps<BaseDateLabelProps>()
</script>
