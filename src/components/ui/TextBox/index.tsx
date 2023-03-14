import { type TextProps } from '@mantine/core'
import { memo, type PropsWithChildren } from 'react'

import CustomText from '@/components/ui/Text'
import { spacing } from '@/constans'
import { semanticColors } from '@/styles/colors'
import { TEXT_TYPE } from '@/styles/typography'

export const TextBox: React.FC<PropsWithChildren<TextProps>> = memo(
  function TextBox({ children, ...args }) {
    return (
      <CustomText
        p={spacing[3]}
        bg={semanticColors.bg}
        type={TEXT_TYPE.CAPTION1}
        {...args}
      >
        {children}
      </CustomText>
    )
  }
)
