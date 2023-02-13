import aspida, { type FetchConfig } from '@aspida/fetch'
import qs from 'qs'

import api from '@/api/$api'
import { clientEnv } from 'env/validators'

const fetchConfig: FetchConfig = {
  baseURL: clientEnv.NEXT_PUBLIC_BASE_URL,
  headers: {
    'X-MICROCMS-API-KEY': clientEnv.NEXT_PUBLIC_API_KEY,
  },
  paramsSerializer: (params) => qs.stringify(params),
  throwHttpErrors: true,
}

const apiClient = api(aspida(fetch, fetchConfig))

export default apiClient
