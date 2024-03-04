import { signInWithEmailAndPassword, type User } from 'firebase/auth'
import { collection } from 'firebase/firestore'
import { useFirebaseAuth } from 'vuefire'
import { ToastType } from '~/constants/toast'
import { CollectionKey } from '~/constants/vuefire'
import type { PostItem } from '~/stores/blog/types'

export default defineNuxtPlugin(() => {
  const db = useFirestore()
  const auth = useFirebaseAuth()
  const { $toast } = useNuxtApp()

  const getAllPosts = (): PostItem[] => {
    const posts = useCollection(collection(db, CollectionKey.postList))

    return (posts.value as PostItem[]) ?? []
  }

  const login = async (
    email: string,
    password: string
  ): Promise<User | null> => {
    try {
      if (auth) {
        const { user } = await signInWithEmailAndPassword(auth, email, password)

        return user
      }

      throw new Error()
    } catch (error) {
      $toast.showToast('User is invalid', ToastType.error)

      return null
    }
  }

  return {
    provide: {
      vuefire: {
        getAllPosts,
        login
      }
    }
  }
})
