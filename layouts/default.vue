<template>
  <div class="bg-white dark:bg-base-light-black">
    <header class="flex flex-col">
      <div class="text-lime leading-85px text-9xl font-black">Vetal7777</div>
      <div
        class="text-right text-4xl font-black leading-3 text-black dark:text-white"
      >
        simplified Blog
      </div>
    </header>
    <main class="mx-auto flex h-screen w-screen max-w-4xl flex-col gap-3 p-5">
      <slot />
    </main>
  </div>
</template>
