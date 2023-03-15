import type { AspidaClient } from 'aspida'
import { dataToURLString } from 'aspida'

import type { Methods as Methods0 } from './job_history'
import type { Methods as Methods1 } from './project'
import type { Methods as Methods2 } from './projects'

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '')
  const PATH0 = '/job_history'
  const PATH1 = '/project'
  const PATH2 = '/projects'
  const GET = 'GET'

  return {
    job_history: {
      get: async (
        option?:
          | {
              query?: Methods0['get']['query'] | undefined
              config?: T | undefined
            }
          | undefined
      ) =>
        await fetch<Methods0['get']['resBody']>(
          prefix,
          PATH0,
          GET,
          option
        ).json(),
      $get: async (
        option?:
          | {
              query?: Methods0['get']['query'] | undefined
              config?: T | undefined
            }
          | undefined
      ) =>
        await fetch<Methods0['get']['resBody']>(prefix, PATH0, GET, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | { method?: 'get' | undefined; query: Methods0['get']['query'] }
          | undefined
      ) =>
        `${prefix}${PATH0}${
          option && option.query ? `?${dataToURLString(option.query)}` : ''
        }`,
    },
    project: {
      get: async (
        option?:
          | {
              query?: Methods1['get']['query'] | undefined
              config?: T | undefined
            }
          | undefined
      ) =>
        await fetch<Methods1['get']['resBody']>(
          prefix,
          PATH1,
          GET,
          option
        ).json(),
      $get: async (
        option?:
          | {
              query?: Methods1['get']['query'] | undefined
              config?: T | undefined
            }
          | undefined
      ) =>
        await fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | { method?: 'get' | undefined; query: Methods1['get']['query'] }
          | undefined
      ) =>
        `${prefix}${PATH1}${
          option && option.query ? `?${dataToURLString(option.query)}` : ''
        }`,
    },
    projects: {
      get: async (
        option?:
          | {
              query?: Methods2['get']['query'] | undefined
              config?: T | undefined
            }
          | undefined
      ) =>
        await fetch<Methods2['get']['resBody']>(
          prefix,
          PATH2,
          GET,
          option
        ).json(),
      $get: async (
        option?:
          | {
              query?: Methods2['get']['query'] | undefined
              config?: T | undefined
            }
          | undefined
      ) =>
        await fetch<Methods2['get']['resBody']>(prefix, PATH2, GET, option)
          .json()
          .then((r) => r.body),
      $path: (
        option?:
          | { method?: 'get' | undefined; query: Methods2['get']['query'] }
          | undefined
      ) =>
        `${prefix}${PATH2}${
          option && option.query ? `?${dataToURLString(option.query)}` : ''
        }`,
    },
  }
}

export type ApiInstance = ReturnType<typeof api>
export default api
