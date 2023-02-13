import { Box, type BoxProps, Title } from '@mantine/core'
import { memo, type PropsWithChildren } from 'react'

import Text from '@/components/ui/Text'
import { spacing } from '@/constans'
import { semanticColors } from '@/styles/colors'
import { TEXT_TYPE, HEADINGS } from '@/styles/typography'

interface Props extends BoxProps {
  subTitle: string
}

export const Heading: React.FC<PropsWithChildren<Props>> = memo(
  function Heading({ subTitle, children, ...args }) {
    return (
      <Box {...args}>
        <Text
          c={semanticColors.base_tirtiary}
          type={TEXT_TYPE.SUB_HEADLINE}
          mb={spacing[8]}
        >
          {subTitle}
        </Text>
        <Title size={HEADINGS.H1} order={1}>
          {children}
        </Title>
      </Box>
    )
  }
)
