import { Avatar, Box, Title, Container } from '@mantine/core'
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
    <ProfilePageLayout
      bg={semanticColors.white}
      py={spacing[0]}
      mb={spacing[20]}
    >
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
            size={170}
            mr={isTabletScreen ? spacing[0] : spacing[14]}
            mb={isTabletScreen ? spacing[4] : spacing[0]}
            sx={{
              filter: 'drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.06))',
              height: 240,
            }}
          ></Avatar>
          <Box ta={isTabletScreen ? 'center' : 'left'}>
            <Title mb={spacing[3]} size={HEADINGS.H3} order={1}>
              Hiroki Ogura ｜自己紹介
            </Title>
            <CustomText mb={spacing[3]} ta={'left'}>
              1999年京都府京丹後市出身。2021年3月ECCコンピュータ専門学校マルチメディア研究学科卒業。
              <br />
              在学中は、2年間デザイナーとして制作会社・事業会社でインターンを経験後、GovTechスタートアップでUIデザイン業務に従事しつつ、個人でチームを結成して複数のプロダクト作りを行う。
              <br />
              <br />
              2021年4月に株式会社ビズリーチに入社。
              <br />
              UI/UXデザイン・クリエイティブ制作業務やフロントエンド開発に従事。
              <br />
              個人でも数社のSaaSスタートアップにてデザイン・開発に幅広く携わる。
              <br />
              <br />
              2022年9月 株式会社ゆめみに転職
              <br />
              2023年8月 創業前から携わっていた株式会社ノックラーンへ正式に参画。
              <br />
              現在は、新規事業の立ち上げに関わる全般の活動に従事。
            </CustomText>
            {/* <Box
              component="a"
              display={'flex'}
              sx={{ justifyContent: styles.justify }}
              href={`https://github.com/guraogr`}
              mb={12}
            >
              <Image src={'/images/github.svg'} width={24} alt="github" />
            </Box> */}
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
