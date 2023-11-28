import { Box, Image, Space, type FlexProps, Button, Flex } from '@mantine/core'
import { memo, type PropsWithChildren } from 'react'

import { Markdown } from '../MarkDown'

import CustomText from '@/components/ui/Text'
import { path, spacing } from '@/constans'
import { semanticColors } from '@/styles/colors'
import { TEXT_TYPE } from '@/styles/typography'

interface Props extends FlexProps {
  logo: string
  logoAlt: string
  companyName: string
  job: string
  desc2: string
  workedTime: string
  exp: string
  handleClick: (exp: string) => void
}

export const CompanyCard: React.FC<PropsWithChildren<Props>> = memo(
  function CompanyCard({
    logo,
    logoAlt,
    companyName,
    job,
    workedTime,
    children,
    desc2,
    exp,
    handleClick,
    ...args
  }) {
    return (
      <Box w={'100%'}>
        <Box
          component="article"
          bg={semanticColors.white}
          py={spacing[5]}
          px={spacing[6]}
          sx={{
            borderRadius: 8,
          }}
          {...args}
        >
          <Image
            mr={spacing[5]}
            src={`${path.companyLogos}/${logo}`}
            width={36}
            alt={logoAlt}
            mb={spacing[4]}
          />
          <Box>
            <Box mb={spacing[4]}>
              <CustomText type={TEXT_TYPE.SUB_HEADLINE} mb={spacing[2]}>
                {companyName}
              </CustomText>
              <CustomText c={semanticColors.base_tirtiary} size="sm">
                {children}
              </CustomText>
              <CustomText c={semanticColors.base_tirtiary} size="sm">
                {job}
              </CustomText>
            </Box>
            <Box>
              <Box>
                <CustomText fw={'bold'} mb={spacing[1]}>
                  担当サービス
                </CustomText>
                <Box sx={{ lineHeight: 2 }} fz={14}>
                  <Markdown source={workedTime} />
                </Box>
              </Box>
              <Space h={spacing[2]} />
              <Box>
                <CustomText fw={'bold'} mb={spacing[1]}>
                  担当業務
                </CustomText>
                <Box sx={{ lineHeight: 2 }} fz={14}>
                  <Markdown source={desc2} />
                </Box>
              </Box>
            </Box>
            <Space h={spacing[4]} />
            <Flex>
              <Button
                onClick={() => {
                  handleClick(exp)
                }}
                variant="outline"
                size="sm"
              >
                業務内容を見る
              </Button>
            </Flex>
          </Box>
        </Box>
      </Box>
    )
  }
)
