<template>
  <div class="flex flex-col gap-2">
    <template v-for="(item, index) in list">
      <!-- Heading -->
      <ContentHeading
        v-if="item.target === ContentTarget.heading"
        :key="`${item.target}-${index}`"
        v-model="item.children"
        class="container"
        :children="item.children"
        :link="item.link"
        @remove="$emit('remove-content-item', item.id)"
      />
      <!-- Simple text -->
      <ContentSimpleText
        v-if="item.target === ContentTarget.simpleText"
        :key="`${item.target}-${index}`"
        v-model="item.children"
        class="container"
        :children="item.children"
        @remove="$emit('remove-content-item', item.id)"
      />
      <!-- Code -->
      <ContentCode
        v-if="item.target === ContentTarget.code"
        :key="`${item.target}-${index}`"
        v-model="item.children"
        class="container"
        :children="item.children"
        @remove="$emit('remove-content-item', item.id)"
      />
    </template>
    <ContentEditor />
  </div>
</template>

<script setup lang="ts">
import { ContentTarget } from '~/constants/blog'
import { useAppStore } from '~/stores/app'
import type { ContentListProps } from './types'

defineProps<ContentListProps>()

const appStore = useAppStore()

const { editMode } = storeToRefs(appStore)
</script>
