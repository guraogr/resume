import { Title, Box, Space } from '@mantine/core'
import { memo } from 'react'

import { HorizontalProjectCard } from '@/components/ui/HorizontalProjectCard'
import { spacing } from '@/constans'

export const ReccomendWorks = memo(function ListItem() {
  return (
    <>
      <Box mb={56}>
        <Title mb={spacing[5]} size={'h3'} order={1}>
          UI再設計・デザインシステム構築
        </Title>
        <HorizontalProjectCard
          id="project/4p-kg9subsp"
          thumb="campus.png"
          thumbAlt="ビズリーチキャンパスのロゴ"
          title="デザイン負債を抱えたプロダクトのUI再設計"
          productName="OB/OG訪問ネットワーク「ビズリーチ・キャンパス」"
          category=""
          role="UIデザイン/フロントエンド実装/スタイルガイド作成"
          time="2023年"
          desc="デザインエンジニアとして、社内のデザイン負債を解消するプロジェクトを担当しました。ビズリーチ・キャンパスはリリースから5年が経過しており、類似コンポーネントや100を超えるカラーコードなど多数のデザイン負債が存在していたため、フロントエンドチームとデザイナーチームの橋渡しとなりUIの再設計・スタイルガイドの整備を主導しました。"
        />
        <Space h={16} />
        <HorizontalProjectCard
          id="project/btmc9gikk5-3"
          thumb="poli.png"
          thumbAlt="Poliphonyのサムネイル"
          title="Table UIの仕様書作成"
          productName="HRMOS大規模デザインシステム「Polyphony」"
          category=""
          role="UIデザイン"
          time="2023年"
          desc="HRMOSシリーズ全体で利用可能なTable UIの設計を行いました。HRMOSシリーズはCORE、労務、給与、1on1など、各プロダクトで使用されるTable UIの外観や仕様に違いがあり、HRMOSシリーズ全体として一貫した体験を提供できない課題に着手しました。"
        />
      </Box>
      <Box mb={56}>
        <Title mb={spacing[5]} size={'h3'} order={1}>
          UXリサーチ
        </Title>
        <HorizontalProjectCard
          id="https://design.visional.inc/archives/6770"
          thumb="yoshiko.png"
          thumbAlt="ペルソナのサムネイル"
          title="浸透していないペルソナを機能させる"
          productName="OB/OG訪問ネットワーク「ビズリーチ・キャンパス」"
          category=""
          role="デプスインタビュー/アンケート調査/ワークショップ実施/ペルソナ作成/プレゼン/ブログ執筆"
          time="2023年"
          desc="社内で浸透していないペルソナの再設計とチームへの浸透を実施しました。デプスインタビューやアンケート調査をもとにチームを巻き込んだペルソナ設計を実施。浸透度を高めるワークショップの実施やペルソナに関するテストを開発チーム30名に向けて行い、定量的に理解度向上の成果を証明しました。"
        />
        <Space h={16} />
        <HorizontalProjectCard
          id="project/gnoyw30i5m"
          thumb="knocklearn.png"
          thumbAlt="KnockLearnのロゴ"
          title="新規事業立ち上げに伴うUXリサーチ"
          productName="相続や人材領域の新規事業"
          category=""
          role="デプスインタビュー/KJ法/VPC/ヒアリングシート作成/ファシリテーション/WEBデザイン"
          time="2023年"
          desc="複数の新規事業立ち上げに伴い、相続や人材領域にてニーズ調査を行いました。ヒアリングシートの作成や業務委託メンバーを巻き込んだデプスインタビューの実施。HCDプロセスを参考にした仮説検証を行いました。"
        />
        <Space h={16} />
        <HorizontalProjectCard
          id="project/uemce6007"
          thumb="michitel.png"
          thumbAlt="ミチテルのロゴ"
          title="新規事業の立ち上げに伴うサービスデザイン"
          productName="若手人材向けキャリアチェンジ支援事業"
          category=""
          role="デプスインタビュー/ビジネスモデルキャンバス/VPC/ヒアリングシート作成/WEBデザイン/バナー作成/ロゴ制作"
          time="2023年"
          desc="複数の新規事業立ち上げに伴い、相続や人材領域にてニーズ調査を行いました。ヒアリングシートの作成や業務委託メンバーを巻き込んだデプスインタビューの実施。HCDプロセスを参考にした仮説検証を行いました。"
        />
      </Box>

      <Box mb={56}>
        <Title mb={spacing[5]} size={'h3'} order={1}>
          B2Bプロダクトデザイン
        </Title>
        <HorizontalProjectCard
          id="project/w2qtosamw1"
          thumb="dap.png"
          thumbAlt="Dapのサムネイル"
          title="MVP立ち上げに伴うUI・UXデザイン"
          productName="行政書士向け案件管理サービス"
          category="デザインシステム構築"
          role="UIデザイン"
          time="2023年"
          desc="GovTechスタートアップにて、行政書士に特化した案件管理サービスMVP版のUI・UXデザインを担当しました。行政書士固有の項目情報が多く、様々なケースを想定したカスタマイズ性のあるUIが必要なため、複雑なドメイン知識をキャッチアップしつつもスピード感のあるMVPデザインを行いました。"
        />
        <Space h={16} />
        <HorizontalProjectCard
          id="project/bjnasmhpjt2"
          thumb="craftbank.png"
          thumbAlt="Craftbankのロゴ"
          title="新機能開発におけるUIデザイン"
          productName="建設工事の受発注プラットフォーム「CraftBank Office」"
          category=""
          role="UI・UXデザイン/デザインプロセス整備"
          time="2023年"
          desc="新機能の開発におけるUIデザインを担当しました。建築工事特有の複雑なドメイン知識をキャッチアップし、CSやPdM、エンジニアとの密な連携を通して新機能のデザインを担当しました。"
        />
      </Box>
      <Box mb={56}>
        <Title mb={spacing[5]} size={'h3'} order={1}>
          趣味制作
        </Title>
        <HorizontalProjectCard
          id="project/8krhoql19-5y"
          thumb="honu.png"
          thumbAlt="Honuのロゴ"
          title="思い出アプリの立ち上げ・デザイン"
          productName="土地と思い出を繋ぐSNSアプリ「honu」"
          category=""
          role="サービス企画/UI・UXデザイン/WEBデザイン/グラフィックデザイン"
          time="2023年"
          desc="撮影した思い出の動画を位置情報に紐付けて保存することで、その場所に来た他の人たちと共有できるtoC向けのアプリを制作しました。また、当作品は2021年開催の学内作品コンテストにて展示し、最優秀賞・デザイン賞・企業賞を受賞しました。"
        />
        <Space h={16} />
        <HorizontalProjectCard
          id="project/a_-0tejwnm"
          thumb="baseline.png"
          thumbAlt="Baselineのサムネイル"
          title="就活情報のDX化を目的としたプロダクト開発"
          productName="学内向け就活プラットフォーム「Baseline」"
          category=""
          role="サービス企画/UI・UXデザイン/フロントエンド実装/WEBデザイン/DX"
          time="2023年"
          desc="
            従来アナログで管理されていた専門学校の就職活動情報をデジタル化し、全学年が閲覧可能できるようにした検索サービスを制作しました。
            私はサービス企画、デザイン、フロントエンド開発を担当し、後に学内コンテストにてオンライン審査賞を受賞しました。"
        />
        <Space h={16} />
        <HorizontalProjectCard
          id="project/w5hq9xrho"
          thumb="cocoda.png"
          thumbAlt="Cocodaのサムネイル"
          title="デザイナー向けプロダクトにおけるユーザー体験の設計・提案"
          productName="Designship Challenge Produce by Cocoda!"
          category=""
          role="UI・UXデザイン/デプスインタビュー"
          time=""
          desc="2021年開催のデザインシップとCocoda!が協力して開催する「デザインの越境」をテーマとしたデザインコンテストに応募しました。2万5000人のユーザーを抱えるデザイナーコミュニティ「Cocoda!」の機能提案とリデザインに挑戦し、最優秀賞とReDesigner賞を受賞しました。
            "
        />
      </Box>
      <Box mb={56}>
        <Title mb={spacing[5]} size={'h3'} order={1}>
          ビジュアルデザイン
        </Title>
        <HorizontalProjectCard
          id="project/3ehjobudnux1"
          thumb="biz_comu.png"
          thumbAlt="Bizreachのロゴ"
          title="クリエイティブ制作"
          productName="ハイクラス転職サイト「ビズリーチ」"
          category=""
          role="WEBデザイン/バナー制作"
          time="2023年"
          desc="
            マーケターと連携しながらサービスの集客用バナーやLPの制作を担当しました。"
        />
        <Space h={16} />
        <HorizontalProjectCard
          id="project/g6wps-_ojpe"
          thumb="youtube.png"
          thumbAlt="YouTubeのサムネイル"
          title="YouTubeサムネイルのデザイン"
          productName="5分でわかるバックオフィス by マネーフォワード クラウド"
          category=""
          role="ビジュアルデザイン"
          time="2023年"
          desc="YouTubeサムネイルのデザインを担当しました。"
        />
      </Box>
    </>
  )
})
