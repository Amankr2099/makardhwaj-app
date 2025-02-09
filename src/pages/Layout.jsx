import React from 'react'
import { Outlet } from 'react-router-dom'
import { Contact } from '../components/Contact'
import { Navbar } from '../components/Navbar'
import { Footer } from '../components/Footer'

export const Layout=()=> {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Contact/>
    <Footer/>
    </>
    
  )
}