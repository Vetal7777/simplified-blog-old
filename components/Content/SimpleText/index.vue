<template>
  <ContentContainer :editMode="editMode" @click="onFocus">
    <div v-if="!isEdit" class="pb-2 text-black dark:text-white">
      {{ children }}
    </div>
    <textarea
      v-else
      v-model="model"
      ref="target"
      class="w-full resize-none bg-transparent text-black outline-none dark:text-white"
      @blur="isEdit = false"
    />
  </ContentContainer>
</template>

<script setup lang="ts">
import type { ContentSimpleTextProps } from './types'

const props = defineProps<ContentSimpleTextProps>()
const emit = defineEmits(['update:modelValue'])

const isEdit = ref(false)
const target = ref(null)

const model = computed({
  get: () => props.children,
  set: (value) => emit('update:modelValue', value)
})

const onFocus = async () => {
  if (props.editMode) {
    isEdit.value = true

    await nextTick()
    if (target.value) {
      const targetElement = target.value as HTMLElement

      targetElement.focus()
    } else {
      isEdit.value = false
      throw new Error('Error with edit mode')
    }
  }
}
</script>
