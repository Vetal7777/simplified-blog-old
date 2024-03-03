<template>
  <button
    class="du-btn"
    :class="{
      'du-btn-sm': size === BaseButtonSize.sm,
      'du-btn-lg': size === BaseButtonSize.lg,
      'du-btn-xs': size === BaseButtonSize.xs
    }"
    :disabled="disabled"
    @click="$emit('click')"
  >
    {{ title }}
  </button>
</template>

<script setup lang="ts">
import { BaseButtonSize } from '~/constants/global'
import type { BaseButtonProps } from './types/BaseButtonProps'

withDefaults(defineProps<BaseButtonProps>(), {
  disabled: false
})
defineEmits(['click'])
</script>
