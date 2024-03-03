<template>
  <label class="du-form-control w-full">
    <!-- Top labeles container -->
    <div v-if="showTopLabel" class="du-label relative">
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
        v-bind="validateAttrs"
        :type="modelType"
        :placeholder="placeholder"
        class="du-input du-input-bordered my-2 w-full max-w-full"
        :class="{
          ...inputSizeClass
        }"
      />
      <!-- Buttons container -->
      <div class="button-container">
        <div class="button-shell">
          <!-- Password type toggler -->
          <template v-if="inputTypeData.password">
            <!-- Show password button -->
            <button v-if="passwordTypeData.password" class="flex">
              <Icon
                name="mdi:eye-off"
                class="text-main-2 dark:text-white"
                :size="iconSizeValue"
                @click="modelType = BaseInputType.text"
              />
            </button>
            <!-- Hide password button -->
            <button v-else class="flex">
              <Icon
                name="mdi:eye"
                class="text-main-2 dark:text-white"
                :size="iconSizeValue"
                @click="modelType = BaseInputType.password"
              />
            </button>
          </template>
          <!-- Clear button -->
          <button v-if="showCloseButton" class="flex" @click="clearModel">
            <Icon
              name="vaadin:close"
              class="text-main-2 dark:text-white"
              :size="iconSizeValue"
            />
          </button>
        </div>
      </div>
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
    <div v-if="showError" class="flex text-xs text-red">
      {{ errorMessage }}
    </div>
  </label>
</template>

<script setup lang="ts">
import { BaseInputSize, BaseInputType, EMPTY_STRING } from '@/constants/global'
import { toTypedSchema } from '@vee-validate/zod'
import { useForm } from 'vee-validate'
import { z } from 'zod'
import type { BaseInputProps } from './types/BaseInputProps'

const emit = defineEmits(['update:modelValue', 'error'])
const props = withDefaults(defineProps<BaseInputProps>(), {
  modelValue: EMPTY_STRING,
  placeholder: EMPTY_STRING,
  size: BaseInputSize.md,
  type: BaseInputType.text
})
const { errors, defineField } = useForm({
  validationSchema: toTypedSchema(
    z.object({
      [props.name]: props.validate?.rules ?? z.any()
    })
  )
})
const [validateValue, validateAttrs] = defineField(props.name, {
  validateOnModelUpdate: props.validate?.validateOnUpdate ?? true
})

const modelType = ref<BaseInputType>(props.type)

const errorMessage = computed<string | null>(
  () => errors.value[props.name] ?? null
)
const inputSizeClass = computed(() => ({
  'du-input-xs': inputSizeData.value.xs,
  'du-input-sm': inputSizeData.value.sm,
  'du-input-md': inputSizeData.value.md,
  'du-input-lg': inputSizeData.value.lg
}))
const inputTypeData = computed(() => ({
  password: props.type === BaseInputType.password,
  text: props.type === BaseInputType.text
}))
const inputSizeData = computed(() => ({
  xs: props.size === BaseInputSize.xs,
  sm: props.size === BaseInputSize.sm,
  md: props.size === BaseInputSize.md,
  lg: props.size === BaseInputSize.lg
}))
const iconSizeValue = computed(() => {
  switch (true) {
    case inputSizeData.value.xs:
      return '8'
    case inputSizeData.value.sm:
      return '12'
    case inputSizeData.value.md:
      return '16'
    case inputSizeData.value.lg:
      return '20'
  }
})
const model = computed({
  get: () => props.modelValue,
  set: (value: string) => {
    setModelValue(value)
    onError()
  }
})
const passwordTypeData = computed(() => ({
  password: modelType.value === BaseInputType.password,
  text: modelType.value === BaseInputType.text
}))
const showError = computed(
  () => Boolean(props.validate) && Boolean(errorMessage.value)
)
const showTopLabel = computed(
  () => Boolean(props.topLeftLabel) || Boolean(props.topRightLabel)
)
const showBottomLabel = computed(
  () => Boolean(props.bottomLeftLabel) || Boolean(props.bottomRightLabel)
)
const showCloseButton = computed(
  () => Boolean(model.value) && props.clearButton
)

const clearModel = () => emit('update:modelValue', EMPTY_STRING)
const onError = () => {
  if (props.validate && errorMessage.value) {
    emit('error', errorMessage.value)
  }
}
const setModelValue = (value: string) => {
  validateValue.value = value
  emit('update:modelValue', value)
}
</script>

<style lang="scss" scoped>
.button-container {
  @apply absolute right-3 top-0 flex h-full items-center justify-center gap-2 outline-none;
}

.button-shell {
  @apply flex items-center gap-2 bg-white pl-2 dark:bg-main-2;
}
</style>
