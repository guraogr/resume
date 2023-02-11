import {
  useMantineTheme,
  Text as MantineText,
  type TextProps,
} from '@mantine/core'
import { memo, type PropsWithChildren } from 'react'

import { TEXT_TYPE } from '@/constans/typography'

type TextType = 'subheadline' | 'body' | 'caption1' | 'caption2'

interface Props extends TextProps {
  type?: TextType
}

const Text: React.FC<PropsWithChildren<Props>> = memo(function Text({
  type = 'body',
  children,
  ...args
}) {
  const theme = useMantineTheme()

  switch (type) {
    case TEXT_TYPE.SUB_HEADLINE:
      return <MantineText size={theme.fontSizes.md} fw={'bold'}></MantineText>
    case TEXT_TYPE.CAPTION1:
      return <MantineText size={theme.fontSizes.xs} fw={'normal'}></MantineText>
    case TEXT_TYPE.CAPTION2:
      return <MantineText size={theme.fontSizes.xs} fw={'bold'}></MantineText>
  }
  // Default: body
  return (
    <>
      <MantineText size={theme.fontSizes.md} fw={'normal'} {...args}>
        {children}
      </MantineText>
    </>
  )
})

export default Text
