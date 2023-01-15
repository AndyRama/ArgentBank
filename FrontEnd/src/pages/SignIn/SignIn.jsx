import React from 'react'
import IconUser from '../../component/Icons/IconUser'
import './SignIn.scss'

function SignIn() {
  return (
    <section class="sign-in-content">
      <IconUser />
      <h1>Sign In</h1>
      <form>
        <div class="input-wrapper">
          <label for="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div class="input-wrapper">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div class="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>
      </form>
    </section>
  )
}
export default SignIn
