import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import type { AppProps } from 'next/app'

import { theme } from '@/styles/theme'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient()
  return (
    <QueryClientProvider client={queryClient}>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </QueryClientProvider>
  )
}
export default App
