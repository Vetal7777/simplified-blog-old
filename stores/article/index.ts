import { defineStore } from 'pinia'
import type { Article } from './types'

export const useArticleStore = defineStore('article', () => {
  const list = ref<Article[]>([
    {
      title: '8 NEW JavaScript 2024 Features',
      key: '8-new-js-feautures-2024',
      youtube: 'https://www.youtube.com/watch?v=duNEnLUxie8&t=44s'
    }
  ])

  const getArticleByKey = (
    currentKey: string | string[]
  ): Article | undefined => list.value.find(({ key }) => currentKey === key)

  return { list, getArticleByKey }
})
