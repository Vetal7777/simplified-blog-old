import type { PostTag } from '~/constants/blog'
import type { Content } from '.'

export type PostItem = {
  id: string
  title: string
  key: string
  youtube?: string
  tags: PostTag[]
  createDate: string
  content: Content[]
}
