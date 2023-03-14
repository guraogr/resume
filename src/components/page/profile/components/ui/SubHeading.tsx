import { Box, type BoxProps, Title } from '@mantine/core'
import { memo, type PropsWithChildren } from 'react'

import CustomText from '@/components/ui/Text'
import { spacing } from '@/constans'
import { TEXT_TYPE, HEADINGS } from '@/styles/typography'

interface Props extends BoxProps {
  desc: string
}

export const SubHeading: React.FC<PropsWithChildren<Props>> = memo(
  function SubHeading({ desc, children, ...args }) {
    return (
      <Box {...args}>
        <Title size={HEADINGS.H2} order={2} mb={spacing[3]}>
          {children}
        </Title>
        <CustomText type={TEXT_TYPE.BODY}>{desc}</CustomText>
      </Box>
    )
  }
)
