import { z } from 'zod'

export type ValidateData = {
  validateOnUpdate?: boolean
  rules: z.ZodString
}
