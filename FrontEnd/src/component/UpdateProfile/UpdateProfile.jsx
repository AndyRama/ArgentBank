import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newProfile } from '../../_store/middlewares/userMiddleware'
// import './UpdateProfile.scss'

import Profil from '../../pages/Profil'

/**
 * Render the UpdateProfile component
 * @param   {object} props
 * @returns {Reactnode} jsx injected in DOM
 */

export default function User(props) {
  useEffect(() => {
    document.title = 'Argent Bank | Update Profile'
  }, [])

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  // eslint-disable-next-line no-unused-vars
  const [changeProfile, setChangeProfile] = useState(false)

  const handleChangeFirstName = (event) => setFirstName(event.target.value)
  const handleChangeLastName = (event) => setLastName(event.target.value)
  const HandleEditProfile = () => {
    props.setEditProfile(false)
    setFirstName('')
    setLastName('')
  }

  const noFirst = changeProfile && !firstName
  const noLast = changeProfile && !lastName

  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    if (firstName && lastName) {
      dispatch(newProfile(firstName, lastName))
    }
    setChangeProfile(true)
  }

  // const user = (state) => state.userReducer;
  const user = (state) => state.authReducer
  const currentUser = useSelector(user)
  console.log(currentUser) // {isAuth, token, user} for userReducer && authReducer

  return (
    <>
      {props.editProfile ? (
        <section className="update-profile-content header">
          <h1 className="title-update">Welcome back</h1>
          <form action="" onSubmit={handleSubmit} id="update-profile-form">
            <div className="input-wrapper-name">
              <input
                type="text"
                id="firstName"
                value={firstName}
                placeholder={currentUser.firstName}
                onChange={handleChangeFirstName}
              />
              <input
                type="text"
                id="lastName"
                value={lastName}
                placeholder={currentUser.lastName}
                onChange={handleChangeLastName}
              />
            </div>

            {noFirst && <span className="first">First name is required</span>}
            {noLast && <span className="last">Last name is required</span>}

            <div className="input-wrapper-btn">
              <input type="submit" value="Save" id="save" />
              <input
                type="button"
                value="Cancel"
                id="cancel"
                onClick={HandleEditProfile}
              />
            </div>
          </form>
        </section>
      ) : (
        <Profil />
      )}
    </>
  )
}
