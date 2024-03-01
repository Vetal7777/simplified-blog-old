export const useUserStore = defineStore('user', () => {
  const isAuth = ref(true)
  const isAdmin = ref(true)

  return { isAdmin, isAuth }
})
