<template>
  <div class="absolute right-0 top-0">
    <BaseButton
      v-if="!editMode"
      title="Edit"
      :size="BaseButtonSizeValue.sm"
      @click="editMode = true"
    />
    <template v-else>
      <div class="flex gap-3">
        <BaseButton
          title="Cancel"
          :size="BaseButtonSizeValue.sm"
          @click="$emit('cancel')"
        />
        <BaseButton
          title="Complete"
          :size="BaseButtonSizeValue.sm"
          @click="$emit('complete')"
        />
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import BaseButton from '~/components/Ui/BaseButton/BaseButton.vue'
import { BaseButtonSizeValue } from '~/constants/global'
import { useAppStore } from '~/stores/app'

const appStore = useAppStore()

const { editMode } = storeToRefs(appStore)
</script>
