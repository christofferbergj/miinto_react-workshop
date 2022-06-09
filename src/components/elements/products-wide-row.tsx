import React from 'react'

import { Box } from '~/components/elements/box'
import { Product } from '~/components/elements/product'

import { generateProduct } from '~/utils/generate-product'
import { listOf } from '~/utils/list-of'

const products = listOf(generateProduct, 2)

export const ProductsWideRow = () => {
  return (
    <Box
      css={{
        display: 'grid',
        gap: '$8',
        mt: '$10',

        '@lg': {
          gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
          mt: '$20',
        },
      }}
    >
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </Box>
  )
}
