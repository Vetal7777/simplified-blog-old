<template>
  <div v-if="state" class="flex flex-col gap-7">
    <header class="flex flex-col gap-2">
      <div class="text-4xl font-black text-black dark:text-white">
        {{ state.title }}
      </div>
      <DateLabel :date="state.createDate" />
      <TagBadge v-for="(tag, key) in state.tags" :tag="tag" :key="key" />
    </header>
    <main class="flex flex-col gap-3">
      <YouTubeIframe :title="state.key" :src="state.youtube" />
      <BlogPostContent v-if="state.content" :list="state.content" />
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

onBeforeMount(() => {
  if (!state.value) {
    navigateTo({ name: 'index' })
  }
})

definePageMeta({
  layout: 'article'
})
</script>
~/stores/blog~/stores/blog/types
