import { useBlogStore } from '~/stores/blog'

export default defineNuxtRouteMiddleware(() => {
  if (process.server) {
    const blog = useBlogStore()
    const { $vuefire } = useNuxtApp()
    const { list } = storeToRefs(blog)

    const { getAllPosts } = $vuefire

    const allPosts = getAllPosts()

    if (allPosts.length) {
      list.value = allPosts
    }
  }
})
