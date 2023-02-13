import {
  type MicroCMSListResponse,
  type MicroCMSQueries,
} from 'microcms-js-sdk'

import { type JobHistory } from '@/models/JobHistory'

export interface Methods {
  get: {
    query?: MicroCMSQueries
    resBody: MicroCMSListResponse<JobHistory>
  }
}
