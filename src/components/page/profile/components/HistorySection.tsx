import { Box, Container, Space } from '@mantine/core'
import { memo } from 'react'

import { Heading } from './ui/Heading'
import { JobHisotryList } from './ui/JobHistoryList'
import { SubHeading } from './ui/SubHeading'

import { spacing } from '@/constans'
import { JobType } from '@/constans/http'
import { useFetchJobHistory } from '@/features/JobHistory/api/fetchJobHistory'
import { ProfilePageLayout } from '@/layouts/ProfilePageLayout'
import { fetchJobHistoriesSchema } from '@/lib/http/schema/jobHistorySchema'
import { semanticColors } from '@/styles/colors'

const HistorySection: React.FC = memo(function HistorySection() {
  const { data, isLoading, isError } = useFetchJobHistory()
  if (isLoading) {
    return <></>
  }
  if (isError) {
    throw new Error('問題が発生しました')
  }
  const fetchedJobHistory = fetchJobHistoriesSchema.parse(data).contents
  const fulltimeJobHistory = fetchedJobHistory.filter(
    (history) => history.jobType[0] === JobType[0]
  )
  const partimeJobHistory = fetchedJobHistory.filter(
    (history) => history.jobType[0] === JobType[1]
  )
  const internHistory = fetchedJobHistory.filter(
    (history) => history.jobType[0] === JobType[2]
  )

  return (
    <ProfilePageLayout bg={semanticColors.bg}>
      <Container size={'lg'} m={'auto'}>
        <Heading subTitle="フィロソフィー" mb={spacing[10]}>
          私がデザインエンジニアとして大切にするのは、
          <br />
          コラボレーションによる事業の推進です
        </Heading>
        <Box component="section">
          <SubHeading
            desc={'事業会社・クライアントワークを双方経験してきました。'}
            mb={spacing[6]}
          >
            正社員
          </SubHeading>
          <JobHisotryList histories={fulltimeJobHistory} />
        </Box>
        <Space h={spacing[16]} />
        <Box component="section">
          <SubHeading
            desc={'事業会社・クライアントワークを双方経験してきました。'}
            mb={spacing[6]}
          >
            業務委託
          </SubHeading>
          <JobHisotryList histories={partimeJobHistory} />
        </Box>
        <Space h={spacing[16]} />
        <Box component="section">
          <SubHeading
            desc={'事業会社・クライアントワークを双方経験してきました。'}
            mb={spacing[6]}
          >
            インターン・アルバイト
          </SubHeading>
          <JobHisotryList histories={internHistory} />
        </Box>
      </Container>
    </ProfilePageLayout>
  )
})

export default HistorySection
