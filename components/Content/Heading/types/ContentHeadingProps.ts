import type { Heading } from '~/stores/blog/types'

export type ContentHeadingProps = Pick<Heading, 'value'> & Pick<Heading, 'link'>
