import { Box, Flex, Image, type FlexProps } from '@mantine/core'
import { memo, type PropsWithChildren } from 'react'

import Text from '@/components/ui/Text'
import { path, spacing } from '@/constans'
import { semanticColors } from '@/styles/colors'
import { TEXT_TYPE } from '@/styles/typography'

interface Props extends FlexProps {
  logo: string
  logoAlt: string
  companyName: string
  job: string
  workedTime: string
}

export const CompanyCard: React.FC<PropsWithChildren<Props>> = memo(
  function CompanyCard({
    logo,
    logoAlt,
    companyName,
    job,
    workedTime,
    children,
    ...args
  }) {
    return (
      <Flex bg={semanticColors.white} py={spacing[5]} px={spacing[6]} {...args}>
        <Image
          mr={spacing[3]}
          src={`${path.companyLogos}/${logo}`}
          width={32}
          alt={logoAlt}
        />
        <Box>
          <Text type={TEXT_TYPE.SUB_HEADLINE}>{companyName}</Text>
          <Text>{job}</Text>
          <Text mb={spacing[2]}>{workedTime}</Text>
          <Text c={semanticColors.base_tirtiary}>{children}</Text>
        </Box>
      </Flex>
    )
  }
)
