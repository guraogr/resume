import ProfilePage from '@/components/page/profile'
import { Header } from '@/components/ui/Header'
import { grobalNavigationLinks } from '@/constans'
import { PAGE_TITLE_MAP } from '@/constans/title'
import { Head } from '@/features/Misc/Head'
import { DefaultLayout } from '@/layouts/Default'
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
      <Header links={grobalNavigationLinks} />
      <DefaultLayout>
        <ProfilePage />
      </DefaultLayout>
    </>
  )
}

export default Home
