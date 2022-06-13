import React from 'react'

import { Box } from '~/components/elements/box'
import { Product } from '~/components/elements/product'

import { generateProduct } from '~/utils/generate-product'
import { listOf } from '~/utils/list-of'

const products = listOf(generateProduct, 4)

export const ProductRow = () => {
  return (
    <Box
      data-component="product-row"
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(260px, 1fr))',
        overflowX: 'scroll',
        scrollSnapType: 'x mandatory',
        gap: '$5',
        paddingBottom: '$10',
        marginTop: '$10',

        '> *': {
          scrollSnapAlign: 'center',
        },

        '@lg': {
          gridTemplateColumns: 'repeat(4, minmax(300px, 1fr))',
          gap: '$8',
          marginTop: '$20',
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
