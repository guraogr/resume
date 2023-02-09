import AppHead from 'next/head'
import { type PropsWithChildren, useMemo } from 'react'

import { APP_DESCRIPTION, APP_NAME } from 'constans'

interface Props {
  /*
    ページタイトル
  */
  title?: string
  /*
  ページ概要文
 */
  description?: string
  /*
    サムネイル画像のURL
   */
  thumbnailUrl?: string
  /*
    ページのURL
  */
  pageUrl: string
  /*
 ページタイプ
 */
  type?: 'website' | 'article'
}

export const Head: React.FC<PropsWithChildren<Props>> = ({
  title,
  description = APP_DESCRIPTION,
  thumbnailUrl,
  pageUrl,
  type = 'article',
  children,
}) => {
  const pageTitle = useMemo(
    () => (title != null ? `${title} | ${APP_NAME}` : APP_NAME),
    [title]
  )
  return (
    <AppHead>
      <title>{pageTitle}</title>
      <meta property="og:title" content={pageTitle} />
      <meta name="theme-color" content="#FD7E14" />
      <meta property="og:image" content={thumbnailUrl} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={APP_NAME} />
      <meta name="description" content={description} />
      <meta property="og:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:locale" content="ja_JP" />
      <link rel="canonical" href={pageUrl} />
      <link
        rel="icon alternate"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon alternate"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="shortcut icon alternate" href="/favicon.ico" />
      <link rel="icon" href="/logo.svg" type="image/svg+xml" />
      {children}
    </AppHead>
  )
}
