import ProjectsPage from '@/components/page/projects'
import { Header } from '@/components/ui/Header'
import { grobalNavigationLinks } from '@/constans'
import { PAGE_TITLE_MAP } from '@/constans/title'
import { Head } from '@/features/Misc/Head'
import { DefaultLayout } from '@/layouts/Default'
import { clientEnv } from 'env/validators'

const Projects: React.FC = (props) => {
  return (
    <>
      <Head
        title={PAGE_TITLE_MAP.PROJECTS}
        pageUrl={clientEnv.NEXT_PUBLIC_APP_URL}
        type="website"
      />
      <Header links={grobalNavigationLinks} />
      <DefaultLayout>
        <ProjectsPage />
      </DefaultLayout>
    </>
  )
}

export default Projects
