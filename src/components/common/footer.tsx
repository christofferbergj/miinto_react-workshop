import React from 'react'

import { Container } from '~/components/elements/container'
import { Text } from '~/components/elements/text'

import { styled } from '~/theme'

const StyledFooter = styled('footer', {
  marginTop: '$20',
  paddingVertical: '$6',
  display: 'flex',
  textAlign: 'center',

  '@md': {
    marginTop: 400,
    paddingVertical: '$10',
  },
})

export const Footer = () => {
  return (
    <StyledFooter>
      <Container>
        <Text size="sm" semibold>
          Miinto React Workshop
        </Text>
      </Container>
    </StyledFooter>
  )
}
