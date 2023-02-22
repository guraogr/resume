import {
  Header as MantineHeader,
  Text,
  Flex,
  Burger,
  Box,
  List,
  Divider,
} from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import Link from 'next/link'
import { memo, useState } from 'react'

import { spacing } from '@/constans'
import { useScreen } from '@/hooks/useScreen'
import { semanticColors } from '@/styles/colors'

export interface Links {
  link: string
  label: string
}

export interface HeaderProps {
  links: Links[]
}

export const Header: React.FC<HeaderProps> = memo(function Header({ links }) {
  const [opened, { toggle }] = useDisclosure(false)
  const [active, setActive] = useState<string>(links[0]?.link ?? '')
  // TODO: 1回目プロジェクトを押しても効かない
  // console.log(active)
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
        onClick={() => {
          setActive(link.link)
        }}
        style={{
          padding: spacing[4],
          width: isTabletScreen ? '90%' : 'auto',
          display: 'flex',
          fontWeight: 'bold',
          alignItems: 'center',
          textDecoration: 'none',
          color:
            active === link.link
              ? semanticColors.primary
              : semanticColors.base_tirtiary,
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
      sx={{
        position: 'relative',
      }}
    >
      <Flex
        h={'100%'}
        justify={'space-between'}
        align="center"
        w="95%"
        m="auto"
      >
        <Text size={'lg'} fw={'bold'}>
          Ogura&apos;s Portfolio
        </Text>
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
            bg={semanticColors.white}
            sx={{ position: 'absolute', left: 0, right: 0, top: 57 }}
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
