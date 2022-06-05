import React from 'react'
import Footer from '../shared/Footer'
import Navbar from '../shared/Navbar'

export default function Layout({ children, ...props}) {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}
