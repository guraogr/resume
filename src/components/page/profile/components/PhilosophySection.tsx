import { Container, Grid } from '@mantine/core'
import { memo } from 'react'

import { Heading } from './ui/Heading'

import CustomText from '@/components/ui/Text'
import { TextCard } from '@/components/ui/TextCard'
import { spacing } from '@/constans'
import { useScreen } from '@/hooks/useScreen'
import { ProfilePageLayout } from '@/layouts/ProfilePageLayout'
import { semanticColors } from '@/styles/colors'

const PhilosophySection: React.FC = memo(function PhilosophySection() {
  const { isTabletScreen } = useScreen()
  return (
    <ProfilePageLayout bg={semanticColors.white} pt={spacing[6]}>
      <Container size={'lg'} m={'auto'}>
        {/* <Heading subTitle="仕事の目的" mb={spacing[10]}>
          夢中になって生きる人を増やす
        </Heading>
        <Text>
          わたしの価値は、働く人の日々の負をITの力によって減少させ、やりたいことに対して夢中になれる状態を作っていくことです。
          <br />
          仕事であれ、スポーツであれ、勉学であれ、誰もがやりたいことに夢中になれる。結果を残せる。自信がみなぎる。そして、日々の幸せを自覚する。
          <br />
          その価値を提供するのが私の仕事だと考えています。
        </Text>

        <Space h={spacing[16]} />
        <Box component="section">
          <Heading subTitle="" mb={spacing[10]}>
            価値観
          </Heading>
          <Grid mb={spacing[9]} columns={isTabletScreen ? 1 : 2}>
            {myValues.map((value, key) => (
              <Grid.Col span={1} key={key}>
                <TextCard>{value.title}</TextCard>
              </Grid.Col>
            ))}
          </Grid>
        </Box>
        <Space h={spacing[16]} />
        <Box component="section">
          <Heading subTitle="" mb={spacing[10]}>
            得意なこと
          </Heading>
          <Grid mb={spacing[9]} columns={isTabletScreen ? 1 : 2}>
            {strongPoints.map((stringPoint, key) => (
              <Grid.Col span={1} key={key}>
                <TextCard>{stringPoint.title}</TextCard>
              </Grid.Col>
            ))}
          </Grid>
        </Box>
        <Space h={spacing[16]} /> */}
        {/* <Box component="section">
          <Heading subTitle="" mb={spacing[10]}>
            好きなこと
          </Heading>
          <Grid mb={spacing[9]} columns={isTabletScreen ? 1 : 2}>
            {favorites.map((favorite, key) => (
              <Grid.Col span={1} key={key}>
                <TextCard>{favorite.title}</TextCard>
              </Grid.Col>
            ))}
          </Grid>
        </Box> */}
        <Heading subTitle="フィロソフィー" mb={spacing[10]}>
          目の前のことに夢中になれる人を増やす
          {!isTabletScreen && <br />}
          それが私の働く目的です
        </Heading>
        <Grid mb={spacing[9]} columns={isTabletScreen ? 1 : 5}>
          <Grid.Col span={1}>
            <TextCard>個性</TextCard>
          </Grid.Col>
          <Grid.Col span={1}>
            <TextCard>特別</TextCard>
          </Grid.Col>
          <Grid.Col span={1}>
            <TextCard>夢中</TextCard>
          </Grid.Col>
          <Grid.Col span={1}>
            <TextCard>結果</TextCard>
          </Grid.Col>
          <Grid.Col span={1}>
            <TextCard>自信</TextCard>
          </Grid.Col>
        </Grid>
        <CustomText mb={spacing[4]}>
          私は事業作りを軸とした広義なデザインを意識しており、「世の中に品質の高い価値をいち早く届ける」ことが事業推進にインパクトのあることだと考えています。
        </CustomText>
        <CustomText>
          その上で、直近では開発に領域を広げてデザインと開発をシームレスに繋げる存在になりたいと思っています。
          <br />
          本質的な価値を創出するには必要な人たちを正しく巻き込み・コラボレーションすることが必要不可欠なのに対し、現状は業務として地続きなのに両方を高い次元で業務できる人が世の中にまだ少ないからです。
          <br />
          だからこそ、複数の領域を横断し、他職種とのコラボレーションを通じて事業を推進していくことが私が果たすべき仕事だと考えています。
        </CustomText>
        {/* <Space h={spacing[16]} />
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
        </Box> */}
        {/* <Space h={spacing[16]} />
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
        </Box> */}
      </Container>
    </ProfilePageLayout>
  )
})

export default PhilosophySection
