<template>
  <ContentContainer
    :edit-process="editProcess"
    @click="onFocus"
    @remove="$emit('remove')"
  >
    <!-- Show value -->
    <div v-show="!editProcess" class="du-mockup-code">
      <pre>
        <div 
          ref="container" class="pl-19"
        >{{ value }}</div>
      </pre>
    </div>
    <!-- Change value -->
    <div v-show="editProcess" class="du-mockup-code">
      <pre>
        <textarea
        ref="target"
        v-model="model"
        :style="{height:`${containerHeight}px`}"
        class="w-full resize-none bg-transparent outline-none -ml-4.75"
        @blur="editProcess = false"
        />
      </pre>
    </div>
  </ContentContainer>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import type { ContentCodeProps } from './types'

const props = defineProps<ContentCodeProps>()
const emit = defineEmits(['update:modelValue', 'remove'])

const appStore = useAppStore()

const { editMode } = storeToRefs(appStore)

const editProcess = ref(false)
const target = ref(null)
const container = ref(null)

const containerHeight = computed(() => {
  if (container.value) {
    const containerElem = container.value as HTMLElement

    return containerElem.clientHeight
  } else return 0
})
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
