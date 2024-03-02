export const useAppStore = defineStore('app', () => {
  const editMode = ref(false)
  const tasks = ref([])
  const isLoading = computed(() => Boolean(tasks.value.length))

  return { editMode, isLoading, tasks }
})
