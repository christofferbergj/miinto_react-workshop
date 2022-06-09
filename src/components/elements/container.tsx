import { styled } from '~/theme'

export const Container = styled('div', {
  boxSizing: 'border-box',
  flexShrink: 0,
  w: '100%',
  mx: 'auto',
  px: '$5',

  '@md': {
    px: '$8',
  },

  variants: {
    size: {
      fluid: {
        maxWidth: '100%',
      },
      '1': {
        maxWidth: '430px',
      },
      '2': {
        maxWidth: '715px',
      },
      '3': {
        maxWidth: '1145px',
      },
      '4': {
        maxWidth: '1600px',
      },
      '5': {
        maxWidth: '1860px',
      },
    },
  },

  defaultVariants: {
    size: '5',
  },
})
