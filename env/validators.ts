import * as z from 'zod'

export const clientSchema = z.object({
  NEXT_PUBLIC_APP_URL: z.string().url(),
  NEXT_PUBLIC_API_KEY: z.string(),
  NEXT_PUBLIC_SERVICE_DOMAIN: z.string(),
  NEXT_PUBLIC_MICROCMS_URL: z.string().url(),
})

export const clientEnv = clientSchema.parse({
  NEXT_PUBLIC_APP_URL: process.env.NEXT_PUBLIC_APP_URL,
  NEXT_PUBLIC_API_KEY: process.env.NEXT_PUBLIC_API_KEY,
  NEXT_PUBLIC_MICROCMS_URL: process.env.NEXT_PUBLIC_MICROCMS_URL,
  NEXT_PUBLIC_SERVICE_DOMAIN: process.env.NEXT_PUBLIC_SERVICE_DOMAIN,
})
