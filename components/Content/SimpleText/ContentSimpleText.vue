<template>
  <ContentContainer :edit-process="editProcess" @click="onFocus">
    <div v-if="!editProcess" class="pb-2 text-black dark:text-white">
      {{ value }}
    </div>
    <textarea
      v-else
      ref="target"
      v-model="model"
      class="w-full resize-none bg-transparent text-black outline-none dark:text-white"
      @blur="editProcess = false"
    />
  </ContentContainer>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import type { ContentSimpleTextProps } from './types'

const props = defineProps<ContentSimpleTextProps>()
const emit = defineEmits(['update:modelValue'])

const appStore = useAppStore()

const { editMode } = storeToRefs(appStore)

const editProcess = ref(false)
const target = ref(null)

const model = computed({
  get: () => props.value,
  set: (value) => emit('update:modelValue', value)
})

const onFocus = async () => {
  if (editMode.value) {
    editProcess.value = true

    await nextTick()
    if (target.value) {
      const targetElement = target.value as HTMLElement

      targetElement.focus()
    } else {
      editProcess.value = false
      throw new Error('Error with edit mode')
    }
  }
}
</script>
