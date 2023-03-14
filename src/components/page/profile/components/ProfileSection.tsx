import { Avatar, Box, Title, Container, Image } from '@mantine/core'
import { memo } from 'react'

import CustomText from '@/components/ui/Text'
import { spacing, path } from '@/constans'
import { useScreen } from '@/hooks/useScreen'
import { ProfilePageLayout } from '@/layouts/ProfilePageLayout'
import { semanticColors } from '@/styles/colors'
import { shadow } from '@/styles/shadow'
import { HEADINGS } from '@/styles/typography'

const ProfileSection: React.FC = memo(function ProfileSection() {
  const { isTabletScreen, styles } = useScreen()
  return (
    <ProfilePageLayout bg={semanticColors.white} py={spacing[0]}>
      <Box
        h={180}
        sx={{
          backgroundImage: `url(${path.images}/background_sky.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></Box>
      <Container size={'lg'}>
        <Box
          display={'flex'}
          mx={'auto'}
          sx={{
            flexDirection: styles.direction,
            alignItems: styles.align,
            position: 'relative',
            marginTop: '-80px',
            boxShadow: shadow.normal,
            borderRadius: 8,
          }}
          p={spacing[8]}
          bg={semanticColors.white}
        >
          <Avatar
            src={`${path.images}/Avatar.png`}
            alt="おぐらひろきの自画像イラスト"
            size={130}
            mr={isTabletScreen ? spacing[0] : spacing[14]}
            mb={isTabletScreen ? spacing[4] : spacing[0]}
            sx={{
              filter: 'drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.06))',
            }}
          ></Avatar>
          <Box ta={isTabletScreen ? 'center' : 'left'}>
            {/* <CustomText mb={spacing[1]}>デザインエンジニア</CustomText> */}
            <Title mb={spacing[3]} size={HEADINGS.H3} order={1}>
              初めまして、おぐらひろきです
            </Title>
            <CustomText mb={spacing[3]} ta={'left'}>
              1999年京都府生まれ、ECCコンピュータ専門学校出身。
              <br />
              BizReach、YumemiなどのIT企業でデザイナーとしてサービス開発に携わりつつ、個人で数社のスタートアップのデザイン・開発などに幅広く携わって参りました。
            </CustomText>
            <Box
              component="a"
              display={'flex'}
              sx={{ justifyContent: styles.justify }}
              href={`https://github.com/guraogr`}
              mb={12}
            >
              <Image src={'/images/github.svg'} width={24} alt="github" />
            </Box>
            {/* <Accordion defaultValue="customization">
              <Accordion.Item value="customization" w={'auto'}>
                <Accordion.Control>受賞歴</Accordion.Control>
                <Accordion.Panel>
                  <CustomText>
                    Designship Challenge 最優秀賞、ReDesigner賞
                  </CustomText>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion> */}
          </Box>
        </Box>
      </Container>
    </ProfilePageLayout>
  )
})

export default ProfileSection
