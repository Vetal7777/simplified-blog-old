<template>
  <button
    class="btn"
    :class="{
      '': size === BaseButtonSize.md,
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

withDefaults(defineProps<BaseButtonProps>(), {
  size: BaseButtonSize.md
})
</script>
