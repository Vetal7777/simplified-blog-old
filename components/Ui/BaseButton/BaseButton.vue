<template>
  <button
    class="btn"
    :class="{
      '': size === BaseButtonSizeValue.md,
      'btn-sm': size === BaseButtonSizeValue.sm,
      'btn-lg': size === BaseButtonSizeValue.lg,
      'btn-xs': size === BaseButtonSizeValue.xs
    }"
    @click="$emit('click')"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { BaseButtonSizeValue } from '~/constants/global'
import type { BaseButtonProps } from './types'

withDefaults(defineProps<BaseButtonProps>(), {
  size: BaseButtonSizeValue.md
})
</script>
