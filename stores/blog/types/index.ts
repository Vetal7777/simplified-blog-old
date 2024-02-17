import type { BlogPostCodeProps } from '~/components/Blog/Post/Code/types'
import type { BlogPostHeadingProps } from '~/components/Blog/Post/Heading/types'
import type { BlogPostSimpleTextProps } from '~/components/Blog/Post/SimpleText/types'
import type { ContentTarget, PostTag } from '~/constants/blog'

export type PostItem = {
  title: string
  key: string
  youtube: string
  tags: PostTag[]
  createDate: string
  content?: Content[]
}

export type Heading = {
  target: ContentTarget.heading
  props: BlogPostHeadingProps
}
export type SimpleText = {
  target: ContentTarget.simpleText
  props: BlogPostSimpleTextProps
}
export type Code = {
  target: ContentTarget.code
  props: BlogPostCodeProps
}

export type Content = Heading | SimpleText | Code
