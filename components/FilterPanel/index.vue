<template>
  <div class="flex flex-col gap-2">
    <BaseInput label="Search" v-model="search" clear-button />
  </div>
</template>

<script setup lang="ts">
const search = ref('')
</script>

<style lang="scss" scoped></style>
