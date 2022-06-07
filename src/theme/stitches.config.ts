import {
  amber,
  amberDark,
  blue,
  blueDark,
  gray,
  grayDark,
  green,
  greenDark,
  tomato,
  tomatoDark,
} from '@radix-ui/colors'
import type * as Stitches from '@stitches/react'
import { createStitches, createTheme, globalCss } from '@stitches/react'

export const { styled } = createStitches({
  theme: {
    colors: {
      ...amber,
      ...blue,
      ...gray,
      ...green,
      ...tomato,

      white: 'hsla(0, 0%, 100%, 1)',
      black: 'hsla(0, 0%, 0%, 1)',

      appBg: '$gray1',
      subtleBg: '$gray2',

      hiContrastText: '$gray12',
      lowContrastText: '$gray11',
      errorText: '$tomato11',
      placeholderText: '$gray9',
      disabledText: '$gray11',

      outline: 'hsla(217, 99%, 65%, 1)',
    },
    fonts: {
      sans: '"Inter", sans-serif',
    },
    fontSizes: {
      '2xs': '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
      '3xl': '2.5rem',
      '4xl': '3rem',
    },
    fontWeights: {
      light: 300,
      regular: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeights: {
      '2xs': '1rem',
      xs: '1.125rem',
      sm: '1.375rem',
      base: '1.5rem',
      lg: '2rem',
      xl: '2.25rem',
      '2xl': '2.5rem',
      '3xl': '3rem',
      '4xl': '3.5rem',
    },
    letterSpacings: {
      tighter: '-0.05em',
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
      wider: '0.05em',
      widest: '0.1em',
    },
    space: {
      px: '1px',
      0: '0rem',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      18: '4.5rem',
      20: '5rem',
      24: '6rem',
      28: '7rem',
      32: '8rem',
      36: '9rem',
      40: '10rem',
      44: '11rem',
      48: '12rem',
      52: '13rem',
      56: '14rem',
      60: '15rem',
      64: '16rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
    },
    sizes: {
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      18: '4.5rem',
      20: '5rem',
      24: '6rem',
      prose: '65ch',
    },
    radii: {
      1: '0.125rem',
      2: '0.25rem',
      3: '0.5rem',
      4: '0.75rem',
      5: '1rem',
      full: '9999px',
    },
    zIndices: {
      1: '100',
      2: '200',
      3: '300',
      4: '400',
      5: '500',
      10: '1000',
      max: '9999',
    },
    borderWidths: {
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
    },
    transitions: {
      1: '75ms',
      2: '150ms',
      3: '250ms',
      default: 'all $2 ease',
      button:
        'background $2 ease 0s, color $2 ease 0s, border-color $2 ease 0s, box-shadow $2 ease 0s, transform $2 ease 0s, opacity $2 ease 0s',
      avatar: 'box-shadow $2 ease 0s, opacity $2 ease 0s',
      link: 'opacity $2 ease 0s, background $2 ease 0s',
      card: 'transform $2 ease 0s',
    },
  },
  utils: {
    p: (value: Stitches.PropertyValue<'padding'>) => ({
      padding: value,
    }),
    pt: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
    }),
    pr: (value: Stitches.PropertyValue<'paddingRight'>) => ({
      paddingRight: value,
    }),
    pb: (value: Stitches.PropertyValue<'paddingBottom'>) => ({
      paddingBottom: value,
    }),
    pl: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
    }),
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingTop'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
    m: (value: Stitches.PropertyValue<'margin'>) => ({
      margin: value,
    }),
    mt: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
    }),
    mr: (value: Stitches.PropertyValue<'marginRight'>) => ({
      marginRight: value,
    }),
    mb: (value: Stitches.PropertyValue<'marginBottom'>) => ({
      marginBottom: value,
    }),
    ml: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
    }),
    mx: (value: Stitches.PropertyValue<'marginLeft'>) => ({
      marginLeft: value,
      marginRight: value,
    }),
    my: (value: Stitches.PropertyValue<'marginTop'>) => ({
      marginTop: value,
      marginBottom: value,
    }),
    w: (value: Stitches.PropertyValue<'width'>) => ({ width: value }),
    h: (value: Stitches.PropertyValue<'height'>) => ({ height: value }),
    minW: (value: Stitches.PropertyValue<'minWidth'>) => ({ minWidth: value }),
    maxW: (value: Stitches.PropertyValue<'maxWidth'>) => ({
      maxWidth: value,
    }),
    minH: (value: Stitches.PropertyValue<'minHeight'>) => ({
      minHeight: value,
    }),
    maxH: (value: Stitches.PropertyValue<'maxHeight'>) => ({
      maxHeight: value,
    }),
    d: (value: Stitches.PropertyValue<'display'>) => ({ display: value }),
    dflex: (value: Stitches.PropertyValue<'alignItems'>) => ({
      display: 'flex',
      alignItems: value,
      justifyContent: value,
    }),
    fd: (value: Stitches.PropertyValue<'flexDirection'>) => ({
      flexDirection: value,
    }),
    fw: (value: Stitches.PropertyValue<'flexWrap'>) => ({ flexWrap: value }),
    ai: (value: Stitches.PropertyValue<'alignItems'>) => ({
      alignItems: value,
    }),
    ac: (value: Stitches.PropertyValue<'alignContent'>) => ({
      alignContent: value,
    }),
    jc: (value: Stitches.PropertyValue<'justifyContent'>) => ({
      justifyContent: value,
    }),
    as: (value: Stitches.PropertyValue<'alignSelf'>) => ({
      alignSelf: value,
    }),
    fg: (value: Stitches.PropertyValue<'flexGrow'>) => ({ flexGrow: value }),
    fs: (value: Stitches.PropertyValue<'fontSize'>) => ({
      fontSize: value,
    }),
    fb: (value: Stitches.PropertyValue<'flexBasis'>) => ({
      flexBasis: value,
    }),
    bc: (value: Stitches.PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value,
    }),
  },
  media: {
    xs: '(min-width: 360px)',
    sm: '(min-width: 480px)',
    md: '(min-width: 800px)',
    lg: '(min-width: 1024px)',
    xl: '(min-width: 1600px)',
    hover: '(any-hover: hover)',
    dark: '(prefers-color-scheme: dark)',
    light: '(prefers-color-scheme: light)',
  },
})

export const darkTheme = createTheme({
  colors: {
    ...amberDark,
    ...blueDark,
    ...grayDark,
    ...greenDark,
    ...tomatoDark,

    appBg: '$gray1',
    subtleBg: '$gray2',

    hiContrastText: '$gray12',
    lowContrastText: '$gray11',
    errorText: '$tomato11',
    placeholderText: '$gray9',
    disabledText: '$gray11',
  },
})

export const globalStyles = globalCss({
  ':root': {
    '--outline-width': '2px',
    '--outline-offset': '2px',
  },
  ':focus:not(:focus-visible)': {
    outline: 'none',
  },
  ':focus-visible': {
    outline: '$colors$outline solid var(--outline-width)',
    outlineOffset: 'var(--outline-offset)',
  },
  html: {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    boxSizing: 'border-box',
    fontFeatureSettings: "'case' 1, 'rlig' 1, 'calt' 0",
    height: '100%',
    textRendering: 'optimizeLegibility',
    touchAction: 'manipulation',
  },
  'html, body': {
    MozOsxFontSmoothing: 'grayscale',
    WebkitFontSmoothing: 'antialiased',
    fontFamily: '$sans',
    textRendering: 'optimizeLegibility',
  },
  body: {
    minHeight: '100%',
    width: '100%',
    overflowY: 'scroll',
    position: 'relative',
  },
  a: { WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)' },
  button: { cursor: 'default' },
})
