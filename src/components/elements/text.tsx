import { styled } from '~/theme'

export const Text = styled('span', {
  lineHeight: '1',
  margin: '0',
  fontWeight: 400,
  fontVariantNumeric: 'tabular-nums',
  display: 'block',

  variants: {
    size: {
      '2xs': {
        fontSize: '$2xs',
        lineHeight: '$2xs',
      },
      xs: {
        fontSize: '$xs',
        lineHeight: '$xs',
      },
      sm: {
        fontSize: '$sm',
        lineHeight: '$sm',
      },
      base: {
        fontSize: '$md',
        lineHeight: '$md',
      },
      lg: {
        fontSize: '$lg',
        fontWeight: '$semibold',
        lineHeight: '$lg',
      },
      xl: {
        fontSize: '$xl',
        fontWeight: '$semibold',
        lineHeight: '$xl',
      },
      '2xl': {
        fontSize: '$2xl',
        fontWeight: '$semibold',
        lineHeight: '$2xl',
      },
      '3xl': {
        fontSize: '$3xl',
        fontWeight: '$semibold',
        lineHeight: '$3xl',
      },
      '4xl': {
        fontSize: '$4xl',
        fontWeight: '$semibold',
        lineHeight: '$4xl',
      },
    },
    muted: {
      true: {
        color: '$lowContrastText',
      },
    },
    error: {
      true: {
        color: '$tomato9',
      },
    },
    underline: {
      true: {
        textDecoration: 'underline',
      },
    },
    uppercase: {
      true: {
        textTransform: 'uppercase',
      },
    },
    bold: {
      true: {
        fontWeight: '$bold',
      },
    },
    semibold: {
      true: {
        fontWeight: '$semibold',
      },
    },
    medium: {
      true: {
        fontWeight: '$medium',
      },
    },
    center: {
      true: {
        textAlign: 'center',
      },
    },
  },

  compoundVariants: [
    {
      size: 'lg',
      medium: true,
      css: {
        fontWeight: '$medium',
      },
    },
  ],

  defaultVariants: {
    size: 'base',
  },
})
