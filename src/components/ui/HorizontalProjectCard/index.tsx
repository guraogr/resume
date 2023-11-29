import { Box, Flex, Title, Image, useMantineTheme, Space } from '@mantine/core'
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
  role: string
  time: string
  desc: string
}

export const HorizontalProjectCard: React.FC<Props> = memo(
  function HorizontalProjectCard({
    id,
    thumb,
    thumbAlt,
    title,
    productName,
    role,
    time,
    desc,
    category,
  }) {
    const { styles, isTabletScreen } = useScreen()
    const theme = useMantineTheme()
    const roles = role.split('/')
    return (
      <Link href={`${id}`} target="_blank">
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
            borderRadius: 10,
          }}
          px={spacing[4]}
          py={spacing[6]}
          bg={semanticColors.white}
        >
          <Image
            src={`${path.projectThumbs}/${thumb}`}
            alt={thumbAlt}
            maw={284}
          />
          <Box
            ml={isTabletScreen ? spacing[0] : spacing[8]}
            mt={isTabletScreen ? spacing[5] : spacing[0]}
          >
            <Flex gap={spacing[2]} c={semanticColors.primary} mb={spacing[1]}>
              <CustomText type={TEXT_TYPE.SUB_HEADLINE}>
                {productName}
              </CustomText>
            </Flex>
            <Title order={2} size={HEADINGS.H3} mb={spacing[2]}>
              {title}
            </Title>
            <Flex gap={spacing[2]} mb={spacing[1]}>
              <CustomText>{desc}</CustomText>
            </Flex>
            <Space h={spacing[4]} />
            <Flex gap={spacing[2]}>
              {roles.map((role, key) => (
                <CustomText
                  key={key}
                  bg={theme.colors.blue[0]}
                  type={TEXT_TYPE.CAPTION1}
                  p={'2px 8px'}
                  sx={{ borderRadius: theme.radius.md }}
                  c={theme.colors.blue[9]}
                >
                  {role}
                </CustomText>
              ))}
            </Flex>
          </Box>
        </Box>
      </Link>
    )
  }
)
