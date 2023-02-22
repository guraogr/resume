import { Box, Container } from '@mantine/core'
import type { PropsWithChildren } from 'react'

import { spacing } from '@/constans'
import { semanticColors } from '@/styles/colors'

interface Props {
  bg?: string
}

export const DefaultLayout: React.FC<PropsWithChildren<Props>> = ({
  bg = semanticColors.bg,
  children,
}) => {
  return (
    <Box bg={bg} py={spacing[8]}>
      <Container size={'lg'}>{children}</Container>
    </Box>
  )
}
