<template>
  <div class="absolute right-0 top-0">
    <BaseButton
      v-if="!editMode"
      title="Edit"
      :size="BaseButtonSize.sm"
      @click="editMode = true"
    />
    <template v-else>
      <div class="flex gap-3">
        <BaseButton
          title="Cancel"
          :size="BaseButtonSize.sm"
          @click="$emit('cancel')"
        />
        <BaseButton
          title="Complete"
          :size="BaseButtonSize.sm"
          @click="$emit('complete')"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { BaseButtonSize } from '~/constants/global'
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()

const { editMode } = storeToRefs(appStore)
</script>
