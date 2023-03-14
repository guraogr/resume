import { Box, Image, Title, useMantineTheme } from '@mantine/core'
import parse, {
  type HTMLReactParserOptions,
  Element,
  domToReact,
  attributesToProps,
} from 'html-react-parser'
import { memo } from 'react'

import { spacing } from '@/constans'
import { HEADINGS } from '@/styles/typography'

interface Props {
  source: string
}

export const Markdown: React.FC<Props> = memo(function Markdown({ source }) {
  const theme = useMantineTheme()
  const options: HTMLReactParserOptions = {
    replace: (domNode) => {
      if (domNode instanceof Element && domNode.type === 'tag') {
        const props = attributesToProps(domNode.attribs)
        if (domNode.name === 'h2') {
          return (
            <Title
              {...props}
              order={2}
              size={HEADINGS.H3}
              mb={spacing[4]}
              mt={spacing[10]}
              py={spacing[1]}
              px={spacing[2]}
              bg={theme.colors.primary[0]}
              sx={{ boxDecorationBreak: 'clone' }}
            >
              {domToReact(domNode.children)}
            </Title>
          )
        }
        if (domNode.name === 'img') {
          return (
            <Image
              mt={spacing[4]}
              alt={domNode.attribs.alt}
              src={domNode.attribs.src}
            />
          )
        }
      }
    },
  }
  return <Box>{parse(source, options)}</Box>
})
