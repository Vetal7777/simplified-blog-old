import type { ContentTarget } from '~/constants/blog'

export type SimpleText = {
  id: string
  target: ContentTarget.simpleText
  value: string
}
