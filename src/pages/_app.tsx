import '@/styles/globals.css'
import { MantineProvider } from '@mantine/core'
import type { AppProps } from 'next/app'

import { theme } from '@/styles/theme'
import 'ress'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <MantineProvider theme={theme}>
      <Component {...pageProps} />
    </MantineProvider>
  )
}
export default App
