import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Tag as SimpleTag } from '.'

const Tag: ComponentMeta<typeof SimpleTag> = {
  title: 'Components/Tag',
  component: SimpleTag,
}
export default Tag

const Template: ComponentStory<typeof SimpleTag> = (args) => (
  <SimpleTag {...args} />
)

export const Default = Template.bind({})
Default.args = {
  label: 'ラベル',
}
