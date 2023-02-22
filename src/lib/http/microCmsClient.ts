import { createClient } from 'microcms-js-sdk'

import { clientEnv } from 'env/validators'

export const microCmsClient = createClient({
  serviceDomain: clientEnv.NEXT_PUBLIC_SERVICE_DOMAIN,
  apiKey: clientEnv.NEXT_PUBLIC_API_KEY,
})
