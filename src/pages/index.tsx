import ProfilePage from '@/components/page/profile'
import { Footer } from '@/components/ui/Footer'
import { Header } from '@/components/ui/Header'
import { grobalNavigationLinks } from '@/constans'
import { PAGE_TITLE_MAP } from '@/constans/title'
import { Head } from '@/features/Misc/Head'
import { type JobHistries } from '@/models/JobHistory'
import { type GetListRequestQuery } from '@/models/Request'
import { clientEnv } from 'env/validators'

interface Props {
  data: GetListRequestQuery<JobHistries>
}

const Home: React.FC<Props> = (props) => {
  // const { data } = useFetchProjects()
  // console.log(data)
  // Client側のJS
  return (
    <>
      <Head
        title={PAGE_TITLE_MAP.PROFILE}
        pageUrl={clientEnv.NEXT_PUBLIC_APP_URL}
        type="website"
      />
      <Header links={grobalNavigationLinks} />
      <ProfilePage />
      <Footer links={grobalNavigationLinks} />
    </>
  )
}

// export const getStaticProps = async () => {
// const res = fetchProjects()
// fetchProjects()
// Server側のJS
// SSG = yarn buildで全データ取得 → ページごとのJSファイルにデータを保存する
//        → 必要に合わせてクライアント側でそのJSを読み込む
// getStaticProps = そもそもNextのルール上、Pages直下にしかこの関数を書けない。
// prefetchQuery = 事前にサーバー時点で取得する
// fetchProjects()
// dehydratedState
// dehydrate→queryClientに保存?
// return {
//   props: {
//     blog: dehydrate(),
//   },
// }
// }

export default Home
