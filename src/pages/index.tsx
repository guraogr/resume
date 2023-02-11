import ProfilePage from '@/components/page/profile'
import { Header } from '@/components/ui/Header'
import { PAGE_TITLE_MAP } from '@/constans/title'
import { Head } from '@/features/Misc/Head'
import { DefaultLayout } from '@/layouts/Default'
import { clientEnv } from 'env/schema'

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

const Home: React.FC = () => {
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
export default Home
