import React from 'react'
import { ChildrenProps } from '../../../types/props'
import Header from './header/header'
import Footer from './footer/footer'
import Providers from '../../app/providers'

const Layout = ({ children }: ChildrenProps) => {
  return (
    <>
      <Providers>
        <Header />
        <main style={{ flex: '1' }}>{children}</main>
        <Footer />
      </Providers>
    </>
  )
}

export default Layout
