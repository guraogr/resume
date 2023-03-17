import { Box, Container, Space, Title } from '@mantine/core'
import { memo } from 'react'

import { Heading } from './ui/Heading'

import CustomText from '@/components/ui/Text'
import { spacing } from '@/constans'
import { ProfilePageLayout } from '@/layouts/ProfilePageLayout'
import { semanticColors } from '@/styles/colors'
import { HEADINGS } from '@/styles/typography'

const PhilosophySection: React.FC = memo(function PhilosophySection() {
  return (
    <ProfilePageLayout bg={semanticColors.white} pt={spacing[6]}>
      <Container size={'lg'} m={'auto'}>
        {/*
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
        <Heading subTitle="価値観" mb={spacing[10]}>
          何を・誰と・どんな風にやりたいか
          {/* {!isTabletScreen && <br />}
          それが私の働く目的です */}
        </Heading>
        {/* <Grid mb={spacing[9]} columns={isTabletScreen ? 1 : 5}>
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
        </Grid> */}
        <Box>
          <Title size={HEADINGS.H3} order={3} mb={spacing[2]}>
            1. What(何をしたいか)
          </Title>
          <CustomText mb={spacing[4]} sx={{ lineHeight: 2 }}>
            自分にとって仕事は「人生を面白くしてくれるもの」であり、自分にとって幸福は「目の前のことに夢中になって楽しめる」ことです。
            <br />
            {/* 子供の頃から活き活きと働いている大人を見たことがなく、社会人になってから毎日が楽しいと思えなくなっている人たちを見てきて、それが当たり前とされる社会がに対して違和感を感じていました。
            <br /> */}
            仕事と人を上手く調和させることで人の幸せに貢献していきたいという根源的な欲求があります。
          </CustomText>
          <Space h={spacing[4]} />
          <Title size={HEADINGS.H3} order={3} mb={spacing[2]}>
            2. Who(誰としたいか)
          </Title>
          <CustomText mb={spacing[4]} sx={{ lineHeight: 2 }}>
            自分と同じ熱い気持ちを持ち、愛情を持って一人一人に向き合うことができる人たちと過程を楽しむ
          </CustomText>
          <Space h={spacing[4]} />
          <Title size={HEADINGS.H3} order={3} mb={spacing[2]}>
            3. How(どういう風にしたいか)
          </Title>
          <CustomText mb={spacing[4]} sx={{ lineHeight: 2 }}>
            信頼できる仲間と部活動のように熱中して働く
            {/* 今までは、良いキャリアを積みたい、賞を取りたい、年収を上げたいなど自分自身のこうなりたいという結果に囚われ、本当に欲しかったものに対して盲目になっていました。 */}
            <br />
          </CustomText>
        </Box>
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
