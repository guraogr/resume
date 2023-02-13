import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Header as SimpleHeader } from '.'

import { grobalNavigationLinks } from '@/constans'

const Header: ComponentMeta<typeof SimpleHeader> = {
  title: 'Components/Header',
  component: SimpleHeader,
}
export default Header

const Template: ComponentStory<typeof SimpleHeader> = (args) => (
  <SimpleHeader {...args} />
)

export const Default = Template.bind({})
Default.args = {
  links: grobalNavigationLinks,
}
