import { useMediaQuery } from '@mantine/hooks'

import { BREAKPOINT_MAP } from '@/constans'

type UseScreen = () => {
  isSmartPhoneScreen: boolean
  isTabletScreen: boolean
}

export const useScreen: UseScreen = () => {
  const isSmartPhoneScreen = useMediaQuery(
    `(max-width: ${BREAKPOINT_MAP.sm}px)`
  )
  const isTabletScreen = useMediaQuery(`(max-width: ${BREAKPOINT_MAP.md}px)`)
  return {
    isSmartPhoneScreen,
    isTabletScreen,
  }
}
