<template>
  <div>
    <header class="fixed top-0 z-10 flex w-full justify-end bg-primary-1 p-4">
      <BaseButton title="Home" @click="navigateToHome" />
    </header>
    <main
      class="pt-25 mx-auto box-border flex min-h-screen w-screen max-w-4xl flex-col gap-3 p-5"
    >
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouteName } from '~/constants/router'

const router = useRouter()

const navigateToHome = () => {
  router.push({ name: RouteName.home })
}
</script>
