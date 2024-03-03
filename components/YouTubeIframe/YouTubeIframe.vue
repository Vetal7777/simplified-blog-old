<template>
  <iframe
    :title="title"
    class="w-full"
    height="315"
    :src="src"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  />
</template>

<script setup lang="ts">
import type { YouTubeIframeProps } from './types/YouTubeIframeProps'

defineProps<YouTubeIframeProps>()
</script>
