import type { MantineThemeOverride } from '@mantine/core'

import { BREAKPOINT_MAP } from './../../constans/index'
export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  white: '#ffffff',
  colors: {
    primary: [
      '#EDF7F6',
      '#CDEAE6',
      '#ADDCD6',
      '#8CCEC7',
      '#6CC1B7',
      '#4CB3A7',
      '#3D8F85',
      '#2E6B64',
      '#1E4843',
      '#0F2421',
    ],
    grayAlpha: [
      '#F1F2F4',
      '#D7DBE0',
      '#BDC4CC',
      '#A3ADB8',
      '#8996A4',
      '#6F7F90',
      '#596673',
      '#434C56',
      '#2C333A',
      '#16191D',
    ],
  },
  primaryColor: 'primary',
  breakpoints: BREAKPOINT_MAP,
  fontFamily:
    '"Noto sans Japanese",Arial,"Hiragino Kaku Gothic ProN","Hiragino Sans",Meiryo,sans-serif',
  headings: {
    fontWeight: 'bold',
    sizes: {
      h1: {
        fontSize: 26,
        lineHeight: 1.5,
      },
      h2: {
        fontSize: 22,
        lineHeight: 1.5,
      },
      h3: {
        fontSize: 20,
        lineHeight: 1.5,
      },
      h4: {
        fontSize: 16,
        lineHeight: 1.5,
      },
    },
  },
  fontSizes: {
    xs: 12,
    sm: 13,
    md: 14,
    lg: 16,
    xl: 20,
  },
  components: {
    Button: {
      defaultProps: { color: 'primary' },
    },
  },
}
