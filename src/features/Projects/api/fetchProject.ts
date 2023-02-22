import { useQuery, type UseQueryResult } from '@tanstack/react-query'

import apiClient from '@/lib/http/apiClient'
import { type Projects } from '@/models/Projects'
import { type GetListRequestQuery } from '@/models/Request'

export const fetchProject = async (
  id: string | string[]
): Promise<GetListRequestQuery<Projects>> => {
  return await apiClient.project.$get({ query: { ids: id } })
}

type UseFetchProjectsResult = UseQueryResult<GetListRequestQuery<Projects>>

export const useFetchProject = (
  id: string | string[]
): UseFetchProjectsResult => {
  return useQuery({
    queryKey: ['project', id],
    queryFn: async () => await fetchProject(id),
  })
}
