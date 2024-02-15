<template>
  <div class="flex flex-col gap-2">
    <!-- Label -->
    <label v-if="label" class="font-bold text-black dark:text-white">
      {{ label }}
    </label>
    <!-- Input -->
    <div class="relative w-full">
      <input
        type="text"
        class="dark:bg-base-dark-gray dark:border-base-light-gray w-full rounded border border-base-blue px-4 py-2 text-black outline-none dark:text-white"
        v-model="model"
      />
      <!-- Clear button -->
      <button
        v-if="showCloseButton"
        class="absolute right-3 top-0 flex h-full items-center justify-center outline-none"
        @click="clearModel"
      >
        <Icon name="vaadin:close" class="text-base-dark-gray dark:text-white" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { BaseInputProps } from './types'

const emit = defineEmits()
const props = defineProps<BaseInputProps>()

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
})
const showCloseButton = computed(() => model.value && props.clearButton)

const clearModel = () => emit('update:modelValue', '')
</script>
