import { Group, Header as MantineHeader, Text, Flex } from '@mantine/core'
import Link from 'next/link'
import { useState } from 'react'

import { spacing } from '@/constans'
import { semanticColors } from '@/styles/colors'

interface Links {
  link: string
  label: string
}

export interface HeaderProps {
  links: Links[]
}

export const Header: React.FC<HeaderProps> = ({ links }) => {
  const [active, setActive] = useState<string>(links[0]?.link ?? '')
  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      onClick={() => {
        setActive(link.link)
      }}
      style={{
        padding: spacing[2],
        display: 'flex',
        fontWeight: 'bold',
        alignItems: 'center',
        height: '100%',
        textDecoration: 'none',
        color:
          active === link.link
            ? semanticColors.primary
            : semanticColors.base_tirtiary,
      }}
    >
      {link.label}
    </Link>
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
