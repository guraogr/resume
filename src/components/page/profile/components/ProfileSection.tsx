import { Flex, Avatar, Box, Title, useMantineTheme, Image } from '@mantine/core'
import { memo } from 'react'

import Text from '@/components/ui/Text'
import { spacing, path } from '@/constans'
import { useScreen } from '@/hooks/useScreen'
import { ProfilePageLayout } from '@/layouts/ProfilePageLayout'
import { semanticColors } from '@/styles/colors'
import { HEADINGS } from '@/styles/typography'

const ProfileSection: React.FC = memo(function ProfileSection() {
  const { isTabletScreen, styles } = useScreen()
  const theme = useMantineTheme()
  return (
    <ProfilePageLayout components={'section'} bg={semanticColors.bg}>
      <Flex
        direction={styles.direction}
        align={styles.align}
        w={styles.contentsWidth}
        sx={{
          margin: 'auto',
          maxWidth: styles.contentsMaxWidth,
        }}
      >
        <Avatar
          src={`${path.images}/Avatar.png`}
          alt="おぐらひろきの自画像イラスト"
          size={170}
          mr={isTabletScreen ? spacing[0] : spacing[14]}
          mb={isTabletScreen ? spacing[4] : spacing[0]}
          sx={{
            borderRadius: '1000px',
            border: `8px solid ${theme.white}`,
            filter: 'drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.06))',
          }}
        ></Avatar>
        <Box ta={isTabletScreen ? 'center' : 'left'}>
          <Text mb={spacing[1]}>デザインエンジニア</Text>
          <Title mb={spacing[3]} size={HEADINGS.H1} order={1}>
            おぐら ひろき
          </Title>
          <Text mb={spacing[6]} ta={'left'}>
            ECCコンピュータ専門学校卒業後、BizReach、YumemiなどのIT企業でデザイナーとしてサービス開発に携わりつつ、個人で数社のスタートアップの事業改善・デザイン・開発など幅広く携わる。
          </Text>
          <Box
            component="a"
            display={'flex'}
            sx={{ justifyContent: styles.justify }}
            href={`https://github.com/guraogr`}
            mb={12}
          >
            <Image src={'/images/github.svg'} width={24} alt="github" />
          </Box>
        </Box>
      </Flex>
    </ProfilePageLayout>
  )
})

export default ProfileSection
