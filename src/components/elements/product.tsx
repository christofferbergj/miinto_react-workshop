import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons'
import React, { useState } from 'react'

import { Box } from '~/components/elements/box'
import { Text } from '~/components/elements/text'

import { styled } from '~/theme'
import { TProduct } from '~/utils/generate-product'

const FavouriteButton = styled('button', {
  background: 'transparent',
  border: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '$full',
  width: 36,
  height: 36,
  transition: '$button',

  '@hover': {
    '&:hover': {
      background: '$gray4',
    },
  },

  '&:active': {
    background: '$gray5',
    transform: 'scale(0.93)',
  },
})

export const Product = ({ id, price, title, image }: TProduct) => {
  const [isFavourite, setIsFavourite] = useState(false)

  return (
    <div key={id}>
      <Box
        onClick={() => setIsFavourite(!isFavourite)}
        css={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '$gray3',
          borderRadius: '$2',
          height: 360,
          width: '100%',
          transition: '$button',

          '@md': {
            height: 500,
          },

          '@hover': {
            '&:hover': {
              backgroundColor: '$gray4',
            },

            '&:active': {
              backgroundColor: '$gray5',
              transform: 'scale(0.99)',
            },
          },
        }}
      >
        <Box
          as="img"
          alt="product"
          src={image}
          css={{
            objectFit: 'contain',
            userSelect: 'none',
            width: '50%',
            height: '50%',
            objectPosition: 'center',
          }}
        />
      </Box>

      <Box
        css={{
          mt: '$4',
          px: '$2',
          display: 'flex',
          alignItems: 'start',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Text semibold>{title}</Text>
          <Text muted medium size="sm" css={{ mt: '$2' }}>
            {price}
          </Text>
        </Box>

        <Box css={{ ml: '$4' }}>
          <FavouriteButton
            type="button"
            onClick={() => setIsFavourite(!isFavourite)}
          >
            {isFavourite ? <HeartFilledIcon /> : <HeartIcon />}
          </FavouriteButton>
        </Box>
      </Box>
    </div>
  )
}