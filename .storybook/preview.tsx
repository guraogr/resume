import { MantineProvider } from '@mantine/core'
import { theme } from '../src/styles/theme'
import React from 'react'

const ThemeWrapper = (props: { children: React.ReactNode }) => {
  return <MantineProvider theme={theme}>{props.children}</MantineProvider>
}
export const decorators = [
  (renderStory: Function) => <ThemeWrapper>{renderStory()}</ThemeWrapper>,
]
