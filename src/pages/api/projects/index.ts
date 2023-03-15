import { type NextApiRequest, type NextApiResponse } from 'next'

import { microCmsClient } from '@/lib/http/microCmsClient'

const getProjects = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> => {
  const response = await microCmsClient.get({
    endpoint: 'projects',
    queries: { limit: 99 },
  })
  res.status(200).json(response)
}

export default getProjects
