import * as z from 'zod'

export const clientSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
})

export const clientEnv = clientSchema.parse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
})
