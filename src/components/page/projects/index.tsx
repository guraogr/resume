import { memo } from 'react'

import { Footer } from '@/components/ui/Footer'
import { grobalNavigationLinks } from '@/constans'

const ProjectsPage = memo(function ProjectsPage() {
  return (
    <>
      <Footer links={grobalNavigationLinks} />
    </>
  )
})

export default ProjectsPage
