<template>
  <ContentContainer :editProcess="editProcess" @click="onFocus">
    <!-- Change children -->
    <input
      v-if="editProcess"
      v-model="model"
      ref="target"
      class="w-full bg-transparent text-3xl font-black text-black outline-none dark:text-white"
      @blur="editProcess = false"
    />
    <!-- Show children -->
    <temaplate v-else>
      <!-- If Link -->
      <a
        v-if="link"
        :href="link"
        class="break-all text-3xl font-black text-black hover:underline dark:text-white"
      >
        {{ children }}
      </a>
      <!-- Simple heading -->
      <div
        v-else
        class="break-all text-3xl font-black text-black dark:text-white"
      >
        {{ children }}
      </div>
    </temaplate>
  </ContentContainer>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app'
import type { ContentHeadingProps } from './types'

const props = defineProps<ContentHeadingProps>()
const emit = defineEmits(['update:modelValue'])

const appStore = useAppStore()

const { editMode } = storeToRefs(appStore)

const editProcess = ref(false)
const target = ref(null)

const model = computed({
  get: () => props.children,
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
