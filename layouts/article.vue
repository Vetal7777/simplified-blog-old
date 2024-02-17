<template>
  <div>
    <header class="fixed z-10 flex w-full justify-end bg-lime p-4">
      <button class="btn" @click="navigateToHome">Home</button>
    </header>
    <main
      class="mx-auto flex max-h-screen w-screen max-w-4xl translate-y-20 flex-col gap-3 p-5"
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
