import { QueryClient, dehydrate } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import { type GetStaticProps } from 'next'

import ProjectsPage from '@/components/page/projects'
import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'
import { grobalNavigationLinks } from '@/constans'
import { PAGE_TITLE_MAP } from '@/constans/title'
import { Head } from '@/features/Misc/Head'
import { fetchProjects } from '@/features/Projects/api/fetchProjects'
import { DefaultLayout } from '@/layouts/Default'
import { clientEnv } from 'env/validators'

const Projects: React.FC = () => {
  // const { data } = useFetchProjects()
  // console.log(data)
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
      <Footer links={grobalNavigationLinks} />
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  )
}
export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    ['projects'],
    async () => await fetchProjects()
  )
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Projects
