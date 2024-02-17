<template>
  <div class="flex flex-col gap-2 pt-16">
    <template v-for="(item, key) in list" :key="key">
      <BlogPostHeading
        v-if="item.target === ContentTarget.heading"
        v-bind="item.props"
      />
      <BlogPostSimpleText
        v-if="item.target === ContentTarget.simpleText"
        v-bind="item.props"
      />
      <BlogPostCode
        v-if="item.target === ContentTarget.code"
        v-bind="item.props"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ContentTarget } from '~/constants/blog'
import type { BlogPostContent } from './types'

const { list } = defineProps<BlogPostContent>()
</script>
