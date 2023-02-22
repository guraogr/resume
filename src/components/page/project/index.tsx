import { Container } from '@mantine/core'
import { useRouter } from 'next/router'
import { memo } from 'react'

import { useFetchProject } from '@/features/Projects/api/fetchProject'

const ProjectPage = memo(function ProjectsPage() {
  const router = useRouter()
  const { id } = router.query
  const { data } = useFetchProject(id as string)
  console.log(data)
  return <Container></Container>
})

export default ProjectPage
