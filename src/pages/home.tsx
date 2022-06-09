import React from 'react'

import { Box } from '~/components/elements/box'
import { Container } from '~/components/elements/container'
import { ProductRow } from '~/components/elements/product-row'
import { ProductsWideRow } from '~/components/elements/products-wide-row'

export const Home = () => {
  return (
    <Box data-component="home-page">
      <Container>
        <ProductRow />
        <ProductsWideRow />
      </Container>
    </Box>
  )
}
