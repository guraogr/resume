import { microCmsClient } from '@/lib/http/microCmsClient'

const getProjects = async (req: any, res: any) => {
  const response = await microCmsClient.get({
    endpoint: 'projects',
  })
  // TODO: 例外処理必要
  return res.status(200).json(response)
}

export default getProjects
