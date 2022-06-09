import { MoonIcon, SunIcon } from '@radix-ui/react-icons'
import React from 'react'

import { Box } from '~/components/elements/box'
import { Container } from '~/components/elements/container'
import { Text } from '~/components/elements/text'

import { styled } from '~/theme'
import { useTheme } from '~/theme-context'

const StyledHeader = styled('header', {
  py: '$8',

  '@lg': {
    py: '$12',
  },
})

const ThemeToggle = styled('button', {
  display: 'flex',
  backgroundColor: 'transparent',
  color: '$hiContrastText',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid $gray7',
  w: '$8',
  h: '$8',
  borderRadius: '$3',
  transition: '$button',

  '@hover': {
    '&:hover': {
      backgroundColor: '$gray4',
      borderColor: '$gray8',
    },
  },

  '&:active': {
    backgroundColor: '$gray5',
  },
})

const MenuItem = styled('a', {
  color: '$hiContrastText',
  textDecoration: 'none',
  fontSize: '$sm',
  fontWeight: '$medium',

  '@hover': {
    '&:hover': {
      cursor: 'pointer',
      textDecoration: 'underline',
    },
  },
})

const menuItems = ['Featured', 'Lifestyle', 'Books', 'Digital']

export const Header = () => {
  const { toggleTheme, theme } = useTheme()

  return (
    <StyledHeader>
      <Container css={{ d: 'flex', ai: 'center' }}>
        <Text
          bold
          uppercase
          css={{
            display: 'inline-flex',
            p: '$1',
            whiteSpace: 'nowrap',
            mr: '$10',
          }}
        >
          The Miinto Dynamite Shop <Text css={{ ml: '$2' }}>🧨</Text>
        </Text>

        <Box css={{ ml: 'auto', d: 'flex', ai: 'center' }}>
          <Box css={{ d: 'flex', ai: 'center', gap: '$10' }}>
            {menuItems.map((item) => (
              <MenuItem key={item} href="#">
                {item}
              </MenuItem>
            ))}
          </Box>

          <ThemeToggle css={{ ml: '$20' }} type="button" onClick={toggleTheme}>
            {theme === 'light' ? <MoonIcon /> : <SunIcon />}
          </ThemeToggle>
        </Box>
      </Container>
    </StyledHeader>
  )
}
