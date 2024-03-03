export const useAdminStore = defineStore('admin', () => {
  const isAdmin = ref(false)

  return { isAdmin }
})
