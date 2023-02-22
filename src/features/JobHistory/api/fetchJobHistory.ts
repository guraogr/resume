import { useQuery, type UseQueryResult } from '@tanstack/react-query'

import apiClient from '@/lib/http/apiClient'
import { type JobHistries } from '@/models/JobHistory'
import { type GetListRequestQuery } from '@/models/Request'

export const fetchJobHistory = async (): Promise<
  GetListRequestQuery<JobHistries>
> => {
  return await apiClient.job_history.$get()
}

type UseFetchJobHistoryResult = UseQueryResult<GetListRequestQuery<JobHistries>>

export const useFetchJobHistory = (): UseFetchJobHistoryResult => {
  return useQuery({
    queryKey: ['job_history'],
    queryFn: async () => await fetchJobHistory(),
  })
}
