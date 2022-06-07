import React from 'react'

import { Layout } from '~/components/common/layout'
import { Box } from '~/components/elements/box'
import { Container } from '~/components/elements/container'
import { Text } from '~/components/elements/text'

import { chance } from '~/lib/chance'
import { globalStyles } from '~/theme'
import { ThemeProvider } from '~/theme-context'
import { listOf } from '~/utils/list-of'

type TProduct = {
  id: string
  title: string
  price: string
}

const generateProduct = (overrides?: Partial<TProduct>): TProduct => ({
  id: chance.guid(),
  title: `${chance.capitalize(chance.word({ length: 5 }))} ${chance.animal()}`,
  price: Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'EUR',
  }).format(chance.integer({ min: 100, max: 5000 })),
  ...overrides,
})

const productsOfFour = listOf(generateProduct, 4)
const productsOfTwo = listOf(generateProduct, 2)

const Product = ({ id, price, title }: TProduct) => {
  return (
    <div key={id}>
      <Box
        css={{
          backgroundColor: '$gray3',
          borderRadius: '$2',
          height: '400px',
          width: '100%',

          '@md': {
            height: '500px',
          },
        }}
      />
      <Box css={{ mt: '$4', px: '$2' }}>
        <Text semibold>{title}</Text>
        <Text muted size="sm" css={{ mt: '$2' }}>
          {price}
        </Text>
      </Box>
    </div>
  )
}

const ProductsRow = () => {
  return (
    <Box
      css={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, minmax(260px, 1fr))',
        overflowX: 'scroll',
        scrollSnapType: 'x mandatory',
        gap: '$5',
        pb: '$10',
        mt: '$10',

        '> *': {
          scrollSnapAlign: 'center',
        },

        '@lg': {
          gridTemplateColumns: 'repeat(4, minmax(300px, 1fr))',
          gap: '$8',
          mt: '$20',
        },
      }}
    >
      {productsOfFour.map((product) => (
        <Product {...product} />
      ))}
    </Box>
  )
}

const ProductsWideRow = () => {
  return (
    <Box
      css={{
        display: 'grid',
        gap: '$8',
        mt: '$20',

        '@lg': {
          gridTemplateColumns: 'repeat(auto-fit, minmax(0, 1fr))',
        },
      }}
    >
      {productsOfTwo.map((product) => (
        <Product {...product} />
      ))}
    </Box>
  )
}

export const App = () => {
  globalStyles()

  return (
    <ThemeProvider>
      <Layout>
        <Container>
          <ProductsRow />
          <ProductsWideRow />
        </Container>
      </Layout>
    </ThemeProvider>
  )
}
