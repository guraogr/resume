import { Card, Image, Flex, Title, Box } from '@mantine/core'
import Link from 'next/link'
import { memo } from 'react'

import Text from '../Text'

import { path, spacing } from '@/constans'
import { type Project } from '@/models/Projects'
import { semanticColors } from '@/styles/colors'
import { HEADINGS, TEXT_TYPE } from '@/styles/typography'

type Props = Omit<Project, 'member' | 'contents'>

export const ProjectCard: React.FC<Props> = memo(function ProjectCard({
  id,
  thumb,
  thumbAlt,
  productName,
  taskType,
  title,
  desc,
  role,
  projectTime,
  ...args
}) {
  return (
    <Link href={`project/${id}`}>
      <Card radius={'sm'} component="article" {...args}>
        <Card.Section>
          <Image src={`${path.projectThumbs}/${thumb}`} alt={thumbAlt} />
        </Card.Section>
        <Box px={spacing[2]} py={spacing[4]}>
          <Flex gap={spacing[2]} c={semanticColors.primary} mb={spacing[1]}>
            <Text type={TEXT_TYPE.SUB_HEADLINE}>{productName}</Text>
            <Text type={TEXT_TYPE.SUB_HEADLINE}>{taskType}</Text>
          </Flex>
          <Title order={1} size={HEADINGS.H3} mb={spacing[2]}>
            {title}
          </Title>
          <Text c={semanticColors.base_secondary} lineClamp={2} mb={spacing[2]}>
            {desc}
          </Text>
          <Flex
            mt={spacing[2]}
            pt={spacing[2]}
            sx={{ borderTop: `1px solid ${semanticColors.border}` }}
          >
            <Text
              w={'15%'}
              c={semanticColors.base_tirtiary}
              type={TEXT_TYPE.SUB_HEADLINE}
            >
              担当
            </Text>
            <Text w={'80%'}>{role}</Text>
          </Flex>
          <Flex
            mt={spacing[2]}
            pt={spacing[2]}
            sx={{ borderTop: `1px solid ${semanticColors.border}` }}
          >
            <Text
              w={'15%'}
              c={semanticColors.base_tirtiary}
              type={TEXT_TYPE.SUB_HEADLINE}
            >
              時期
            </Text>
            <Text w={'80%'}>{projectTime}</Text>
          </Flex>
        </Box>
      </Card>
    </Link>
  )
})
