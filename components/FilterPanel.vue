<template>
  <div class="flex flex-col gap-2">
    <BaseInput
      v-model="state.content"
      name="search"
      class="max-w-full"
      top-left-label="Search"
      clear-button
      @input="$emit('update', state)"
    />
  </div>
</template>

<script setup lang="ts">
import { INIT_FILTER_DATA } from '~/constants/filter'
defineEmits(['update'])

const state = ref(INIT_FILTER_DATA)
</script>
