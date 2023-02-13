import { Box, Flex, Space } from '@mantine/core'
import { memo } from 'react'

import { Heading } from './ui/Heading'
import { SubHeading } from './ui/SubHeading'

import { CompanyCard } from '@/components/ui/CompanyCard.tsx'
import { contentsWidth, spacing } from '@/constans'
import { ProfilePageLayout } from '@/layouts/ProfilePageLayout'
import { semanticColors } from '@/styles/colors'

const HistorySection: React.FC = memo(function HistorySection() {
  return (
    <ProfilePageLayout components={'section'} bg={semanticColors.bg}>
      <Box sx={{ maxWidth: contentsWidth, margin: 'auto' }}>
        <Heading subTitle="フィロソフィー" mb={spacing[10]}>
          私がデザインエンジニアとして大切にするのは、
          <br />
          コラボレーションによる事業の推進です
        </Heading>
        <SubHeading
          desc={'事業会社・クライアントワークを双方経験してきました。'}
          mb={spacing[6]}
        >
          正社員
        </SubHeading>
        <Flex>
          <CompanyCard
            logo={'yumemi.png'}
            logoAlt={'Yumemi'}
            companyName={'株式会社ゆめみ'}
            job={'デザインエンジニア・正社員'}
            workedTime={'2021年4月 - 現在 (6ヶ月)'}
          >
            複数のC向けiOS・AndroidアプリのUIデザイン業務を担当。
            大規模プロジェクトにおける管理画面のUIデザイン・フロントエンド開発を一貫して担当、またそれに伴うクライアントとのコミュニケーション。
          </CompanyCard>
          <Space w={spacing[8]} />
          <CompanyCard
            logo={'yumemi.png'}
            logoAlt={'Yumemi'}
            companyName={'株式会社ゆめみ'}
            job={'デザインエンジニア・正社員'}
            workedTime={'2021年4月 - 現在 (6ヶ月)'}
          >
            複数のC向けiOS・AndroidアプリのUIデザイン業務を担当。
            大規模プロジェクトにおける管理画面のUIデザイン・フロントエンド開発を一貫して担当、またそれに伴うクライアントとのコミュニケーション。
          </CompanyCard>
        </Flex>
        <Space h={spacing[16]} />
        <SubHeading
          desc={'事業会社・クライアントワークを双方経験してきました。'}
          mb={spacing[6]}
        >
          業務委託
        </SubHeading>
        <Flex>
          <CompanyCard
            logo={'yumemi.png'}
            logoAlt={'Yumemi'}
            companyName={'株式会社ゆめみ'}
            job={'デザインエンジニア・正社員'}
            workedTime={'2021年4月 - 現在 (6ヶ月)'}
          >
            複数のC向けiOS・AndroidアプリのUIデザイン業務を担当。
            大規模プロジェクトにおける管理画面のUIデザイン・フロントエンド開発を一貫して担当、またそれに伴うクライアントとのコミュニケーション。
          </CompanyCard>
          <Space w={spacing[8]} />
          <CompanyCard
            logo={'yumemi.png'}
            logoAlt={'Yumemi'}
            companyName={'株式会社ゆめみ'}
            job={'デザインエンジニア・正社員'}
            workedTime={'2021年4月 - 現在 (6ヶ月)'}
          >
            複数のC向けiOS・AndroidアプリのUIデザイン業務を担当。
            大規模プロジェクトにおける管理画面のUIデザイン・フロントエンド開発を一貫して担当、またそれに伴うクライアントとのコミュニケーション。
          </CompanyCard>
        </Flex>
      </Box>
    </ProfilePageLayout>
  )
})

export default HistorySection
