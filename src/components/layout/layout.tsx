import React from 'react'
import { LayoutProps } from '../../../types/props'
import Header from './header/header'
import Footer from './footer/footer'

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main style={{ flex: '1' }}>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
