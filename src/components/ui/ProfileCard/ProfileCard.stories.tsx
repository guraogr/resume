import { Container } from '@mantine/core'
import type { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { ProfileCard as MyProfileCard } from '.'

const ProfileCard: ComponentMeta<typeof MyProfileCard> = {
  title: 'Features/ProfileCard',
  component: MyProfileCard,
}
export default ProfileCard

const Template: ComponentStory<typeof MyProfileCard> = (args) => (
  <Container sx={{ maxWidth: 292 }}>
    <MyProfileCard {...args} />
  </Container>
)

export const Default = Template.bind({})
Default.args = {
  bg: '/images/profile_bg.png',
  thumbnail: '/images/avatar.png',
  thumbnailAlt: 'おぐらひろきの自画像',
  name: 'おぐら ひろき',
  job: 'デザインエンジニア',
  githubId: 'guraogr',
  description:
    '1999年京都府生まれ。デザインエンジニア。ECCコンピュータ専門学校卒業後、BizReach、YumemiなどのIT企業でデザイナーとしてサービス開発に携わりつつ、個人で数社のスタートアップの事業改善・デザイン・開発など幅広く携わる。',
  hashtag: '#BtoB #SaaS #DX #Front-end #PdM #組織 #キャリア',
}
