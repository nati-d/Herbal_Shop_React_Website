import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Menus from '../components/Menus'
import Popular from '../components/Popular'
import Newsletter from '../components/Newsletter'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero />
      <Menus/>
      <Popular/>
      <Newsletter/>
    </div>
  )
}

export default Home
