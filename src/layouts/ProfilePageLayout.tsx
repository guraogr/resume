import { Box, type BoxProps } from '@mantine/core'
import { memo, type PropsWithChildren } from 'react'

import { spacing } from '@/constans'

interface Props extends BoxProps {
  bg: string
  components: any
}

export const ProfilePageLayout: React.FC<PropsWithChildren<Props>> = memo(
  function ProfilePageLayout({ bg, components, children }) {
    return (
      <Box component={components} bg={bg} py={spacing[14]}>
        {children}
      </Box>
    )
  }
)
