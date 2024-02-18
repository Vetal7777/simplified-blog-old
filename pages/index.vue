<template>
  <div class="flex flex-col gap-20 text-black dark:text-white">
    <FilterPanel />
    <div class="flex w-full flex-col gap-3">
      <PostPreview v-for="(item, key) in list" :item="item" :key="key" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog'

const blogStore = useBlogStore()

const { list } = storeToRefs(blogStore)
</script>
~/stores/blog
