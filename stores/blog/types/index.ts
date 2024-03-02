import type { ContentTarget, PostTag } from '~/constants/blog'

export type PostItem = {
  id: string
  title: string
  key: string
  youtube?: string
  tags: PostTag[]
  createDate: string
  content: Content[]
}

export type Heading = {
  id: string
  target: ContentTarget.heading
  value: string
  link?: string
}

export type SimpleText = {
  id: string
  target: ContentTarget.simpleText
  value: string
}

export type Code = {
  id: string
  target: ContentTarget.code
  value: string
}

export type Content = Heading | SimpleText | Code
