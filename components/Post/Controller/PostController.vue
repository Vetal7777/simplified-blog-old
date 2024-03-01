<template>
  <div class="absolute right-0 top-0">
    <button v-if="!editMode" class="btn btn-sm" @click="editMode = true">
      Edit
    </button>
    <template v-else>
      <div class="flex gap-3">
        <button class="btn btn-sm" @click="$emit('cancel')">Cancel</button>

        <button class="btn btn-sm" @click="$emit('complete')">Complete</button>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()

const { editMode } = storeToRefs(appStore)
</script>
