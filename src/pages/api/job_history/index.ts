import { type NextApiRequest, type NextApiResponse } from 'next'

import { microCmsClient } from '@/lib/http/microCmsClient'

const getJobHistory = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const response = await microCmsClient.get({
    endpoint: 'job_history',
  })
  res.status(200).json(response)
}
export default getJobHistory
