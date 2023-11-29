import { memo } from 'react'

import HistorySection from './components/HistorySection'
import PhilosophySection from './components/PhilosophySection'
import ProductSection from './components/ProductSection'
import ProfileSection from './components/ProfileSection'

import { Breadcrumbs } from '@/components/ui/Breadcrumbs'

const ProfilePage = memo(function ProfilePage() {
  const breadcrumbsItems = [
    {
      label: 'プロフィール',
    },
  ]
  return (
    <>
      <Breadcrumbs items={breadcrumbsItems} />
      <ProfileSection />
      <HistorySection />
      <ProductSection />
      <PhilosophySection />
    </>
  )
})

export default ProfilePage
