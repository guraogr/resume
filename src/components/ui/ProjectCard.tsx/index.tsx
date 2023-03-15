import { Card, Image, Flex, Title, Box, type CardProps } from '@mantine/core'
import Link from 'next/link'
import React, { memo } from 'react'

import CustomText from '@/components/ui/Text'
import { path, spacing } from '@/constans'
import { type Project } from '@/models/Projects'
import { semanticColors } from '@/styles/colors'
import { shadow } from '@/styles/shadow'
import { HEADINGS, TEXT_TYPE } from '@/styles/typography'

type Props = Omit<
  Project,
  'member' | 'contents' | 'category' | 'productDetail' | 'title'
> &
  CardProps

export const ProjectCard: React.FC<Props> = memo(function ProjectCard({
  id,
  thumb,
  thumbAlt,
  productName,
  taskType,
  desc,
  role,
  projectTime,
  children,
  ...args
}) {
  return (
    <Link href={`project/${id}`}>
      <Card
        radius={'sm'}
        component="article"
        {...args}
        sx={{
          boxShadow: shadow.normal,
          transition: '0.15s ease-in-out',
          cursor: 'pointer',
          '&:hover': {
            transform: 'translate(0, -6px)',
            opacity: '0.7',
          },
        }}
      >
        <Card.Section>
          <Image
            height={190}
            src={`${path.projectThumbs}/${thumb}`}
            alt={thumbAlt}
          />
        </Card.Section>
        <Box px={spacing[2]} py={spacing[4]}>
          <Flex gap={spacing[2]} c={semanticColors.primary} mb={spacing[1]}>
            <CustomText type={TEXT_TYPE.CAPTION2}>{taskType}</CustomText>
          </Flex>
          <Title order={1} size={HEADINGS.H3} mb={spacing[2]}>
            {children}
          </Title>
        </Box>
      </Card>
    </Link>
  )
})
