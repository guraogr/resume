import { Box } from '@mantine/core'
import type { PropsWithChildren } from 'react'

import { spacing } from '@/constans'
import { useScreen } from '@/hooks/useScreen'
import { semanticColors } from '@/styles/colors'

interface Props {
  bg?: string
}

export const DefaultLayout: React.FC<PropsWithChildren<Props>> = ({
  bg = semanticColors.bg,
  children,
}) => {
  const { styles } = useScreen()
  return (
    <Box bg={bg} py={spacing[8]}>
      <Box w={styles.contentsWidth} maw={styles.contentsMaxWidth} m={'auto'}>
        {children}
      </Box>
    </Box>
  )
}
