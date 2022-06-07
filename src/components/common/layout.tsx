import React from 'react'

import { Footer } from '~/components/common/footer'
import { Header } from '~/components/common/header'

import { styled } from '~/theme'
import { useTheme } from '~/theme-context'

type Props = {
  children: React.ReactNode
}

const Wrapper = styled('div', {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '$appBg',
  color: '$hiContrastText',
  overflow: 'hidden',
})

const Main = styled('main', {
  flex: 1,
})

export const Layout = ({ children }: Props) => {
  const { themeClass } = useTheme()

  return (
    <Wrapper className={themeClass}>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </Wrapper>
  )
}
