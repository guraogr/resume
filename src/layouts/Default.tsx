import { Box } from '@mantine/core'
import type { PropsWithChildren } from 'react'

export const DefaultLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return <Box>{children}</Box>
}
