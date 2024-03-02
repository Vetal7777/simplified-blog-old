export const useAppStore = defineStore('app', () => {
  const editMode = ref(false)
  const isLoading = ref(false)

  return { editMode, isLoading }
})
