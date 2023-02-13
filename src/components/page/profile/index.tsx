import { memo } from 'react'

import HistorySection from './components/HistorySection'
import PhilosophySection from './components/PhilosophySection'
import ProfileSection from './components/ProfileSection'

import { Footer } from '@/components/ui/Footer'
import { grobalNavigationLinks } from '@/constans'

const ProfilePage = memo(function ProfilePage() {
  return (
    <>
      <ProfileSection />
      <PhilosophySection />
      <HistorySection />
      <Footer links={grobalNavigationLinks} />
    </>
  )
})

export default ProfilePage
