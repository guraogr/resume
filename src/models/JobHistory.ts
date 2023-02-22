import { type z } from 'zod'

import {
  type jobHistorySchema,
  type jobHistoriesSchema,
} from '@/lib/http/schema/jobHistorySchema'

export type JobHistory = z.infer<typeof jobHistorySchema>

export type JobHistries = z.infer<typeof jobHistoriesSchema>
