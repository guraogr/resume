import { Box, Button, Container, Flex, Space } from '@mantine/core'
import { useRouter } from 'next/router'
import { memo } from 'react'

import { Heading } from './ui/Heading'
import { ReccomendWorks } from './ui/ReccomendWorks'

import CustomText from '@/components/ui/Text'
import { spacing } from '@/constans'
import { ProfilePageLayout } from '@/layouts/ProfilePageLayout'
import { semanticColors } from '@/styles/colors'

const ProductSection: React.FC = memo(function ProductSection() {
  const router = useRouter()
  return (
    <ProfilePageLayout bg={semanticColors.white} mb={spacing[10]}>
      <Container size={'lg'}>
        <Heading subTitle="過去事例" mb={spacing[6]}>
          代表的なプロジェクト
        </Heading>
        <Box mb={spacing[16]}>
          <CustomText color={'red'} mt={spacing[3]}>
            こちらは公開可能なプロジェクトの一部を掲載しています。
            <br />
            クローズドな場でのみ公開可能なため、外部公開はお控えください。
          </CustomText>
        </Box>
        <ReccomendWorks />
        <Space h={spacing[10]} />
        <Flex justify={'center'}>
          <Button
            onClick={(e: any) => {
              void router.push('/projects')
            }}
            size="lg"
          >
            全てのプロジェクトを見る
          </Button>
        </Flex>
      </Container>
    </ProfilePageLayout>
  )
})

export default ProductSection
