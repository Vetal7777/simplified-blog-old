<template>
  <ContentContainer
    :editProcess="editProcess"
    :editMode="editMode"
    @click="onFocus"
  >
    <!-- Show children -->
    <div
      v-if="!editProcess"
      class="text-3xl font-black text-black dark:text-white"
    >
      {{ children }}
    </div>
    <!-- Change children -->
    <input
      v-else
      v-model="model"
      ref="target"
      class="bg-transparent text-3xl font-black text-black outline-none dark:text-white"
      @blur="editProcess = false"
    />
  </ContentContainer>
</template>

<script setup lang="ts">
import type { ContentHeadingProps } from './types'

const props = defineProps<ContentHeadingProps>()
const emit = defineEmits(['update:modelValue'])

const editProcess = ref(false)
const target = ref(null)

const model = computed({
  get: () => props.children,
  set: (value) => emit('update:modelValue', value)
})

const onFocus = async () => {
  if (props.editMode) {
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
