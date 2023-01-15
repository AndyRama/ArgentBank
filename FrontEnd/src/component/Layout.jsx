import { Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from '../pages/Home'
import NavBar from './Navbar/Navbar'

function Layout() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  )
}

export default Layout
