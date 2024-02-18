import { RouteName } from '~/constants/router'
import { useBlogStore } from '~/stores/blog'

export default defineNuxtRouteMiddleware((to) => {
  const { getPostByKey } = useBlogStore()
  const postByKey = getPostByKey(to.params.key)

  if (!postByKey) {
    navigateTo({ name: RouteName.home })
  }
})
