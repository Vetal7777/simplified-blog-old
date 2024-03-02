<template>
  <div class="du-card w-full bg-base-100 shadow-xl">
    <div class="du-card-body flex flex-col gap-4">
      <!-- Post Title -->
      <div class="cursor-pointer hover:underline">
        <BaseHeading
          :value="item.title"
          :size="BaseHeadingSize.lg"
          @click="navigateToPostPage"
        />
      </div>
      <div class="flex items-center justify-between gap-3">
        <!-- Post Date -->
        <BaseDateLabel :value="item.createDate" />
        <!-- YouTube flag -->
        <Icon v-if="item.youtube" name="logos:youtube-icon" size="30" />
      </div>
      <!-- Post tags -->
      <BaseBadge v-for="tag in item.tags" :key="tag" :value="tag" />
      <!-- Content preview -->
      <main class="flex flex-col gap-3">
        <ContentList
          v-if="item.content"
          preview
          :list="item.content.slice(0, 2)"
        />
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
import { BaseHeadingSize } from '~/constants/global'
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
.du-card:hover .delete-button {
  @apply flex animate-slide-in;
}
</style>
