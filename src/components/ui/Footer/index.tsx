import { List, Divider, useMantineTheme, Container } from '@mantine/core'
import Link from 'next/link'
import { memo } from 'react'

import { type Links } from '../Header'

import { spacing } from '@/constans'
import { useScreen } from '@/hooks/useScreen'
import { semanticColors } from '@/styles/colors'

interface Props {
  links: Links[]
}

export const Footer: React.FC<Props> = memo(function Footer({
  links,
  ...args
}) {
  const { styles, isTabletScreen } = useScreen()
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
          marginRight: isTabletScreen ? spacing[0] : spacing[8],
          marginTop: isTabletScreen ? spacing[4] : spacing[0],
        }}
      >
        {link.label}
      </Link>
    </List.Item>
  ))
  return (
    <Container size={'lg'} style={{ margin: 0, padding: 0, maxWidth: '100%' }}>
      <footer
        style={{
          padding: `${spacing[8]}px ${spacing[16]}px`,
          backgroundColor: semanticColors.white,
        }}
        {...args}
      >
        <List
          display={'flex'}
          mb={spacing[6]}
          sx={{ flexDirection: styles.direction }}
        >
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
          &copy;copyright 2023 Hiroki Ogura
        </small>
      </footer>
    </Container>
  )
})
