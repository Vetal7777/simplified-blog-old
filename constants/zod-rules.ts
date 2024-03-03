import { z } from 'zod'

// Zod rules doc
// https://github.com/colinhacks/zod
export const required = z.string().min(1, {
  message: 'Required'
})
