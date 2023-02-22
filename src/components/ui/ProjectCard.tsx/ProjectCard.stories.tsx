import { Container } from '@mantine/core'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { ProjectCard as SimpleProjectCard } from '.'

import { spacing } from '@/constans'
import { semanticColors } from '@/styles/colors'

const ProjectCard: ComponentMeta<typeof SimpleProjectCard> = {
  title: 'Components/ProjectCard',
  component: SimpleProjectCard,
}
export default ProjectCard

const Template: ComponentStory<typeof SimpleProjectCard> = (args) => {
  return (
    <Container bg={semanticColors.bg} sx={{ padding: spacing[8] }}>
      <SimpleProjectCard m={'auto'} maw={358} {...args}></SimpleProjectCard>
    </Container>
  )
}

export const Default = Template.bind({})
Default.args = {
  thumb: 'campus.png',
  thumbAlt: 'BizreachCampusのロゴ',
  productName: 'BizReach Campus',
  taskType: 'UI改善',
  title:
    'デザイン負債を抱えた製品のUI再設計を担当。デザイナー・フロントエンドの橋渡しとなりプロジェクトを推進。',
  desc: '既存のUIを見直し、一からスタイルガイド・コンポーネントを作成。既存仕様との整合性担保を...',
  role: 'プロジェクト推進, UI再設計, 情報設計',
  projectTime: '2021年夏',
}
