export const useUserStore = defineStore('user', () => {
  const isAdmin = ref(true)

  return { isAdmin }
})
