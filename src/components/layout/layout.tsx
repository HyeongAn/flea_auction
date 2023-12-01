import React from 'react'
import { ChildrenProps } from '../../../types/props'
import Header from './header/header'
import Footer from './footer/footer'
import Providers from '../../../lib/providers'

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Header />
      <Providers>
        <main style={{ flex: '1' }}>{children}</main>
      </Providers>
      <Footer />
    </>
  )
}

export default Layout
