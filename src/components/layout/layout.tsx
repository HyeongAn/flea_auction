import React from 'react'
import { LayoutProps } from '../../../types/props'
import Header from './header/header'
import Footer from './footer'

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
