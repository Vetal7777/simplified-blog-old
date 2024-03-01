export const useUserStore = defineStore('user', () => {
  const isAdmin = ref(false)

  return { isAdmin }
})
