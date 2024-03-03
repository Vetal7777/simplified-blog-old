import type { ContentTarget } from '~/constants/blog'

export type Heading = {
  id: string
  target: ContentTarget.heading
  value: string
  link?: string
}
