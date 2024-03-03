import type { ContentTarget } from '~/constants/blog'

export type Code = {
  id: string
  target: ContentTarget.code
  value: string
}
