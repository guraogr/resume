import { Grid, Modal } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks'
import { memo, useCallback, useState } from 'react'

import { CompanyCard } from '@/components/ui/CompanyCard.tsx'
import { Markdown } from '@/components/ui/MarkDown'
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
  const [opened, { open, close }] = useDisclosure(false)
  const [expContent, setExpContent] = useState<string>()
  const handleClick = useCallback((exp: string) => {
    open()
    setExpContent(exp)
  }, [])
  return (
    <>
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
              exp={job.exp}
              handleClick={handleClick}
            >
              {job.desc}
            </CompanyCard>
          </Grid.Col>
        ))}
      </Grid>
      <Modal
        size={'xl'}
        opened={opened}
        onClose={close}
        title="経験できたこと"
        sx={{ zIndex: 10000 }}
      >
        {typeof expContent === 'string' && <Markdown source={expContent} />}
      </Modal>
    </>
  )
})
