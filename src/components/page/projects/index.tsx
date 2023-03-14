import { Loader, Box, Tabs, Grid, Title, Container } from '@mantine/core'
import { memo } from 'react'

import { Breadcrumbs } from '@/components/ui/Breadcrumbs'
import { ProjectCard } from '@/components/ui/ProjectCard.tsx'
import CustomText from '@/components/ui/Text'
import { spacing } from '@/constans'
import { PAGE_TITLE_MAP } from '@/constans/title'
import { useFetchProjects } from '@/features/Projects/api/fetchProjects'
import { useScreen } from '@/hooks/useScreen'
import { fetchProjectsSchema } from '@/lib/http/schema/projectsSchema'
import { semanticColors } from '@/styles/colors'
import { HEADINGS } from '@/styles/typography'

const ProjectsPage = memo(function ProjectsPage() {
  const { data, isLoading, isError } = useFetchProjects()
  const { isTabletScreen, isSmartPhoneScreen } = useScreen()
  const workCategory = [
    'product_design',
    'communication_design',
    'hobby',
    'article',
  ]

  const breadcrumsItems = [
    {
      label: PAGE_TITLE_MAP.PROJECTS,
    },
  ]

  if (isError) {
    throw new Error('問題が発生しました')
  }

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
      <Breadcrumbs items={breadcrumsItems} />
      <Box py={spacing[20]}>
        <Container
          size={'lg'}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <CustomText c={'primary'} fw={'bold'}>
            Assigned Projects
          </CustomText>
          <Title
            order={1}
            size={HEADINGS.H1}
            pt={spacing[2]}
            mb={spacing[8]}
            sx={{ textShadow: '1px 1px 10px rgba(0,0,0,.1)' }}
          >
            {PAGE_TITLE_MAP.PROJECTS}
          </Title>
          <CustomText>
            私は事業作りを軸とした広義なデザインを意識しており、「世の中に品質の高い価値をいち早く届ける」ことが事業推進にインパクトのあることだと考えています。
          </CustomText>
        </Container>
      </Box>
      <Container size={'lg'} py={spacing[10]}>
        <Tabs
          defaultValue={workCategory[0]}
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
            <Tabs.Tab value={workCategory[0]}>プロダクトデザイン</Tabs.Tab>
            <Tabs.Tab value={workCategory[1]}>
              コミュニケーションデザイン
            </Tabs.Tab>
            <Tabs.Tab value={workCategory[2]}>趣味制作</Tabs.Tab>
            <Tabs.Tab value={workCategory[3]}>執筆記事</Tabs.Tab>
          </Tabs.List>
          {isLoading ? (
            <Loader></Loader>
          ) : (
            <>
              {workCategory.map((category, key) => (
                <Tabs.Panel value={category} pt={spacing[4]} key={key}>
                  <Grid columns={setColumn()} gutter={spacing[8]}>
                    {fetchProjectsSchema
                      .parse(data)
                      .contents.map((project, key) => (
                        <>
                          {project.category[0] === category && (
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
                          )}
                        </>
                      ))}
                  </Grid>
                </Tabs.Panel>
              ))}
            </>
          )}
        </Tabs>
      </Container>
    </>
  )
})

export default ProjectsPage
