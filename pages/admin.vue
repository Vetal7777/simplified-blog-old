<template>
  <div class="flex h-full flex-1 items-center justify-center">
    <BaseForm title="Admin authentication">
      <template #main>
        <BaseInput v-model="state.login" top-left-label="Login" />
        <BaseInput
          v-model="state.password"
          top-left-label="Password"
          :type="BaseInputType.password"
        />
      </template>
      <template #controllbar>
        <BaseButton title="Sign in" />
      </template>
    </BaseForm>
  </div>
</template>

<script setup lang="ts">
import { BaseInputType } from '~/constants/global'

const state = ref({
  login: '',
  password: ''
})
</script>
