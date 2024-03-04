<template>
  <div class="absolute right-4 top-0 hidden h-full items-center justify-center">
    <button
      class="bg-primary-2 du-btn du-btn-circle h-6 min-h-6 w-6"
      @click.stop="$emit('remove')"
    >
      <Icon name="tabler:trash-filled" color="white" />
    </button>
  </div>
</template>
