import {
  Container,
  Loader,
  Image,
  Flex,
  Box,
  Title,
  Stack,
  Space,
  Button,
} from '@mantine/core'
import { useRouter } from 'next/router'
import { memo, useCallback } from 'react'

import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { HorizontalProjectCard } from '@/components/ui/HorizontalProjectCard'
import { Markdown } from '@/components/ui/MarkDown'
import CustomText from '@/components/ui/Text'
import { path, spacing } from '@/constans'
import { PAGE_TITLE_MAP } from '@/constans/title'
import { useFetchProject } from '@/features/Projects/api/fetchProject'
import { useScreen } from '@/hooks/useScreen'
import { projectSchema } from '@/lib/http/schema/projectsSchema'
import { semanticColors } from '@/styles/colors'
import { HEADINGS, TEXT_TYPE } from '@/styles/typography'

const ProjectPage = memo(function ProjectsPage() {
  const router = useRouter()
  const { id } = router.query
  const { data, isLoading, isError } = useFetchProject(id as string)
  const { isTabletScreen } = useScreen()

  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.preventDefault()
      void router.push('/projects')
    },
    [router]
  )

  if (isLoading) {
    return <Loader></Loader>
  }

  if (isError) {
    throw new Error('問題が発生しました')
  }

  const fetchedProject = projectSchema.parse(data)
  const {
    thumb,
    thumbAlt,
    productName,
    taskType,
    title,
    role,
    projectTime,
    member,
    contents,
  } = fetchedProject

  const BreadcrumbsItems = [
    {
      label: PAGE_TITLE_MAP.PROJECTS,
      link: '/projects',
    },
    {
      label: fetchedProject.title,
    },
  ]

  return (
    <>
      <Breadcrumbs items={BreadcrumbsItems} />
      <Container size={'md'} px={isTabletScreen ? spacing[0] : spacing[10]}>
        <Image src={`${path.projectThumbs}/${thumb}`} alt={thumbAlt} />
        <Box
          component="section"
          bg={semanticColors.white}
          py={spacing[8]}
          px={isTabletScreen ? spacing[6] : spacing[10]}
        >
          <Flex gap={spacing[2]} c={semanticColors.primary} mb={spacing[1]}>
            <CustomText type={TEXT_TYPE.SUB_HEADLINE}>{productName}</CustomText>
            <CustomText type={TEXT_TYPE.SUB_HEADLINE}>{taskType}</CustomText>
          </Flex>
          <Title order={1} size={HEADINGS.H1} mb={spacing[2]}>
            {title}
          </Title>
          <Space h={spacing[2]} />
          <Stack spacing={spacing[2]}>
            <Flex
              pt={spacing[2]}
              sx={{ borderTop: `1px solid ${semanticColors.border}` }}
            >
              <CustomText
                w={'15%'}
                c={semanticColors.base_tirtiary}
                type={TEXT_TYPE.SUB_HEADLINE}
              >
                メンバー
              </CustomText>
              <CustomText w={'80%'}>{member}</CustomText>
            </Flex>
            <Flex
              pt={spacing[2]}
              sx={{ borderTop: `1px solid ${semanticColors.border}` }}
            >
              <CustomText
                w={'15%'}
                c={semanticColors.base_tirtiary}
                type={TEXT_TYPE.SUB_HEADLINE}
              >
                担当
              </CustomText>
              <CustomText w={'80%'}>{role}</CustomText>
            </Flex>
            <Flex
              py={spacing[2]}
              sx={{
                borderTop: `1px solid ${semanticColors.border}`,
                borderBottom: `1px solid ${semanticColors.border}`,
              }}
            >
              <CustomText
                w={'15%'}
                c={semanticColors.base_tirtiary}
                type={TEXT_TYPE.SUB_HEADLINE}
              >
                時期
              </CustomText>
              <CustomText w={'80%'}>{projectTime}</CustomText>
            </Flex>
          </Stack>
          <Space h={spacing[8]} />
          <Box sx={{ lineHeight: 2 }}>
            <Markdown source={contents} />
          </Box>
        </Box>
        <Space h={spacing[8]} />
        <Stack
          spacing={isTabletScreen ? spacing[8] : spacing[3]}
          px={isTabletScreen ? spacing[6] : spacing[0]}
        >
          <HorizontalProjectCard id="bizreach" />
          <HorizontalProjectCard id="bizreach" />
          <HorizontalProjectCard id="bizreach" />
        </Stack>
        <Space h={spacing[8]} />
        <Flex justify={'center'}>
          <Button
            onClick={(e) => {
              handleClick(e)
            }}
            size="md"
          >
            作品一覧に戻る
          </Button>
        </Flex>
      </Container>
    </>
  )
})

export default ProjectPage
