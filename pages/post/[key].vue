<template>
  <div v-if="state" class="flex flex-col gap-7">
    <header class="relative flex">
      <!-- Header content -->
      <div class="mr-18 flex flex-col gap-2">
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
        @click="editMode = false"
      >
        Complete
      </button>
    </header>
    <main class="flex flex-col gap-3">
      <YouTubeIframe :title="state.key" :src="state.youtube" />
      <ContentList
        v-if="state.content"
        :list="state.content"
        :editMode="editMode"
      />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '@/stores/blog'
import type { PostItem } from '~/stores/blog/types'

const blogStore = useBlogStore()
const route = useRoute()

const { getPostByKey } = blogStore
const state = ref<PostItem | undefined>(getPostByKey(route.params.key))
const editMode = ref(false)

onBeforeMount(() => {
  if (!state.value) {
    navigateTo({ name: 'index' })
  }
})

definePageMeta({
  layout: 'article'
})
</script>
