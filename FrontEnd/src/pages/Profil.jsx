import React, { useState } from 'react'
import Account from '../component/Account/Account'
import { accountData } from '../service/data'
import { user } from '../utils/store'
import Header from '../component/Header/Header'
import UpdateProfile from '../../src/component/UpdateProfile/UpdateProfile'

function Profil() {
  const [editProfile, setEditProfile] = useState(false)
  const HandleEditProfile = () => setEditProfile(true)

  return (
    <main className="main sign-in_profil bg-dark">
      {editProfile ? (
        <>
          <UpdateProfile
            setEditProfile={setEditProfile}
            editProfile={editProfile}
          />
          <h2 className="sr-only">Accounts</h2>
          {accountData.map((item) => (
            <Account
              key={item.id}
              title={item.title}
              amount={item.amount}
              description={item.description}
            />
          ))}
        </>
      ) : (
        <>
          <Header fullName={user} />
          <input
            className="edit-button"
            type="submit"
            value="Edit Name"
            onClick={HandleEditProfile}
          />
          <h2 className="sr-only">Accounts</h2>
          {accountData.map((item) => (
            <Account
              key={item.id}
              title={item.title}
              amount={item.amount}
              description={item.description}
            />
          ))}
        </>
      )}
    </main>
  )
}
export default Profil
