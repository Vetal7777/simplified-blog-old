<template>
  <div class="flex flex-col gap-2">
    <template v-for="(item, key) in list" :key="key">
      <!-- Heading -->
      <ContentHeading
        v-if="item.target === ContentTarget.heading"
        v-model="item.children"
        :children="item.children"
        :editMode="editMode"
        class="container"
      />
      <!-- Simple text -->
      <ContentSimpleText
        v-if="item.target === ContentTarget.simpleText"
        v-model="item.children"
        :children="item.children"
        :editMode="editMode"
        class="container"
      />
      <!-- Code -->
      <ContentCode
        v-if="item.target === ContentTarget.code"
        v-model="item.children"
        :children="item.children"
        :editMode="editMode"
        class="container"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ContentTarget } from '~/constants/blog'
import type { ContentListProps } from './types'

const { list, editMode } = defineProps<ContentListProps>()
</script>
