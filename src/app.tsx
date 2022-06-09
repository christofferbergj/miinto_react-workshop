import React from 'react'

import { Layout } from '~/components/common/layout'
import { Home } from '~/pages/home'

import { globalStyles } from '~/theme'
import { ThemeProvider } from '~/theme-context'

export const App = () => {
  globalStyles()

  return (
    <ThemeProvider>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  )
}
