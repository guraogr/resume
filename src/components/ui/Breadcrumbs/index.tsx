import { List, Container, useMantineTheme, Box } from '@mantine/core'
import Link from 'next/link'
import { memo } from 'react'

import CustomText from '../Text'

import { spacing } from '@/constans'

export interface BreadcrumbsItem {
  label: string
  link?: string
}

interface Props {
  items: BreadcrumbsItem[]
}

export const Breadcrumbs: React.FC<Props> = memo(function Breadcrumbs({
  items,
}) {
  const theme = useMantineTheme()
  return (
    <Box component={'nav'} bg={theme.colors.primary[0]} py={spacing[2]}>
      <Container size={'lg'}>
        <List display={'flex'} sx={{ alignItems: 'center', flexWrap: 'wrap' }}>
          <List.Item c={'primary'}>
            <Link href="/" style={{ fontSize: theme.fontSizes.sm }}>
              HOME
            </Link>
          </List.Item>

          {items.map((item, key) => (
            <>
              <CustomText
                c={'primary'}
                mx={spacing[1]}
                sx={{ fontSize: theme.fontSizes.sm }}
              >
                &gt;
              </CustomText>
              {item.link ? (
                <List.Item key={key} c={'primary'}>
                  <Link
                    href={item.link}
                    style={{ fontSize: theme.fontSizes.sm }}
                  >
                    {item.label}
                  </Link>
                </List.Item>
              ) : (
                <List.Item key={key} sx={{ fontSize: theme.fontSizes.sm }}>
                  {item.label}
                </List.Item>
              )}
            </>
          ))}
        </List>
      </Container>
    </Box>
  )
})
