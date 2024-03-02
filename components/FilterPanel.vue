<template>
  <div class="flex flex-col gap-2">
    <BaseInput
      class="max-w-full"
      top-left-label="Search"
      v-model="state.content"
      clear-button
      @input="$emit('update', state)"
    />
  </div>
</template>

<script setup lang="ts">
import { INIT_FILTER_DATA } from '~/constants/filter'
import BaseInput from './Ui/BaseInput/BaseInput.vue'

defineEmits(['update'])

const state = ref(INIT_FILTER_DATA)
</script>
