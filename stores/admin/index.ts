export const useAdminStore = defineStore('admin', () => {
  const admin = useCurrentUser()
  const isAuth = computed(() => Boolean(admin.value))

  return { isAuth, admin }
})
