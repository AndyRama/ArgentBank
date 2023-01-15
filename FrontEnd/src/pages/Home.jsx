import React from 'react'
import Feature from '../component/Feature/Feature'
import { featureData } from '../service/data'
import Hero from '../component/Hero/Hero'

function Home() {
  return (
    <main className="main-home">
      <Hero />
      {featureData.map((item) => (
        <Feature
          key={item.id}
          src={item.icon}
          alt={item.alt}
          text={item.text}
        />
      ))}
    </main>
  )
}

export default Home
