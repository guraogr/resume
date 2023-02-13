import { Container } from '@mantine/core'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { TextCard as SimpleTextCard } from '.'

const TextCard: ComponentMeta<typeof SimpleTextCard> = {
  title: 'Features/TextCard',
  component: SimpleTextCard,
}
export default TextCard

const Template: ComponentStory<typeof SimpleTextCard> = (args) => (
  <Container>
    <SimpleTextCard m={'auto'} {...args}>
      テキスト
    </SimpleTextCard>
  </Container>
)

export const Default = Template.bind({})
Default.args = {
  width: 300,
}
export const Small = Template.bind({})
Small.args = {
  width: 300,
  m: 'auto',
}
