<template>
  <div class="card w-full bg-base-100 shadow-xl">
    <div class="card-body flex flex-col gap-4">
      <!-- Post Title -->
      <a
        class="cursor-pointer text-4xl font-black text-black hover:underline dark:text-white"
        @click="navigateToPostPage"
      >
        {{ item.title }}
      </a>
      <div class="flex items-center justify-between gap-3">
        <!-- Post Date -->
        <DateLabel :date="item.createDate" />
        <!-- YouTube flag -->
        <Icon v-if="item.youtube" name="logos:youtube-icon" size="30" />
      </div>
      <!-- Post tags -->
      <TagBadge v-for="(tag, key) in item.tags" :key="key" :tag="tag" />
      <!-- Content preview -->
      <main class="flex flex-col gap-3">
        <ContentList v-if="item.content" :list="item.content.slice(0, 2)" />
      </main>
    </div>
    <BaseDeleteButton
      v-if="showDeleteBtn"
      class="delete-button"
      @remove="deletePost(item)"
    />
  </div>
</template>

<script setup lang="ts">
import { RouteName } from '~/constants/router'
import { useBlogStore } from '~/stores/blog'
import { useUserStore } from '~/stores/user'
import type { PostPreviewProps } from './types'

const { item } = defineProps<PostPreviewProps>()
const router = useRouter()
const userStore = useUserStore()
const blogStore = useBlogStore()

const { isAdmin } = storeToRefs(userStore)

const { deletePost } = blogStore

const navigateToPostPage = () => {
  router.push({ name: RouteName.post, params: { key: item.key } })
}
const showDeleteBtn = computed(() => isAdmin.value)
</script>

<style lang="scss" scoped>
.card:hover .delete-button {
  @apply flex animate-slide-in;
}
</style>
