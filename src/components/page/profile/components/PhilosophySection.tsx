import { Box, Container } from '@mantine/core'
import { memo } from 'react'

import { Heading } from './ui/Heading'

import CustomText from '@/components/ui/Text'
import { spacing } from '@/constans'
import { ProfilePageLayout } from '@/layouts/ProfilePageLayout'
import { semanticColors } from '@/styles/colors'

const PhilosophySection: React.FC = memo(function PhilosophySection() {
  return (
    <ProfilePageLayout bg={semanticColors.bg}>
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
        <Heading subTitle="仕事に対する信条" mb={spacing[10]} ta={'center'}>
          プロフェッショナリズム
        </Heading>

        <Box>
          {/* <Title size={HEADINGS.H3} order={3} mb={spacing[2]}></Title> */}
          <CustomText
            mb={spacing[4]}
            sx={{ lineHeight: 2 }}
            maw={620}
            ta={'center'}
            mx={'auto'}
          >
            理想の体験をプロダクトに落とし込む専門家としての責任を重んじています。
            <br />
            良いプロダクトを作るためには徹底的な顧客理解、本質的な課題の特定と解決策の模索が必要不可欠であり、これらを深く追求し続けることを大切にしています。
            <br />
            <br />
            ご興味を持っていただけましたらぜひ一度お話しできればと思います。
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
