import { Group, Header as MantineHeader, Text, Box, Flex } from '@mantine/core'
import Link from 'next/link'
import { useState } from 'react'

export interface HeaderProps {
  links: Array<{ link: string; label: string }>
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
  const [active, setActive] = useState<string>(links[0].link)
  const items = links.map((link) => (
    <Box
      c={active === link.link ? 'primary.6' : 'grayAlpha.4'}
      key={link.label}
      fw="bold"
    >
      <Link
        href={link.link}
        onClick={() => {
          setActive(link.link)
        }}
        style={{
          padding: 8,
          display: 'flex',
          alignItems: 'center',
          height: '100%',
        }}
      >
        {link.label}
      </Link>
    </Box>
  ))
  return (
    <MantineHeader height={56}>
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
        <Group h={'100%'}>{items}</Group>
      </Flex>
    </MantineHeader>
  )
}
