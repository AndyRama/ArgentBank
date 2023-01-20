import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import NavBar from './Navbar/Navbar'
import Footer from './Footer/Footer'
import SignIn from '../pages/SignIn/SignIn'
import Profil from '../pages/Profil'

function Layout() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Login" element={<SignIn />} />
        <Route path="/Profil" element={<Profil />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default Layout
