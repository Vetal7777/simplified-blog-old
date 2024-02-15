<template>
  <div v-if="state" class="flex flex-col">
    <div class="text-4xl font-black text-black dark:text-white">
      {{ state.title }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useArticleStore } from '@/stores/article'
import type { Article } from '~/stores/article/types'

const articleStore = useArticleStore()
const route = useRoute()

const { getArticleByKey } = articleStore

const { list } = storeToRefs(articleStore)
const state = ref<Article | undefined>(getArticleByKey(route.params.key))

onBeforeMount(() => {
  if (!state.value) {
    navigateTo({ name: 'index' })
  }
})
</script>
