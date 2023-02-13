import { List } from '@mantine/core'
import { memo, useCallback } from 'react'

import { CompanyCard } from '@/components/ui/CompanyCard.tsx'
import { spacing } from '@/constans'
import { useScreen } from '@/hooks/useScreen'
import { type JobHistries } from '@/models/JobHistory'

interface Props {
  histories: JobHistries
  column: 1 | 2 | 3
}

export const JobHisotryList: React.FC<Props> = memo(function Heading({
  histories,
  column,
}) {
  const { isTabletScreen, styles } = useScreen()
  const setListItemWidth = useCallback(() => {
    if (column === 2) {
      return isTabletScreen ? '100%' : '49%'
    } else {
      return isTabletScreen ? '100%' : '32%'
    }
  }, [column, isTabletScreen])

  return (
    <List
      display={'flex'}
      sx={{
        justifyContent: 'space-between',
        flexWrap: column === 2 ? 'nowrap' : 'wrap',
        flexDirection: styles.direction,
      }}
      styles={{ itemWrapper: { width: '100%' } }}
    >
      {histories.map((job, key) => (
        <List.Item key={key} w={setListItemWidth()} mb={spacing[4]}>
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
  )
})
