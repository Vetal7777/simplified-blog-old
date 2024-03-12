<template>
  <div class="flex flex-col gap-20 text-black dark:text-white">
    <FilterPanel @update="onFilter" />
    <div class="flex w-full flex-col gap-3">
      <!-- No-empty list -->
      <template v-if="list.length">
        <PostPreview
          v-for="(item, index) in list"
          :key="`${item.key}-${index}`"
          :item="item"
        />
      </template>
      <!-- Empty list -->
      <div v-else class="w-full text-center text-white">Empty list</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useBlogStore } from '~/stores/blog'
import type { FilterData } from '~/types'

const blogStore = useBlogStore()

const { list } = storeToRefs(blogStore)

const onFilter = (data: FilterData) => {
  /* eslint no-console:'warn' */
  console.log('filter', data)
}

definePageMeta({
  layout: 'home-page'
})
</script>
