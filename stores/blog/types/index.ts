import type { ContentCodeProps } from '~/components/Content/Code/types'
import type { ContentHeadingProps } from '~/components/Content/Heading/types'
import type { ContentSimpleTextProps } from '~/components/Content/SimpleText/types'
import type { ContentTarget, PostTag } from '~/constants/blog'

export type PostItem = {
  title: string
  key: string
  youtube?: string
  tags: PostTag[]
  createDate: string
  content: Content[]
}

export type Heading = {
  target: ContentTarget.heading
} & PickChildren<ContentHeadingProps>
export type SimpleText = {
  target: ContentTarget.simpleText
} & PickChildren<ContentSimpleTextProps>
export type Code = {
  target: ContentTarget.code
} & PickChildren<ContentCodeProps>

export type PickChildren<T extends { children: unknown }> = Pick<T, 'children'>

export type Content = Heading | SimpleText | Code
