import { useQuery } from '@tanstack/react-query'
import { type GetStaticProps } from 'next'

import ProfilePage from '@/components/page/profile'
import { Header } from '@/components/ui/Header'
import { PAGE_TITLE_MAP } from '@/constans/title'
import { Head } from '@/features/Misc/Head'
import { DefaultLayout } from '@/layouts/Default'
import apiClient from '@/lib/apiClient'
import { clientEnv } from 'env/validators'

const headerLinks = [
  {
    link: '/',
    label: 'プロフィール',
  },
  {
    link: '/project',
    label: '参画プロジェクト',
  },
  {
    link: '/contact',
    label: 'お問い合わせ',
  },
]

interface Props {
  histories: any
}

const Home: React.FC<Props> = (props) => {
  const { data } = useQuery({
    queryKey: ['job_history'],
    queryFn: apiClient.jobHistory.$get(),
    initialData: props.histories,
  })
  console.log(data)
  return (
    <>
      <Head
        title={PAGE_TITLE_MAP.PROFILE}
        pageUrl={clientEnv.NEXT_PUBLIC_APP_URL}
        type="website"
      />
      <Header links={headerLinks} />
      <DefaultLayout>
        <ProfilePage />
      </DefaultLayout>
    </>
  )
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const histories = await apiClient.jobHistory.$get()
  return { props: { histories } }
}

export default Home
