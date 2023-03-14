import { Box } from '@mantine/core'
import type { PropsWithChildren } from 'react'

import { spacing } from '@/constans'
import { semanticColors } from '@/styles/colors'

interface Props {
  bg?: string
  px?: number
  pt?: number
}

export const DefaultLayout: React.FC<PropsWithChildren<Props>> = ({
  bg = semanticColors.white,
  px = spacing[0],
  pt = spacing[0],
  children,
}) => {
  return (
    <Box bg={bg} pb={spacing[8]}>
      <Box px={px} pt={pt}>
        {children}
      </Box>
    </Box>
  )
}
