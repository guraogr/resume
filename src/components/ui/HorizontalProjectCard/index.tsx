import { Box, Flex, Title, Image } from '@mantine/core'
import Link from 'next/link'
import { memo } from 'react'

import CustomText from '@/components/ui/Text'
import { path, spacing } from '@/constans'
import { useScreen } from '@/hooks/useScreen'
import { semanticColors } from '@/styles/colors'
import { shadow } from '@/styles/shadow'
import { TEXT_TYPE, HEADINGS } from '@/styles/typography'

interface Props {
  id: string
  thumb: string
  thumbAlt: string
  title: string
  productName: string
  category: string
}

export const HorizontalProjectCard: React.FC<Props> = memo(
  function HorizontalProjectCard({
    id,
    thumb,
    thumbAlt,
    title,
    productName,
    category,
  }) {
    const { styles, isTabletScreen } = useScreen()
    return (
      <Link href={`${id}`}>
        <Box
          component="article"
          display={'flex'}
          sx={{
            alignItems: 'center',
            flexDirection: styles.direction,
            boxShadow: shadow.normal,
            transition: '0.15s ease-in-out',
            cursor: 'pointer',
            '&:hover': {
              transform: 'translate(0, -6px)',
              opacity: '0.7',
            },
          }}
          px={spacing[4]}
          py={spacing[4]}
          bg={semanticColors.white}
        >
          <Image
            src={`${path.projectThumbs}/${thumb}`}
            alt={thumbAlt}
            maw={284}
          />
          <Box
            ml={isTabletScreen ? spacing[0] : spacing[5]}
            mt={isTabletScreen ? spacing[5] : spacing[0]}
          >
            <Flex gap={spacing[2]} c={semanticColors.primary} mb={spacing[1]}>
              <CustomText type={TEXT_TYPE.SUB_HEADLINE}>
                {productName}
              </CustomText>
              <CustomText type={TEXT_TYPE.SUB_HEADLINE}>{category}</CustomText>
            </Flex>
            <Title order={2} size={HEADINGS.H3} mb={spacing[2]}>
              {title}
            </Title>
          </Box>
        </Box>
      </Link>
    )
  }
)
