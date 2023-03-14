import {
  useMantineTheme,
  Text as MantineText,
  type TextProps,
} from '@mantine/core'
import { memo, type PropsWithChildren } from 'react'

import { TEXT_TYPE } from '@/styles/typography'

type TextType = 'subheadline' | 'body' | 'caption1' | 'caption2'

interface Props extends TextProps {
  type?: TextType
}

const CustomText: React.FC<PropsWithChildren<Props>> = memo(function Text({
  type = 'body',
  children,
  ...args
}) {
  const theme = useMantineTheme()
  let textStyle

  switch (type) {
    case TEXT_TYPE.SUB_HEADLINE:
      textStyle = { size: theme.fontSizes.md, fw: 'bold' }
      break
    case TEXT_TYPE.CAPTION1:
      textStyle = { size: theme.fontSizes.xs, fw: 'normal' }
      break
    case TEXT_TYPE.CAPTION2:
      textStyle = { size: theme.fontSizes.xs, fw: 'bold' }
      break
    default: // body
      textStyle = { size: theme.fontSizes.md, fw: 'normal' }
      break
  }
  return (
    <>
      <MantineText size={textStyle.size} fw={textStyle.fw} {...args}>
        {children}
      </MantineText>
    </>
  )
})

export default CustomText
