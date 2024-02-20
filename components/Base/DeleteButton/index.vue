<template>
  <div class="absolute right-4 top-0 hidden h-full items-center justify-center">
    <button
      class="btn btn-circle h-6 min-h-6 w-6 bg-red-500"
      @click.stop="$emit('click')"
    >
      <Icon name="tabler:trash-filled" color="white" />
    </button>
  </div>
</template>
