import { Box } from '@mantine/core'

import { Header } from '@/components/Header'
import { PAGE_TITLE_MAP } from '@/constans/title'
import { ProfileCard } from '@/features/ProfileCard'
import { Head } from '@/features/misc/Head'
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
        <Box sx={{ maxWidth: 292 }}>
          <ProfileCard
            bg={'/images/profile_bg.png'}
            thumbnail={'/images/my_photo.png'}
            thumbnailAlt={'おぐらひろきの自画像'}
            name={'おぐら ひろき'}
            job={'デザインエンジニア'}
            githubId={'guraogr'}
            description={
              '1999年京都府生まれ。デザインエンジニア。ECCコンピュータ専門学校卒業後、BizReach、YumemiなどのIT企業でデザイナーとしてサービス開発に携わりつつ、個人で数社のスタートアップの事業改善・デザイン・開発など幅広く携わる。'
            }
            hashtag={'#BtoB #SaaS #DX #Front-end #PdM #組織 #キャリア'}
          />
        </Box>
      </DefaultLayout>
    </>
  )
}
export default Home
