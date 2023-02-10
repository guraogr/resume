import { Box } from '@mantine/core'
import type { PropsWithChildren } from 'react'

import { contentsWidth } from '@/constans'

export const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Box sx={{ maxWidth: contentsWidth, margin: 'auto' }}>{children}</Box>
}
