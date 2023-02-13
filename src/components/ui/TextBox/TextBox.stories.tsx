import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { TextBox as SimpleTextBox } from '.'

const TextBox: ComponentMeta<typeof SimpleTextBox> = {
  title: 'Components/TextBox',
  component: SimpleTextBox,
}
export default TextBox

const Template: ComponentStory<typeof SimpleTextBox> = (args) => (
  <SimpleTextBox {...args}>ラベル</SimpleTextBox>
)

export const Default = Template.bind({})
Default.args = {}
