import { Loader, Box, Title, Tabs, Grid } from '@mantine/core'
import { memo } from 'react'

import { ProjectCard } from '@/components/ui/ProjectCard.tsx'
import { spacing } from '@/constans'
import { useFetchProjects } from '@/features/Projects/api/fetchProjects'
import { useScreen } from '@/hooks/useScreen'
import { fetchProjectsSchema } from '@/lib/http/schema/projectsSchema'
import { semanticColors } from '@/styles/colors'
import { HEADINGS } from '@/styles/typography'

const ProjectsPage = memo(function ProjectsPage() {
  const { data, isLoading, isError } = useFetchProjects()
  const { isTabletScreen, isSmartPhoneScreen } = useScreen()
  if (isLoading) {
    return <Loader></Loader>
  }
  if (isError) {
    throw new Error('問題が発生しました')
  }
  const fetchedProjects = fetchProjectsSchema.parse(data).contents
  const setColumn = (): number => {
    if (isSmartPhoneScreen) {
      return 1
    }
    if (isTabletScreen) {
      return 2
    }
    return 3
  }
  return (
    <>
      <Box component="section">
        <Title order={1} size={HEADINGS.H1} mb={spacing[8]}>
          参画プロジェクト
        </Title>
        <Tabs
          defaultValue="popular"
          styles={{
            tab: {
              fontWeight: 'bold',
              color: semanticColors.base_tirtiary,
              paddingTop: spacing[5],
              paddingBottom: spacing[5],
            },
          }}
        >
          <Tabs.List mb={spacing[6]} grow>
            <Tabs.Tab value="popular">代表的なプロジェクト</Tabs.Tab>
            <Tabs.Tab value="product_design">プロダクトデザイン</Tabs.Tab>
            <Tabs.Tab value="communication_design">
              コミュニケーションデザイン
            </Tabs.Tab>
            <Tabs.Tab value="hobby">趣味制作</Tabs.Tab>
          </Tabs.List>
          <Tabs.Panel value="popular" pt={spacing[4]}>
            <Grid columns={setColumn()} gutter={spacing[8]}>
              {fetchedProjects.map((project, key) => (
                <Grid.Col key={key} span={1}>
                  <ProjectCard
                    id={project.id}
                    thumb={project.thumb}
                    thumbAlt={project.thumbAlt}
                    productName={project.productName}
                    taskType={project.taskType}
                    title={project.title}
                    desc={project.desc}
                    role={project.role}
                    projectTime={project.projectTime}
                  />
                </Grid.Col>
              ))}
            </Grid>
          </Tabs.Panel>
        </Tabs>
      </Box>
    </>
  )
})

export default ProjectsPage
