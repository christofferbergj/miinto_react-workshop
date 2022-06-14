import React from 'react'
import { HeartFilledIcon, HeartIcon } from '@radix-ui/react-icons'
import { styled } from '~/theme'
import { Box } from '~/components/elements/box'
import { useSetFavourite } from '~/hooks/use-set-favourite'

const StyledFavouriteButton = styled('button', {
    background: 'transparent',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '$full',
    width: 36,
    height: 36,
    transition: '$button',

    '@lg': {
        width: 40,
        height: 40,
    },

    '> svg': {
        width: 18,
        height: 18,

        '@lg': {
            width: 22,
            height: 22,
        },
    },

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

export const FavouriteButton = () => {
    const { isFavourite, toggleFavourite } = useSetFavourite()

    return (
        <Box css={{ marginLeft: '$4' }}>
            <StyledFavouriteButton onClick={toggleFavourite}>
                { isFavourite ? <HeartFilledIcon/> : <HeartIcon/> }
            </StyledFavouriteButton>
        </Box>
    )
}
