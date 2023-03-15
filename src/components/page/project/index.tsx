import {
  Container,
  Loader,
  Flex,
  Stack,
  Space,
  Button,
  Box,
  Title,
} from '@mantine/core'
import { useRouter } from 'next/router'
import { memo, useCallback } from 'react'

import AboutProject from './components/aboutProject'

import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { HorizontalProjectCard } from '@/components/ui/HorizontalProjectCard'
import { Markdown } from '@/components/ui/MarkDown'
import { spacing } from '@/constans'
import { PAGE_TITLE_MAP } from '@/constans/title'
import { useFetchProject } from '@/features/Projects/api/fetchProject'
import { useScreen } from '@/hooks/useScreen'
import { projectSchema } from '@/lib/http/schema/projectsSchema'
import { semanticColors } from '@/styles/colors'
import { HEADINGS } from '@/styles/typography'

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
    productDetail,
    productUrl,
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
        <Box
          component="section"
          bg={semanticColors.white}
          py={spacing[8]}
          px={isTabletScreen ? spacing[6] : spacing[10]}
        >
          <AboutProject
            thumb={thumb}
            thumbAlt={thumbAlt}
            title={title}
            role={role}
            projectTime={projectTime}
            member={member}
            taskType={taskType}
            productName={productName}
            productDetail={productDetail}
            productUrl={productUrl}
          />
          <Space h={spacing[8]} />
          <Box sx={{ lineHeight: 2 }}>
            <Markdown source={contents} />
          </Box>
          <Space h={spacing[20]} />
          <Flex justify={'center'}>
            <Button
              onClick={(e: any) => {
                handleClick(e)
              }}
              size="md"
            >
              作品一覧に戻る
            </Button>
          </Flex>
          <Space h={spacing[20]} />
          <Title
            order={2}
            size={HEADINGS.H3}
            mb={spacing[2]}
            ta={isTabletScreen ? 'center' : 'left'}
          >
            おすすめの作品
          </Title>
          <Stack
            spacing={isTabletScreen ? spacing[8] : spacing[4]}
            px={isTabletScreen ? spacing[6] : spacing[0]}
          >
            <HorizontalProjectCard
              id="4p-kg9subsp"
              thumb="campus.png"
              thumbAlt="ビズリーチキャンパスのロゴ"
              title="デザイン負債を抱えた製品のUI再設計を担当。デザイナー・フロントエンドの橋渡しとなりプロジェクトを推進。"
              productName="ビズリーチ・キャンパス"
              category="UI改善"
            />
            <HorizontalProjectCard
              id="btmc9gikk5-3"
              thumb="poli.png"
              thumbAlt="Poliphonyのサムネイル"
              title="HRMOSシリーズ全体で一貫した体験を提供するため、デザインシステム「Polyphony」のTable UI定義を担当。"
              productName="HRMOS"
              category="デザインシステム構築"
            />
            <HorizontalProjectCard
              id="8krhoql19-5y"
              thumb="honu.png"
              thumbAlt="honuのロゴ"
              title="土地と人との新しいコミュニケーションを創出する思い出SNSアプリ"
              productName="honu"
              category="コンテスト応募"
            />
            <HorizontalProjectCard
              id="a_-0tejwnm"
              thumb="baseline.png"
              thumbAlt="baselineのサムネイル"
              title="学内で発生した過去の就活情報を検索する「Baseline」の立ち上げ"
              productName="baseline"
              category="DX"
            />
          </Stack>
        </Box>
      </Container>
    </>
  )
})

export default ProjectPage
