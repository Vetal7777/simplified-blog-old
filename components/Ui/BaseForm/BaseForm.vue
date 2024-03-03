<template>
  <div class="du-card w-96 bg-base-100 shadow-xl">
    <div class="du-card-body gap-5">
      <!-- Title -->
      <h2 v-if="title" class="du-card-title">{{ title }}</h2>
      <!-- Header -->
      <div v-if="$slots.header">
        <slot name="header" />
      </div>
      <!-- Main -->
      <div v-if="$slots.main" class="flex flex-col gap-2">
        <slot name="main" />
      </div>
      <!-- Controll bar -->
      <div v-if="$slots.controllbar" class="du-card-actions justify-end">
        <slot name="controllbar" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BaseFormProps } from './types/BaseFormProps'

defineProps<BaseFormProps>()
</script>
