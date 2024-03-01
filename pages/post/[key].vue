<template>
  <div v-if="state" class="flex flex-col gap-7">
    <header class="relative flex">
      <!-- Header content -->
      <div class="mr-48 flex flex-col gap-2">
        <div class="text-4xl font-black text-black dark:text-white">
          {{ state.title }}
        </div>
        <DateLabel :date="state.createDate" />
        <TagBadge v-for="(tag, key) in state.tags" :tag="tag" :key="key" />
      </div>
      <!-- Header edit button -->
      <PostController
        v-if="showController"
        @cancel="onCancel"
        @complete="onComplete"
      />
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
        @remove-content-item="onRemoveContentItem"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '@/stores/blog'
import { useArray } from '~/composables/useArray'
import { useAppStore } from '~/stores/app'
import type { Content, PostItem } from '~/stores/blog/types'
import { useUserStore } from '~/stores/user'

const blogStore = useBlogStore()
const appStore = useAppStore()
const userStore = useUserStore()
const route = useRoute()

const { deepCopy } = useArray()
const { getPostByKey, updatePost } = blogStore

const editContent = ref<Content[] | null>(null)
const { editMode } = storeToRefs(appStore)
const { isAdmin } = storeToRefs(userStore)

const state = computed<PostItem | undefined>(() =>
  getPostByKey(route.params.key)
)
const showController = computed(() => isAdmin.value)
const onComplete = () => {
  if (state.value && editContent.value) {
    updatePost({ ...state.value, content: editContent.value })
    editMode.value = false
    editContent.value = null
  }
}

const onCancel = () => {
  editMode.value = false
  editContent.value = null
}
const onRemoveContentItem = (removeId: string) => {
  if (editContent.value?.length) {
    editContent.value = editContent.value?.filter(({ id }) => id !== removeId)
  }
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

onBeforeUnmount(() => {
  editMode.value = false
})

definePageMeta({
  layout: 'article',
  middleware: ['post-server']
})
</script>
