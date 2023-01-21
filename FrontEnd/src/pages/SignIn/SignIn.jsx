import React, { useState } from 'react'
import IconUser from '../../component/Icons/IconUser'
import './SignIn.scss'
import { login } from '../../_store/middlewares/authMiddelware'

import { useDispatch, useSelector } from 'react-redux'

function SignIn() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [rememberMe, setRememberMe] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const noEmail = submitted && !email
  const noPassword = submitted && !password
  const dispatch = useDispatch()

  const handleChangeEmail = (event) => setEmail(event.target.value)
  const handleChangePassword = (event) => setPassword(event.target.value)
  const handleChangeRememberMe = () => setRememberMe(!rememberMe)

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(login(email, password, rememberMe))
    setSubmitted(true)
  }

  const auth = (state) => state.authReducer

  const authUser = useSelector(auth)
  console.log(authUser)
  console.log(authUser.error)

  return (
    <main className="main sign-in bg-dark">
      <section className="sign-in-content">
        <IconUser className="sign-in-icon" />
        <h1>Sign In</h1>
        <form action="" onSubmit={handleSubmit} id="sign-in-form">
          <div className="input-wrapper">
            <label htmlFor="email">Username</label>
            <input
              type="text"
              id="email"
              autoComplete="username"
              onChange={handleChangeEmail}
              value={email}
            />
            {noEmail && <small>Email is required</small>}
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handleChangePassword}
              value={password}
            />
            {noPassword && <small>Password is required</small>}
          </div>
          <div className="input-remember">
            <input
              type="checkbox"
              id="remember-me"
              onChange={handleChangeRememberMe}
            />
          </div>
          <label htmlFor="remember-me">Remember me</label>
          <input type="submit" value="Sign In" className="sign-in-button" />
        </form>
      </section>
    </main>
  )
}

export default SignIn
