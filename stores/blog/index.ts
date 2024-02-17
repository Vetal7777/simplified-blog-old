import { defineStore } from 'pinia'
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
          target: ContentTarget.heading,
          props: {
            children: 'toSorted()'
          }
        },
        {
          target: ContentTarget.simpleText,
          props: {
            children:
              'The toSorted() method of Array instances is the copying version of the sort() method. It returns a new array with the elements sorted in ascending order.'
          }
        },
        {
          target: ContentTarget.code,
          props: {
            children:
              'arr.sort()\n\n//same but without mutatuions\narr.toSorted()'
          }
        }
      ]
    }
  ])

  const getPostByKey = (currentKey: string | string[]): PostItem | undefined =>
    list.value.find(({ key }) => currentKey === key)

  return { list, getPostByKey }
})
