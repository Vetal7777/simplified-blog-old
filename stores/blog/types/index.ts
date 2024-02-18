import type { ContentCodeProps } from '~/components/Content/Code/types'
import type { ContentHeadingProps } from '~/components/Content/Heading/types'
import type { ContentSimpleTextProps } from '~/components/Content/SimpleText/types'
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
  props: ContentHeadingProps
}
export type SimpleText = {
  target: ContentTarget.simpleText
  props: ContentSimpleTextProps
}
export type Code = {
  target: ContentTarget.code
  props: ContentCodeProps
}

export type Content = Heading | SimpleText | Code
