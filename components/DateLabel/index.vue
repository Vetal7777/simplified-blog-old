<template>
  <div class="text-base-light-gray">{{ date }}</div>
</template>

<script setup lang="ts">
import type { DateLabelProps } from './types'

defineProps<DateLabelProps>()
</script>
