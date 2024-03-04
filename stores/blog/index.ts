import { defineStore } from 'pinia'
import type { PostItem } from './types'

export const useBlogStore = defineStore('blog', () => {
  const list = ref<PostItem[]>([])

  const getPostByKey = (currentKey: string | string[]): PostItem | null =>
    list.value.find(({ key }) => currentKey === key) ?? null

  const updatePost = (post: PostItem) => {
    list.value = list.value.map((item) => (item.id === post.id ? post : item))
  }
  const deletePost = (id: PostItem['id']) => {
    list.value = list.value.filter((item) => item.id !== id)
  }

  return { list, getPostByKey, updatePost, deletePost }
})
