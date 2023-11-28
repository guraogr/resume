import { z } from 'zod'

import { JobType } from '@/constans/http'

export const jobHistorySchema = z.object({
  logo: z.string(),
  logoAlt: z.string(),
  companyName: z.string(),
  job: z.string(),
  workedTime: z.string(),
  desc: z.string(),
  desc2: z.string(),
  jobType: z.enum(JobType).array(),
  exp: z.string(),
})
export const jobHistoriesSchema = z.array(jobHistorySchema)

export const fetchJobHistoriesSchema = z.object({
  contents: jobHistoriesSchema,
  limit: z.number(),
  offset: z.number(),
  totalCount: z.number(),
})
