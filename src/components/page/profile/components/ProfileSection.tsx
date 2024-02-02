import { Avatar, Box, Title, Container } from '@mantine/core'
import { memo } from 'react'

import CustomText from '@/components/ui/Text'
import { spacing, path } from '@/constans'
import { useScreen } from '@/hooks/useScreen'
import { ProfilePageLayout } from '@/layouts/ProfilePageLayout'
import { semanticColors } from '@/styles/colors'

const ProfileSection: React.FC = memo(function ProfileSection() {
  const { isTabletScreen, styles } = useScreen()
  return (
    <ProfilePageLayout
      bg={semanticColors.white}
      py={spacing[0]}
      mb={spacing[10]}
    >
      {/* <Box
        h={180}
        sx={{
          backgroundImage: `url(${path.images}/background_sky.png)`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      ></Box> */}
      <Container size={'lg'}>
        <Box
          display={'flex'}
          mx={'auto'}
          sx={{
            flexDirection: styles.direction,
            alignItems: styles.align,
            position: 'relative',
            margin: '64px 0 ',
            // boxShadow: shadow.normal,
            borderRadius: 8,
          }}
          p={spacing[8]}
          bg={semanticColors.white}
        >
          <Avatar
            src={`${path.images}/Avatar.png`}
            alt="おぐらひろきの自画像イラスト"
            size={240}
            mr={isTabletScreen ? spacing[0] : spacing[14]}
            mb={isTabletScreen ? spacing[4] : spacing[0]}
            sx={{
              filter: 'drop-shadow(0px 4px 24px rgba(0, 0, 0, 0.06))',
              height: 350,
            }}
          ></Avatar>

          <Box ta={isTabletScreen ? 'center' : 'left'}>
            <Title mb={spacing[5]} size={38} order={1}>
              Hiroki Ogura
            </Title>
            <CustomText mb={spacing[3]} ta={'left'} sx={{ lineHeight: 2 }}>
              1999年3月25日、京都府京丹後市出身。
              <br />
              ビズリーチ/ゆめみ社での経験に加え、複数のスタートアップでプロダクトデザインに携わってきました。
              <br />
              <br />
              2021年4月より新卒でHR×SaaS事業を展開する株式会社ビズリーチに入社後、BtoBアプリケーションのUI・UXデザインやデザインシステム構築、フロントエンド開発等に従事。2022年9月よりクライアントの内製化支援を行う株式会社ゆめみに転職し、企業のプロダクトデザインにおける課題解決やUI・UXデザイン業務に従事。
              <br />
              <br />
              その後、2年ほど業務委託として関わっていた株式会社ノックラーンへ入社。
              <br />
              デザイナー兼新規事業担当者として、相続領域・HR領域にて新規事業の立ち上げを担当しながら、既存事業の事業開発やWEBデザイン,
              広告制作などのコミュニケーションデザインを担当。
              <br />
              2024年12月よりフリーランスデザイナーとして、前職を含めた複数企業でデザイン支援を行なっている。
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
