import { memo } from 'react'

import HistorySection from './components/HistorySection'
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
      {/* <PhilosophySection /> */}
      <HistorySection />
    </>
  )
})

export default ProfilePage
