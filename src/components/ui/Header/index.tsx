import {
  Header as MantineHeader,
  Flex,
  Burger,
  Box,
  List,
  Divider,
  useMantineTheme,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { memo } from 'react'

import CustomText from '../Text'

import { APP_NAME, spacing } from '@/constans'
import { useScreen } from '@/hooks/useScreen'
import { semanticColors } from '@/styles/colors'
import { shadow } from '@/styles/shadow'

export interface Links {
  link: string
  label: string
}

export interface HeaderProps {
  links: Links[]
}

export const Header: React.FC<HeaderProps> = memo(function Header({ links }) {
  const [opened, { toggle }] = useDisclosure(false)
  const theme = useMantineTheme()
  const { isTabletScreen } = useScreen()
  const items = links.map((link, key) => (
    <List.Item
      key={link.label}
      sx={{
        margin: isTabletScreen ? '0 auto' : 0,
        width: isTabletScreen ? '95%' : 'auto',
      }}
    >
      <Link
        href={link.link}
        style={{
          color: semanticColors.base_secondary,
          padding: spacing[4],
          width: isTabletScreen ? '90%' : 'auto',
          display: 'flex',
          alignItems: 'center',
          textDecoration: 'none',
        }}
      >
        {link.label}
      </Link>
      {key !== links.length - 1 && isTabletScreen && (
        <Divider color={semanticColors.border} />
      )}
    </List.Item>
  ))

  return (
    <MantineHeader
      height={56}
      bg={theme.white}
      fw={'bold'}
      sx={{
        position: 'relative',
        borderWidth: isTabletScreen ? 1 : 'none',
      }}
    >
      <Flex
        h={'100%'}
        justify={'space-between'}
        align="center"
        w="95%"
        m="auto"
      >
        <CustomText c={'primary'} display={'flex'}>
          <Link href="/" style={{ fontSize: 16 }}>
            {APP_NAME}
          </Link>
        </CustomText>
        {!isTabletScreen && (
          <Box component="nav">
            <List display={'flex'}>{items}</List>
          </Box>
        )}
        {isTabletScreen && (
          <Burger opened={opened} onClick={toggle} size="sm" />
        )}
      </Flex>
      {opened && (
        <Box>
          <Box
            component="nav"
            bg={theme.white}
            sx={{
              position: 'absolute',
              left: 0,
              right: 0,
              top: 57,
              boxShadow: shadow.normal,
            }}
          >
            <List
              styles={{
                itemWrapper: { width: isTabletScreen ? '100%' : 'auto' },
              }}
            >
              {items}
            </List>
          </Box>
        </Box>
      )}
    </MantineHeader>
  )
})
