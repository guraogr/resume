import { Box, Title, Flex, List, Space, Text } from '@mantine/core'
import { memo } from 'react'

import { Heading } from './ui/Heading'
import { ListItem } from './ui/ListItem'

import { TextCard } from '@/components/ui/TextCard'
import { spacing } from '@/constans'
import { myFeatures, mySkills } from '@/constans/profile'
import { useScreen } from '@/hooks/useScreen'
import { ProfilePageLayout } from '@/layouts/ProfilePageLayout'
import { semanticColors } from '@/styles/colors'
import { HEADINGS } from '@/styles/typography'

const PhilosophySection: React.FC = memo(function PhilosophySection() {
  const { styles, isTabletScreen } = useScreen()
  return (
    <ProfilePageLayout components={'section'} bg={semanticColors.white}>
      <Box
        w={styles.contentsWidth}
        sx={{ maxWidth: styles.contentsMaxWidth, margin: 'auto' }}
      >
        <Heading subTitle="フィロソフィー" mb={spacing[10]}>
          私がデザインエンジニアとして大切にするのは、
          {!isTabletScreen && <br />}
          コラボレーションによる事業の推進です
        </Heading>
        <Flex gap={spacing[3]} mb={spacing[9]} direction={styles.direction}>
          <TextCard>徹底した顧客理解</TextCard>
          <TextCard>正しい人を巻き込む</TextCard>
          <TextCard>橋渡しになる</TextCard>
          <TextCard>一緒に進める</TextCard>
        </Flex>
        <Text component={'p'} mb={spacing[4]}>
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
            マイクレド
          </Title>
          <List display={'flex'} sx={{ flexDirection: styles.direction }}>
            {myFeatures.map((feature, key) => (
              <ListItem
                key={key}
                title={feature.title}
                mr={isTabletScreen ? spacing[0] : spacing[8]}
                mb={isTabletScreen ? spacing[10] : spacing[0]}
              >
                {feature.desc}
              </ListItem>
            ))}
          </List>
        </Box>
        <Space h={spacing[16]} />
        <Box component="section">
          <Title size={HEADINGS.H2} order={2} mb={spacing[8]}>
            スキルセット
          </Title>
          <List display={'flex'} sx={{ flexDirection: styles.direction }}>
            {mySkills.map((skill, key) => (
              <ListItem
                key={key}
                title={skill.title}
                label={skill.label}
                textBox={skill.textBox}
                mr={isTabletScreen ? spacing[0] : spacing[8]}
                mb={isTabletScreen ? spacing[10] : spacing[0]}
              >
                {skill.desc}
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </ProfilePageLayout>
  )
})

export default PhilosophySection
