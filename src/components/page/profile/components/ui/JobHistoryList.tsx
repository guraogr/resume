import { Grid } from '@mantine/core'
import { memo } from 'react'

import { CompanyCard } from '@/components/ui/CompanyCard.tsx'
import { spacing } from '@/constans'
import { useScreen } from '@/hooks/useScreen'
import { type JobHistries } from '@/models/JobHistory'

interface Props {
  histories: JobHistries
}

export const JobHisotryList: React.FC<Props> = memo(function Heading({
  histories,
}) {
  const { isTabletScreen } = useScreen()

  return (
    <Grid
      grow
      columns={isTabletScreen ? 1 : 3}
      sx={{
        justifyContent: 'space-between',
      }}
    >
      {histories.map((job, key) => (
        <Grid.Col key={key} mb={spacing[4]} span={1}>
          <CompanyCard
            logo={job.logo}
            logoAlt={job.logoAlt}
            companyName={job.companyName}
            job={job.job}
            workedTime={job.workedTime}
          >
            {job.desc}
          </CompanyCard>
        </Grid.Col>
      ))}
    </Grid>
  )
})
