export const useAppStore = defineStore('app', () => {
  const editMode = ref(false)

  return { editMode }
})
