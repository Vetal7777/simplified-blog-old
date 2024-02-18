<template>
  <div v-if="state" class="flex flex-col gap-7">
    <header class="relative flex">
      <!-- Header content -->
      <div class="mr-24 flex flex-col gap-2">
        <div class="text-4xl font-black text-black dark:text-white">
          {{ state.title }}
        </div>
        <DateLabel :date="state.createDate" />
        <TagBadge v-for="(tag, key) in state.tags" :tag="tag" :key="key" />
      </div>
      <!-- Header edit button -->
      <button
        v-if="!editMode"
        class="btn btn-sm absolute right-0 top-0"
        @click="editMode = true"
      >
        Edit
      </button>
      <button
        v-else
        class="btn btn-sm absolute right-0 top-0"
        @click="onCompleted"
      >
        Complete
      </button>
    </header>
    <main class="flex flex-col gap-3 overflow-x-hidden">
      <YouTubeIframe
        v-if="state.youtube"
        :title="state.key"
        :src="state.youtube"
      />
      <ContentList
        v-if="state.content"
        :list="editMode && editContent ? editContent : state.content"
        :editMode="editMode"
        @remove-content-item="onRemoveContentItem"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '@/stores/blog'
import { useArray } from '~/composables/useArray'
import type { Content, PostItem } from '~/stores/blog/types'

const blogStore = useBlogStore()
const route = useRoute()

const { deepCopy } = useArray()
const { getPostByKey, updatePost } = blogStore

const editContent = ref<Content[]>()
const editMode = ref(false)

const state = computed<PostItem | undefined>(() =>
  getPostByKey(route.params.key)
)
const onCompleted = () => {
  if (state.value && editContent.value) {
    updatePost({ ...state.value, content: editContent.value })
    editMode.value = false
  }
}
const onRemoveContentItem = (removeId: string) => {
  editContent.value = editContent.value?.filter(({ id }) => id !== removeId)
}
const updateEditContent = () => {
  if (state.value) {
    editContent.value = deepCopy(state.value.content)
  }
}

watch(
  () => editMode.value,
  () => {
    if (editMode.value) {
      updateEditContent()
    }
  }
)

definePageMeta({
  layout: 'article',
  middleware: ['post-server']
})
</script>
