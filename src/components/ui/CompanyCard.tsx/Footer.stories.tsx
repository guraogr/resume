import { Container } from '@mantine/core'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { CompanyCard as SimpleCompanyCard } from '.'

import { spacing } from '@/constans'
import { semanticColors } from '@/styles/colors'

const CompanyCard: ComponentMeta<typeof SimpleCompanyCard> = {
  title: 'Components/CompanyCard',
  component: SimpleCompanyCard,
}
export default CompanyCard

const Template: ComponentStory<typeof SimpleCompanyCard> = (args) => {
  return (
    <Container bg={semanticColors.bg} sx={{ padding: spacing[8] }}>
      <SimpleCompanyCard {...args}>
        複数のC向けiOS・AndroidアプリのUIデザイン業務を担当。
        大規模プロジェクトにおける管理画面のUIデザイン・フロントエンド開発を一貫して担当、またそれに伴うクライアントとのコミュニケーション。
      </SimpleCompanyCard>
    </Container>
  )
}

export const Default = Template.bind({})
Default.args = {
  logo: 'yumemi.png',
  logoAlt: '株式会社ゆめみのロゴ',
  companyName: '株式会社ゆめみ',
  job: 'デザインエンジニア',
  workedTime: '2021年4月 - 現在 (6ヶ月)',
}
