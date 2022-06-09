import React from 'react'

import { Layout } from '~/components/common/layout'
import { Container } from '~/components/elements/container'
import { ProductsRow } from '~/components/elements/products-row'
import { ProductsWideRow } from '~/components/elements/products-wide-row'

import { globalStyles } from '~/theme'
import { ThemeProvider } from '~/theme-context'

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
