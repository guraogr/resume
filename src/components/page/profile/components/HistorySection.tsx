import { Box, List, Space } from '@mantine/core'
import { memo } from 'react'

import { Heading } from './ui/Heading'
import { SubHeading } from './ui/SubHeading'

import { CompanyCard } from '@/components/ui/CompanyCard.tsx'
import { contentsWidth, spacing } from '@/constans'
import { JobType } from '@/constans/http'
import { useFetchJobHistory } from '@/features/JobHistory/api/fetchJobHistory'
import { ProfilePageLayout } from '@/layouts/ProfilePageLayout'
import { fetchJobHistoriesSchema } from '@/lib/http/jobHistorySchema'
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
    <ProfilePageLayout components={'section'} bg={semanticColors.bg}>
      <Box sx={{ maxWidth: contentsWidth, margin: 'auto' }}>
        <Heading subTitle="フィロソフィー" mb={spacing[10]}>
          私がデザインエンジニアとして大切にするのは、
          <br />
          コラボレーションによる事業の推進です
        </Heading>
        <SubHeading
          desc={'事業会社・クライアントワークを双方経験してきました。'}
          mb={spacing[6]}
        >
          正社員
        </SubHeading>
        <List display={'flex'} sx={{ justifyContent: 'space-between' }}>
          {fulltimeJobHistory.map((job, key) => (
            <List.Item key={key} w={'49%'}>
              <CompanyCard
                logo={job.logo}
                logoAlt={job.logoAlt}
                companyName={job.companyName}
                job={job.job}
                workedTime={job.workedTime}
              >
                {job.desc}
              </CompanyCard>
            </List.Item>
          ))}
        </List>
        <Space h={spacing[16]} />
        <SubHeading
          desc={'事業会社・クライアントワークを双方経験してきました。'}
          mb={spacing[6]}
        >
          業務委託
        </SubHeading>
        <List display={'flex'}>
          {partimeJobHistory.map((job, key) => (
            <List.Item key={key}>
              <CompanyCard
                logo={job.logo}
                logoAlt={job.logoAlt}
                companyName={job.companyName}
                job={job.job}
                workedTime={job.workedTime}
              >
                {job.desc}
              </CompanyCard>
              {key !== fetchedJobHistory.length - 1 && <Space w={spacing[8]} />}
            </List.Item>
          ))}
        </List>
        <Space h={spacing[16]} />
        <SubHeading
          desc={'事業会社・クライアントワークを双方経験してきました。'}
          mb={spacing[6]}
        >
          インターン・アルバイト
        </SubHeading>
        <List display={'flex'}>
          {internHistory.map((job, key) => (
            <List.Item key={key}>
              <CompanyCard
                logo={job.logo}
                logoAlt={job.logoAlt}
                companyName={job.companyName}
                job={job.job}
                workedTime={job.workedTime}
                w={'50%'}
              >
                {job.desc}
              </CompanyCard>
              {key !== fetchedJobHistory.length - 1 && <Space w={spacing[8]} />}
            </List.Item>
          ))}
        </List>
      </Box>
    </ProfilePageLayout>
  )
})

export default HistorySection
