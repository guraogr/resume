import { Box, Title, Flex, Stack, List, Space } from '@mantine/core'
import { memo } from 'react'

import { Heading } from './ui/Heading'
import { ListItem } from './ui/ListItem'

import Text from '@/components/ui/Text'
import { TextCard } from '@/components/ui/TextCard'
import { contentsWidth, spacing } from '@/constans'
import { ProfilePageLayout } from '@/layouts/ProfilePageLayout'
import { semanticColors } from '@/styles/colors'
import { HEADINGS } from '@/styles/typography'

const PhilosophySection: React.FC = memo(function PhilosophySection() {
  return (
    <ProfilePageLayout components={'section'} bg={semanticColors.white}>
      <Box sx={{ maxWidth: contentsWidth, margin: 'auto' }}>
        <Heading subTitle="フィロソフィー" mb={spacing[10]}>
          私がデザインエンジニアとして大切にするのは、
          <br />
          コラボレーションによる事業の推進です
        </Heading>
        <Flex gap={spacing[5]} mb={spacing[9]}>
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
        <Space h={spacing[16]} />
        <Box component="section">
          <Title size={HEADINGS.H2} order={2} mb={spacing[8]}>
            人材特徴：自身を構成する要素
          </Title>
          <List display={'flex'}>
            <ListItem title="本質的課題解決" mr={spacing[8]}>
              問題を解決するのが好きで、妥協せず課題の本質に向き合い続ける力があります。
            </ListItem>
            <ListItem title="本質的課題解決" mr={spacing[8]}>
              問題を解決するのが好きで、妥協せず課題の本質に向き合い続ける力があります。
            </ListItem>
            <ListItem title="本質的課題解決">
              問題を解決するのが好きで、妥協せず課題の本質に向き合い続ける力があります。
            </ListItem>
          </List>
        </Box>
        <Space h={spacing[16]} />
        <Box component="section">
          <Title size={HEADINGS.H2} order={2} mb={spacing[8]}>
            人材特徴：スキルセット
          </Title>
          <List display={'flex'}>
            <ListItem
              title="UIデザイン"
              label="2年の経験"
              textBox="UI、情報設計、デザインシステム、スタイルガイド、0→1、MVP"
              mr={spacing[8]}
            >
              複雑な欲求をヒアリングしてUIに落とし込む経験が豊富で、最もバリューが出せる領域です。対応してきた業界はHR
              Tech, GovTech, EdTech, ConTechなどがあります。
            </ListItem>
            <ListItem
              title="UIデザイン"
              label="2年の経験"
              textBox="UI、情報設計、デザインシステム、スタイルガイド、0→1、MVP"
              mr={spacing[8]}
            >
              複雑な欲求をヒアリングしてUIに落とし込む経験が豊富で、最もバリューが出せる領域です。対応してきた業界はHR
              Tech, GovTech, EdTech, ConTechなどがあります。
            </ListItem>
            <ListItem
              title="UIデザイン"
              label="2年の経験"
              textBox="UI、情報設計、デザインシステム、スタイルガイド、0→1、MVP"
            >
              複雑な欲求をヒアリングしてUIに落とし込む経験が豊富で、最もバリューが出せる領域です。対応してきた業界はHR
              Tech, GovTech, EdTech, ConTechなどがあります。
            </ListItem>
          </List>
        </Box>
      </Box>
    </ProfilePageLayout>
  )
})

export default PhilosophySection
