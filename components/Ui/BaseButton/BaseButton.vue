<template>
  <button
    class="btn"
    :class="{
      'btn-sm': size === BaseButtonSize.sm,
      'btn-lg': size === BaseButtonSize.lg,
      'btn-xs': size === BaseButtonSize.xs
    }"
    @click="$emit('click')"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { BaseButtonSize } from '~/constants/global'
import type { BaseButtonProps } from './types'

defineProps<BaseButtonProps>()
</script>
