import React, { useState } from 'react'
import IconUser from '../../component/Icons/IconUser'
import './SignIn.scss'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleChangeEmail = (event) => setEmail(event.target.value)
  const handleChangePassword = (event) => setPassword(event.target.value)
  const handleChangeRememberMe = () => setRememberMe(!rememberMe)
  return (
    <main className="main sign-in bg-dark">
      <section className="sign-in-content">
        <IconUser className="sign-in-icon" />
        <h1>Sign In</h1>
        <form action="" id="sign-in-form">
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              autoComplete="username"
              value={email}
              onChange={handleChangeEmail}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={handleChangeRememberMe}
              checked={rememberMe}
            />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <input type="submit" value="Sign In" className="sign-in-button" />
        </form>
      </section>
    </main>
  )
}
export default SignIn
