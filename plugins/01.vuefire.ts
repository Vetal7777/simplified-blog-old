import { collection } from 'firebase/firestore'
import { CollectionKey } from '~/constants/vuefire'
import type { PostItem } from '~/stores/blog/types'

export default defineNuxtPlugin(() => {
  const db = useFirestore()

  const getAllPosts = (): PostItem[] => {
    const posts = useCollection(collection(db, CollectionKey.postList))

    return (posts.value as PostItem[]) ?? []
  }

  return {
    provide: {
      vuefire: {
        getAllPosts
      }
    }
  }
})
