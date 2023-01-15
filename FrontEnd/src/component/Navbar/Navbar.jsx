import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../asset/argentBankLogo.png'
import IconUser from '../Icons/IconUser'
import './Navbar.scss'

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
      <Link className="main-nav-item" id="SignIn" to="/Login">
        <IconUser className="sign-in-icon" />
        <span id="SignIn">Sign In</span>
      </Link>
    </nav>
  )
}
export default NavBar
