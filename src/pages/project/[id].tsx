import { dehydrate, QueryClient } from '@tanstack/react-query'
import { type GetStaticProps, type GetStaticPaths } from 'next'

import ProjectPage from '@/components/page/project'
import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'
import { grobalNavigationLinks, spacing } from '@/constans'
import { PAGE_TITLE_MAP } from '@/constans/title'
import { Head } from '@/features/Misc/Head'
import { fetchProject } from '@/features/Projects/api/fetchProject'
import { DefaultLayout } from '@/layouts/Default'
import { clientEnv } from 'env/validators'

const Project: React.FC = () => {
  return (
    <>
      <Head
        title={PAGE_TITLE_MAP.PROJECTS}
        pageUrl={clientEnv.NEXT_PUBLIC_APP_URL}
        type="website"
      />
      <Header links={grobalNavigationLinks} />
      <DefaultLayout px={spacing[0]}>
        <ProjectPage />
      </DefaultLayout>
      <Footer links={grobalNavigationLinks} />
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    fallback: 'blocking',
    paths: [],
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context
  if (!params?.id) {
    throw new Error('Error: IDが見つかりませんでした')
  }
  const id = params.id
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    ['project', id],
    async () => await fetchProject(id)
  )
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Project
