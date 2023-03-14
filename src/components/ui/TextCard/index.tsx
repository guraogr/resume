import { type TextProps, useMantineTheme } from '@mantine/core'
import { memo, type PropsWithChildren } from 'react'

import CustomText from '@/components/ui/Text'
import { spacing } from '@/constans'
import { useScreen } from '@/hooks/useScreen'
import { semanticColors } from '@/styles/colors'

interface Props extends TextProps {
  width?: number | string
}

export const TextCard: React.FC<PropsWithChildren<Props>> = memo(
  function TextCard({ width, children, ...args }) {
    const theme = useMantineTheme()
    const { isTabletScreen } = useScreen()
    return (
      <CustomText
        bg={semanticColors.bg}
        py={spacing[4]}
        px={isTabletScreen ? spacing[4] : spacing[16]}
        size={theme.fontSizes.lg}
        fw={'bold'}
        display={'flex'}
        w={width}
        sx={{
          borderRadius: theme.radius.sm,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        {...args}
      >
        {children}
      </CustomText>
    )
  }
)
