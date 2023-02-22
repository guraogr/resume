import { memo } from 'react'

import HistorySection from './components/HistorySection'
import PhilosophySection from './components/PhilosophySection'
import ProfileSection from './components/ProfileSection'

const ProfilePage = memo(function ProfilePage() {
  return (
    <>
      <ProfileSection />
      <PhilosophySection />
      <HistorySection />
    </>
  )
})

export default ProfilePage
