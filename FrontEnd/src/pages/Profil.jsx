import React, { useState } from 'react'
import Account from '../component/Account/Account'
import { accountData } from '../service/data'
import { user } from '../utils/store'

function Profil() {
  return (
    <main className="main sign-in_profil bg-dark">
      <h2 className="sr-only">Accounts</h2>
      {accountData.map((item) => (
        <Account
          key={item.id}
          title={item.title}
          amount={item.amount}
          description={item.description}
        />
      ))}
    </main>
  )
}
export default Profil