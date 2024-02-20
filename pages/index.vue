<template>
  <div class="flex flex-col gap-20 text-black dark:text-white">
    <FilterPanel />
    <div class="flex w-full flex-col gap-3">
      <!-- No-empty list -->
      <template v-if="list.length">
        <PostPreview v-for="(item, key) in list" :item="item" :key="key" />
      </template>
      <!-- Empty list -->
      <div v-else class="w-full text-center text-white">Empty list</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog'

const blogStore = useBlogStore()

const { list } = storeToRefs(blogStore)
</script>
