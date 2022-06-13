import React from 'react'

import { Box } from '~/components/elements/box'
import { Product } from '~/components/elements/product'

import { generateProduct } from '~/utils/generate-product'
import { listOf } from '~/utils/list-of'

const products = listOf(generateProduct, 2)

export const ProductsWideRow = () => {
  return (
    <Box
      data-component="products-wide-row"
      css={{
        display: 'grid',
        gap: '$5',
        marginTop: '$10',

        '@lg': {
          gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
          marginTop: '$20',
          gap: '$8',
        },

        '@xl': {
          gridColumnGap: '$10',
          gridRowGap: '$14',
        },
      }}
    >
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </Box>
  )
}
