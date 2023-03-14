import { Box, type BoxProps } from '@mantine/core'
import { memo, type PropsWithChildren } from 'react'

import { spacing } from '@/constans'

interface Props extends BoxProps {
  bg?: string
}

export const ProfilePageLayout: React.FC<PropsWithChildren<Props>> = memo(
  function ProfilePageLayout({ bg, children, ...props }) {
    return (
      <Box component={'section'} bg={bg} py={spacing[24]} {...props}>
        {children}
      </Box>
    )
  }
)
