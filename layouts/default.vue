<template>
  <div>
    <header class="bg-primary-1 fixed z-10 flex w-full flex-col pb-5">
      <div class="text-9xl font-black leading-85px text-black">Vetal7777</div>
      <div class="text-right text-4xl font-black leading-3 text-white">
        simplified Blog
      </div>
    </header>
    <main
      class="mx-auto flex max-h-screen w-screen max-w-4xl translate-y-32 flex-col gap-3 p-5"
    >
      <slot />
    </main>
  </div>
</template>
