import { RouteName } from '~/constants/router'
import { useBlogStore } from '~/stores/blog'

export default defineNuxtRouteMiddleware((to) => {
  const router = useRouter()
  const { getPostByKey } = useBlogStore()

  const postByKey = getPostByKey(to.params.key)

  if (!postByKey) {
    router.push({ name: RouteName.home })
  }
})
