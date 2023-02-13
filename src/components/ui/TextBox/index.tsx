import { type TextProps } from '@mantine/core'
import { memo, type PropsWithChildren } from 'react'

import Text from '@/components/ui/Text'
import { spacing } from '@/constans'
import { semanticColors } from '@/styles/colors'
import { TEXT_TYPE } from '@/styles/typography'

export const TextBox: React.FC<PropsWithChildren<TextProps>> = memo(
  function TextBox({ children, ...args }) {
    return (
      <Text
        p={spacing[3]}
        bg={semanticColors.bg}
        type={TEXT_TYPE.CAPTION1}
        {...args}
      >
        {children}
      </Text>
    )
  }
)
