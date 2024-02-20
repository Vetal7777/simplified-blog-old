import { defineStore } from 'pinia'
import { v4 as uuidv4 } from 'uuid'
import { ContentTarget, PostTag } from '~/constants/blog'
import type { PostItem } from './types'

export const useBlogStore = defineStore('blog', () => {
  const list = ref<PostItem[]>([
    {
      title: '8 NEW JavaScript 2024 Features',
      key: '8-new-js-feautures-2024',
      youtube: 'https://www.youtube.com/embed/duNEnLUxie8?si=6MRF3bUz4t9x4mD3',
      tags: [PostTag.js],
      createDate: '17 February 2024',
      content: [
        {
          id: uuidv4(),
          target: ContentTarget.heading,
          children: 'toSorted()'
        },
        {
          id: uuidv4(),
          target: ContentTarget.simpleText,
          children:
            'The toSorted() method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.'
        },
        {
          id: uuidv4(),
          target: ContentTarget.code,
          children:
            'arr.sort()\n\n//same but without mutatuions\narr.toSorted()'
        }
      ]
    }
  ])

  const getPostByKey = (currentKey: string | string[]): PostItem | undefined =>
    list.value.find(({ key }) => currentKey === key)

  const updatePost = (post: PostItem) => {
    list.value = list.value.map((item) => (item.key === post.key ? post : item))
  }
  const deletePost = (post: PostItem) => {
    list.value = list.value.filter((item) => item.key !== post.key)
  }

  return { list, getPostByKey, updatePost, deletePost }
})
