import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { Footer as SimpleFooter } from '.'

import { grobalNavigationLinks } from '@/constans'

const Footer: ComponentMeta<typeof SimpleFooter> = {
  title: 'Components/Footer',
  component: SimpleFooter,
}
export default Footer

const Template: ComponentStory<typeof SimpleFooter> = (args) => {
  return <SimpleFooter {...args} />
}

export const Default = Template.bind({})
Default.args = {
  links: grobalNavigationLinks,
}
