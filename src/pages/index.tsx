import { Box } from '@mantine/core'
import { QueryClient, dehydrate } from '@tanstack/react-query'
import { type GetStaticProps } from 'next'

import ProfilePage from '@/components/page/profile'
import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'
import { grobalNavigationLinks } from '@/constans'
import { PAGE_TITLE_MAP } from '@/constans/title'
import { fetchJobHistory } from '@/features/JobHistory/api/fetchJobHistory'
import { Head } from '@/features/Misc/Head/index'
import { type JobHistries } from '@/models/JobHistory'
import { type GetListRequestQuery } from '@/models/Request'
import { clientEnv } from 'env/validators'

interface Props {
  data: GetListRequestQuery<JobHistries>
}

const Home: React.FC<Props> = (props) => {
  return (
    <>
      <Head
        title={PAGE_TITLE_MAP.PROFILE}
        pageUrl={clientEnv.NEXT_PUBLIC_APP_URL}
        type="website"
      />
      <Box bg={'white'}>
        <Header links={grobalNavigationLinks} />
        <ProfilePage />
        <Footer links={grobalNavigationLinks} />
      </Box>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const queryClient = new QueryClient()
  await queryClient.prefetchQuery(
    ['job_history'],
    async () => await fetchJobHistory()
  )
  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  }
}

export default Home
