import { type NextApiResponse, type NextApiRequest } from 'next'
import { z } from 'zod'

import { microCmsClient } from '@/lib/http/microCmsClient'

const querySchema = z.object({
  ids: z.string(),
})

const getProject = async (
  req: NextApiRequest,
  res: NextApiResponse
): Promise<
  | {
      error: string
    }
  | undefined
> => {
  const result = querySchema.safeParse(req.query)
  if (!result.success) {
    res.status(400).json({ error: { messsage: 'クエリが不正です' } })
    return
  }
  const { ids } = result.data
  try {
    const response = await microCmsClient.get({
      endpoint: 'projects',
      contentId: ids,
    })
    res.status(200).json(response)
  } catch (error) {
    return {
      error: 'プロジェクトが見つかりません',
    }
  }
}

export default getProject
