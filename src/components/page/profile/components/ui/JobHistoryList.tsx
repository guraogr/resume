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
          <Grid.Col key={key} mb={spacing[4]} span={1} display={'flex'}>
            <CompanyCard
              logo={job.logo}
              logoAlt={job.logoAlt}
              companyName={job.companyName}
              job={job.job}
              workedTime={job.desc}
              desc2={job.desc2}
              exp={job.exp}
              handleClick={handleClick}
              h={'100%'}
            >
              {job.workedTime}
            </CompanyCard>
          </Grid.Col>
        ))}
      </Grid>
      <Modal
        size={'xl'}
        opened={opened}
        onClose={close}
        title="業務詳細"
        sx={{ zIndex: 10000 }}
      >
        {typeof expContent === 'string' && <Markdown source={expContent} />}
      </Modal>
    </>
  )
})
