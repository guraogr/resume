import { useMediaQuery } from '@mantine/hooks'

import { BREAKPOINT_MAP } from '@/constans'

interface ResponsiveStyles {
  direction: 'column' | 'row'
  align: 'center' | 'left'
  justify: 'center' | 'left'
}

type UseScreen = () => {
  isSmartPhoneScreen: boolean
  isTabletScreen: boolean
  styles: ResponsiveStyles
}

export const useScreen: UseScreen = () => {
  const isSmartPhoneScreen = useMediaQuery(
    `(max-width: ${BREAKPOINT_MAP.sm}px)`
  )
  const isTabletScreen = useMediaQuery(`(max-width: ${BREAKPOINT_MAP.md}px)`)
  const styles = {
    direction: isTabletScreen ? ('column' as const) : ('row' as const),
    align: isTabletScreen ? ('center' as const) : ('left' as const),
    justify: isTabletScreen ? ('center' as const) : ('left' as const),
  }
  return {
    isSmartPhoneScreen,
    isTabletScreen,
    styles,
  }
}
