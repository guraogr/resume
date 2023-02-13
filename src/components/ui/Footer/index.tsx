import { List, Divider, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import { memo } from 'react'

import { type Links } from '../Header'

import { contentsWidth, spacing } from '@/constans'
import { semanticColors } from '@/styles/colors'

interface Props {
  links: Links[]
}

export const Footer: React.FC<Props> = memo(function Footer({
  links,
  ...args
}) {
  const thme = useMantineTheme()
  const items = links.map((link) => (
    <List.Item key={link.label} sx={{ listStyle: 'none' }}>
      <Link
        href={link.link}
        style={{
          padding: spacing[0],
          display: 'flex',
          fontWeight: 'normal',
          alignItems: 'center',
          height: '100%',
          textDecoration: 'none',
          color: semanticColors.base_primary,
          marginRight: spacing[8],
        }}
      >
        {link.label}
      </Link>
    </List.Item>
  ))
  return (
    <footer
      style={{
        maxWidth: contentsWidth,
        margin: 'auto',
        padding: `${spacing[8]}px ${spacing[0]}px`,
        backgroundColor: semanticColors.white,
      }}
      {...args}
    >
      <List display={'flex'} mb={spacing[6]}>
        {items}
      </List>
      <List mb={spacing[6]}>
        <Link
          href={'https://github.com/guraogr'}
          as={'a'}
          style={{
            color: semanticColors.base_primary,
            textDecoration: 'none',
          }}
        >
          Github
        </Link>
      </List>
      <Divider my="sm" color={semanticColors.border} />
      <small
        style={{
          fontSize: thme.fontSizes.xs,
          color: semanticColors.base_tirtiary,
        }}
      >
        ©️copyright 2023 Hiroki Ogura
      </small>
    </footer>
  )
})
