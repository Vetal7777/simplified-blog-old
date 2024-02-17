<template>
  <div class="mockup-code">
    <pre
      v-for="(codeLine, key) in calculatedCodeList"
      :key="key"
    ><code>{{codeLine}}</code></pre>
  </div>
</template>

<script setup lang="ts">
import type { BlogPostCodeProps } from './types'

const { children } = defineProps<BlogPostCodeProps>()

const calculatedCodeList = computed(() => children.split('\n'))
</script>
