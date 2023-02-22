import { useQuery, type UseQueryResult } from '@tanstack/react-query'

import apiClient from '@/lib/http/apiClient'
import { type Projects } from '@/models/Projects'
import { type GetListRequestQuery } from '@/models/Request'

export const fetchProjects = async (): Promise<
  GetListRequestQuery<Projects>
> => {
  return await apiClient.projects.$get()
}

type UseFetchProjectsResult = UseQueryResult<GetListRequestQuery<Projects>>

export const useFetchProjects = (): UseFetchProjectsResult => {
  return useQuery({
    queryKey: ['projects'],
    queryFn: async () => await fetchProjects(),
  })
}
