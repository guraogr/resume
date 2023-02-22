import type { MantineThemeOverride } from '@mantine/core'

import { BREAKPOINT_MAP } from '../constans/index'

import { primary, grayAlpha, blueGray, semanticColors } from './colors'
import { sizes } from './sizes'

export const theme: MantineThemeOverride = {
  colorScheme: 'light',
  white: semanticColors.white,
  black: semanticColors.base_primary,
  colors: {
    primary,
    grayAlpha,
    blueGray,
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
        [`@media (max-width: ${BREAKPOINT_MAP.sm}px)`]: {
          fontSize: 22,
        },
      },
      h2: {
        fontSize: 22,
        lineHeight: 1.5,
        [`@media (max-width: ${BREAKPOINT_MAP.sm}px)`]: {
          fontSize: 10,
        },
      },
      h3: {
        fontSize: 20,
        lineHeight: 1.5,
        [`@media (max-width: ${BREAKPOINT_MAP.sm}px)`]: {
          fontSize: 18,
        },
      },
      h4: {
        fontSize: 16,
        lineHeight: 1.5,
        [`@media (max-width: ${BREAKPOINT_MAP.sm}px)`]: {
          fontSize: 16,
        },
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
    Container: {
      defaultProps: {
        sizes,
      },
    },
  },
}
