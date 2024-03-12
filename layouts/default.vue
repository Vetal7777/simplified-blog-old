<template>
  <div>
    <header class="fixed top-0 z-10 flex w-full justify-end bg-primary-1 p-4">
      <Transition class="animate-slide-from-left">
        <div
          v-if="isAuth"
          class="text-primary-2 absolute left-0 top-0 text-4xl font-black leading-7"
        >
          admin
        </div>
      </Transition>
      <BaseButton title="Home" @click="navigateToHome" />
    </header>
    <main
      class="mx-auto box-border flex min-h-screen w-screen max-w-4xl flex-col gap-3 p-5 pt-25"
    >
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouteName } from '~/constants/router'
import { useAdminStore } from '~/stores/admin'

const router = useRouter()
const adminStore = useAdminStore()

const { isAuth } = storeToRefs(adminStore)

const navigateToHome = () => {
  router.push({ name: RouteName.home })
}
</script>
