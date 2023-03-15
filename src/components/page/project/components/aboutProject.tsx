import {
  Flex,
  Stack,
  Title,
  Image,
  Space,
  useMantineTheme,
  Box,
} from '@mantine/core'
import { memo } from 'react'

import CustomText from '@/components/ui/Text'
import { path, spacing } from '@/constans'
import { useScreen } from '@/hooks/useScreen'
import { semanticColors } from '@/styles/colors'
import { TEXT_TYPE, HEADINGS } from '@/styles/typography'

interface Props {
  thumb: string
  thumbAlt: string
  title: string
  role: string
  projectTime: string
  member: string
  taskType: string
  productName: string
  productDetail?: string
  productUrl?: string
}

const AboutProject: React.FC<Props> = memo(function AboutProject(props) {
  const {
    thumb,
    thumbAlt,
    title,
    role,
    projectTime,
    member,
    taskType,
    productName,
    productDetail,
    productUrl,
  } = props
  const theme = useMantineTheme()
  const { styles, isTabletScreen } = useScreen()

  return (
    <>
      <Image src={`${path.projectThumbs}/${thumb}`} alt={thumbAlt} />
      <Space h={spacing[4]} />
      <Flex gap={spacing[2]} c={semanticColors.primary} mb={spacing[1]}>
        <CustomText type={TEXT_TYPE.SUB_HEADLINE}>{taskType}</CustomText>
      </Flex>
      <Space h={spacing[2]} />
      <Title order={1} size={HEADINGS.H1} mb={spacing[8]}>
        {title}
      </Title>
      <Stack spacing={spacing[2]}>
        <Flex
          pt={spacing[2]}
          sx={{ borderTop: `1px solid ${semanticColors.border}` }}
        >
          <CustomText
            w={'15%'}
            c={semanticColors.base_tirtiary}
            type={TEXT_TYPE.SUB_HEADLINE}
          >
            メンバー
          </CustomText>
          <CustomText w={'80%'}>{member}</CustomText>
        </Flex>
        <Flex
          pt={spacing[2]}
          sx={{ borderTop: `1px solid ${semanticColors.border}` }}
        >
          <CustomText
            w={'15%'}
            c={semanticColors.base_tirtiary}
            type={TEXT_TYPE.SUB_HEADLINE}
          >
            担当
          </CustomText>
          <CustomText w={'80%'}>{role}</CustomText>
        </Flex>
        <Flex
          py={spacing[2]}
          sx={{
            borderTop: `1px solid ${semanticColors.border}`,
            borderBottom: `1px solid ${semanticColors.border}`,
          }}
        >
          <CustomText
            w={'15%'}
            c={semanticColors.base_tirtiary}
            type={TEXT_TYPE.SUB_HEADLINE}
          >
            時期
          </CustomText>
          <CustomText w={'80%'}>{projectTime}</CustomText>
        </Flex>
      </Stack>
      {productDetail && (
        <>
          <Space h={spacing[8]} />
          <Flex
            bg={theme.colors.primary[0]}
            pl={spacing[4]}
            pr={spacing[7]}
            py={spacing[4]}
            direction={styles.direction}
          >
            <Image
              mr={isTabletScreen ? spacing[0] : spacing[6]}
              maw={isTabletScreen ? 'auto' : 312}
              src={`${path.projectThumbs}/${thumb}`}
              alt={thumbAlt}
            />

            <Box>
              <Title
                order={3}
                size={HEADINGS.H3}
                mt={isTabletScreen ? spacing[2] : spacing[2]}
                mb={isTabletScreen ? spacing[1] : spacing[1]}
                c={'primary'}
              >
                {productName}
              </Title>
              <CustomText>{productDetail}</CustomText>
              <Space h={spacing[2]} />
              {productUrl && (
                <a
                  target={'_blank'}
                  href={productUrl}
                  rel="noreferrer"
                  style={{
                    color: semanticColors.primary,
                    borderBottom: `1px solid ${semanticColors.primary}`,
                  }}
                >
                  サイトはこちら
                </a>
              )}
            </Box>
          </Flex>
        </>
      )}
    </>
  )
})

export default AboutProject
