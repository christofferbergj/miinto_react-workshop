import React from 'react'

import { Box } from '~/components/elements/box'
import { Text } from '~/components/elements/text'

import { ProductProps } from '~/utils/generate-product'

import { FavouriteButton } from './favourite-button'
// import the icons


export const Product = ({ id, price, title, image }: ProductProps) => {

    return (
        <div key={id}>
        <Box
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
            marginTop: '$4',
            paddingHorizontal: '$2',
            display: 'flex',
            alignItems: 'start',
            justifyContent: 'space-between',
            }}
        >
            <Box>
            <Text semibold>{title}</Text>
            <Text muted medium size="sm" css={{ marginTop: '$2' }}>
                {price}
            </Text>
            </Box>
            {/* add favourite icons */}
            <FavouriteButton />
        </Box>
        </div>
    )
}
