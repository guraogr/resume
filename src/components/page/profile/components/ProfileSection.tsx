import { Flex, Avatar, Box, Title, useMantineTheme, Image } from '@mantine/core'
import { memo } from 'react'

import Text from '@/components/ui/Text'
import { contentsWidth, spacing, path } from '@/constans'
import { ProfilePageLayout } from '@/layouts/ProfilePageLayout'
import { semanticColors } from '@/styles/colors'
import { HEADINGS } from '@/styles/typography'

const ProfileSection: React.FC = memo(function ProfileSection() {
  const theme = useMantineTheme()
  return (
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
  )
})

export default ProfileSection
