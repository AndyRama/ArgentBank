import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../asset/argentBankLogo.png'

function NavBar() {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
      </Link>
    </nav>
  )
}
export default NavBar
