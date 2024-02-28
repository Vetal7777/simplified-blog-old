export const useUserStore = defineStore('user', () => {
  const isAuth = ref(true)
  const isAdmin = ref(false)

  return { isAdmin, isAuth }
})
