import {
  type MicroCMSListResponse,
  type MicroCMSQueries,
} from 'microcms-js-sdk'

import { type Project } from '@/models/Projects'

export interface Methods {
  get: {
    query?: MicroCMSQueries
    resBody: MicroCMSListResponse<Project>
  }
}
