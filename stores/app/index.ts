export const useAppStore = defineStore('app', () => {
  const editMode = ref(false)
  const isLoading = ref(true)

  return { editMode, isLoading }
})
