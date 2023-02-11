import { useMantineTheme } from '@mantine/core'
import { memo, type PropsWithChildren } from 'react'

import Text from '@/components/ui/Text'
import { spacing } from '@/constans'
import { semanticColors } from '@/styles/colors'

interface Props {
  small?: boolean
}

export const TextCard: React.FC<PropsWithChildren<Props>> = memo(
  function TextCard({ small, children }) {
    const theme = useMantineTheme()
    return (
      <Text
        bg={semanticColors.bg}
        py={small !== null ? spacing[2] : spacing[8]}
        px={spacing[16]}
        size={theme.fontSizes.lg}
        fw={'bold'}
        display={'flex'}
        sx={{ borderRadius: theme.radius.sm, alignItems: 'center' }}
      >
        {children}
      </Text>
    )
  }
)
