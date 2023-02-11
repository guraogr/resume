import {
  Avatar,
  Box,
  Flex,
  Image,
  Stack,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { memo } from 'react'

import { ProfilePageLayout } from './layout'

import Text from '@/components/ui/Text'
import { contentsWidth, path, spacing } from '@/constans'
import { TextCard } from '@/features/TextCard'
import { semanticColors } from '@/styles/colors'
import { HEADINGS, TEXT_TYPE } from '@/styles/typography'

const ProfilePage = memo(function ProfilePage() {
  const theme = useMantineTheme()

  return (
    <>
      <ProfilePageLayout components={'section'} bg={semanticColors.bg}>
        <Flex sx={{ maxWidth: contentsWidth, margin: 'auto' }}>
          <Avatar
            src={`${path.images}/Avatar.png`}
            alt="おぐらひろきの自画像イラスト"
            size={170}
            mr={spacing[14]}
            sx={{
              borderRadius: '1000px',
              border: `8px solid ${theme.white}`,
              filter: 'drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.06))',
            }}
          ></Avatar>
          <Box>
            <Text mb={spacing[1]}>デザインエンジニア</Text>
            <Title mb={spacing[3]} size={HEADINGS.H1} order={1}>
              おぐら ひろき
            </Title>
            <Text mb={spacing[6]}>
              ECCコンピュータ専門学校卒業後、BizReach、YumemiなどのIT企業でデザイナーとしてサービス開発に携わりつつ、個人で数社のスタートアップの事業改善・デザイン・開発など幅広く携わる。
            </Text>
            <Box component="a" href={`https://github.com/guraogr`} mb={12}>
              <Image src={'/images/github.svg'} width={24} alt="github" />
            </Box>
          </Box>
        </Flex>
      </ProfilePageLayout>
      <ProfilePageLayout components={'section'} bg={semanticColors.white}>
        <Box sx={{ maxWidth: contentsWidth, margin: 'auto' }}>
          <Text type={TEXT_TYPE.SUB_HEADLINE}>フィソロフィー</Text>
          <Title size={HEADINGS.H1} order={1}>
            私がデザインエンジニアとして大切にするのは、
            <br />
            コラボレーションによる事業の推進です。
          </Title>
          <Flex gap={spacing[5]}>
            <TextCard>徹底した顧客理解</TextCard>
            <TextCard>正しい人を巻き込む</TextCard>
            <Stack spacing={spacing[2]}>
              <TextCard small>橋渡しになる</TextCard>
              <TextCard small>一緒に進める</TextCard>
            </Stack>
            <TextCard>複数の視点で作る</TextCard>
          </Flex>
          <Text mb={spacing[4]}>
            私は事業作りを軸とした広義なデザインを意識しており、「世の中に品質の高い価値をいち早く届ける」ことが事業推進にインパクトのあることだと考えています。
          </Text>
          <Text>
            その上で、直近では開発に領域を広げてデザインと開発をシームレスに繋げる存在になりたいと思っています。
            <br />
            本質的な価値を創出するには必要な人たちを正しく巻き込み・コラボレーションすることが必要不可欠なのに対し、現状は業務として地続きなのに両方を高い次元で業務できる人が世の中にまだ少ないからです。
            <br />
            だからこそ、複数の領域を横断し、他職種とのコラボレーションを通じて事業を推進していくことが私が果たすべき仕事だと考えています。
          </Text>
        </Box>
      </ProfilePageLayout>
    </>
  )
})

export default ProfilePage
