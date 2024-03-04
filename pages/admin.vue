<template>
  <div class="flex h-full flex-1 items-center justify-center">
    <BaseForm title="Admin authentication">
      <template #main>
        <BaseInput
          v-model="state[FormKey.email].value"
          :name="FormKey.email"
          top-left-label="Email"
          :validate="state[FormKey.email].validate"
          @error="(error) => onError(FormKey.email, error)"
        />
        <BaseInput
          v-model="state[FormKey.password].value"
          :name="FormKey.password"
          top-left-label="Password"
          :type="BaseInputType.password"
          :validate="state[FormKey.password].validate"
          @error="(error) => onError(FormKey.password, error)"
        />
      </template>
      <template #controllbar>
        <BaseButton title="Sign in" :disabled="isError" @click="onSubmit" />
      </template>
    </BaseForm>
  </div>
</template>

<script setup lang="ts">
import { BaseInputType } from '~/constants/global'
import { RouteName } from '~/constants/router'
import { required } from '~/constants/zod-rules'
import type { ErrorMessage } from '~/types/ErrorMessage'
import type { FormStateData } from '~/types/FormStateData'

enum FormKey {
  email = 'email',
  password = 'password'
}

const router = useRouter()
const { $vuefire } = useNuxtApp()

const { login } = $vuefire

const state = ref<FormStateData>({
  [FormKey.email]: {
    value: '',
    validate: {
      rules: required.email()
    },
    error: ''
  },
  [FormKey.password]: {
    value: '',
    validate: {
      rules: required
    },
    error: ''
  }
})

const isError = computed(() =>
  Object.values(state.value)
    .map(({ error, value }) => Boolean(value) && !error)
    .includes(false)
)

const onError = (key: FormKey, error: ErrorMessage) => {
  state.value[key].error = error
}
const onSubmit = async () => {
  const data = await login(
    state.value[FormKey.email].value,
    state.value[FormKey.password].value
  )

  if (data) {
    router.push({ name: RouteName.home })
  }
}
</script>
