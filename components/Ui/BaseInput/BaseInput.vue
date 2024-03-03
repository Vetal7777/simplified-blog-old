<template>
  <label class="du-form-control w-full">
    <!-- Top labeles container -->
    <div v-if="showTobLabel" class="du-label relative">
      <!-- Left label -->
      <span v-if="topLeftLabel" class="du-label-text absolute left-0">
        {{ topLeftLabel }}
      </span>
      <!-- Right lebel -->
      <span v-if="topRightLabel" class="du-label-text-alt absolute right-0">
        {{ topRightLabel }}
      </span>
    </div>
    <!-- Input container -->
    <div class="relative">
      <!-- Input -->
      <input
        v-model="model"
        type="text"
        :placeholder="placeholder"
        class="du-input du-input-bordered my-2 w-full max-w-full"
      />
      <!-- Clear button -->
      <button
        v-if="showCloseButton"
        class="absolute right-3 top-0 flex h-full items-center justify-center outline-none"
        @click="clearModel"
      >
        <Icon name="vaadin:close" class="text-main-2 dark:text-white" />
      </button>
    </div>
    <!-- Bottom labeles -->
    <div v-if="showBottomLabel" class="du-label relative">
      <!-- Left label -->
      <span v-if="bottomLeftLabel" class="du-label-text-alt absolute left-0">
        {{ bottomLeftLabel }}
      </span>
      <!-- Right label -->
      <span v-if="bottomRightLabel" class="du-label-text-alt absolute right-0">
        {{ bottomRightLabel }}
      </span>
    </div>
  </label>
</template>

<script setup lang="ts">
import { EMPTY_STRING } from '@/constants/global'
import type { BaseInputProps } from './types/BaseInputProps'

const emit = defineEmits(['update:modelValue'])

const props = withDefaults(defineProps<BaseInputProps>(), {
  modelValue: EMPTY_STRING,
  placeholder: EMPTY_STRING
})

const model = computed({
  get: () => props.modelValue,
  set: (value: string) => emit('update:modelValue', value)
})
const showTobLabel = computed(() => props.topLeftLabel ?? props.topRightLabel)
const showBottomLabel = computed(
  () => props.bottomLeftLabel ?? props.bottomRightLabel
)
const showCloseButton = computed(() => model.value && props.clearButton)

const clearModel = () => emit('update:modelValue', EMPTY_STRING)
</script>
