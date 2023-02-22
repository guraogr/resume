import aspida, { type FetchConfig } from '@aspida/fetch'
import qs from 'qs'

import api from '@/apis/$api'
import { clientEnv } from 'env/validators'

const fetchConfig: FetchConfig = {
  baseURL: clientEnv.NEXT_PUBLIC_APP_URL + '/api/',
  paramsSerializer: (params) => qs.stringify(params),
  throwHttpErrors: true,
}

const apiClient = api(aspida(fetch, fetchConfig))

export default apiClient
