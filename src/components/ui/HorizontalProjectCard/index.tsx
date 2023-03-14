import { Box, Flex, Title, Image } from '@mantine/core'
import Link from 'next/link'
import { memo } from 'react'

import CustomText from '@/components/ui/Text'
import { path, spacing } from '@/constans'
import { useScreen } from '@/hooks/useScreen'
import { semanticColors } from '@/styles/colors'
import { TEXT_TYPE, HEADINGS } from '@/styles/typography'

interface Props {
  id: string
}

export const HorizontalProjectCard: React.FC<Props> = memo(
  function HorizontalProjectCard({ id }) {
    const { styles, isTabletScreen } = useScreen()
    return (
      <Link href={`project/${id}`}>
        <Box
          component="article"
          display={'flex'}
          sx={{ alignItems: 'center', flexDirection: styles.direction }}
          px={spacing[4]}
          py={spacing[4]}
          bg={semanticColors.white}
        >
          <Image
            src={`${path.projectThumbs}/campus.png`}
            alt={'bizreach campus'}
          />
          <Box
            ml={isTabletScreen ? spacing[0] : spacing[5]}
            mt={isTabletScreen ? spacing[5] : spacing[0]}
          >
            <Flex gap={spacing[2]} c={semanticColors.primary} mb={spacing[1]}>
              <CustomText type={TEXT_TYPE.SUB_HEADLINE}>
                BizReach Campus
              </CustomText>
              <CustomText type={TEXT_TYPE.SUB_HEADLINE}>UI改善</CustomText>
            </Flex>
            <Title order={2} size={HEADINGS.H3} mb={spacing[2]}>
              デザイン負債を抱えた製品のUI再設計を担当。デザイナー・フロントエンドの橋渡しとなりプロジェクトを推進。
            </Title>
          </Box>
        </Box>
      </Link>
    )
  }
)
