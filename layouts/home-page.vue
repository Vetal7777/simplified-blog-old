<template>
  <div>
    <header class="fixed z-10 flex w-full flex-col bg-primary-1 pb-4">
      <div class="text-9xl font-black leading-85px text-black">Vetal7777</div>
      <div class="relative flex justify-end">
        <Transition class="animate-slide-from-left">
          <div
            v-if="isAuth"
            class="text-primary-2 absolute left-0 text-4xl font-black leading-3"
          >
            admin
          </div>
        </Transition>
        <div class="text-right text-4xl font-black leading-3 text-white">
          simplified Blog
        </div>
      </div>
    </header>
    <main
      class="mx-auto flex max-h-screen w-screen max-w-4xl translate-y-32 flex-col gap-3 p-5"
    >
      <slot />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useAdminStore } from '~/stores/admin'

const adminStore = useAdminStore()
const { isAuth } = storeToRefs(adminStore)
</script>
