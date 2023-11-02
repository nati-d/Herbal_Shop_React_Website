import React from 'react'
import '../assets/styles/hero.css'
import image1 from '../assets/images/image1.jpg'
const Hero = () => {
  return (
    <div className='hero-container'> 
      <div className='hero-text'>
        <h3>We help with</h3>
        <h1>Wild Lotus CBD</h1>
        <p>Lorem ipsum, in graphical and textual context, refers to filler text al and textual context, refers to filler tex that is </p>
        <div className='hero-btns'>
            <button>Get Started</button>
            <button>Shop Now</button>
        </div>
      </div>
    </div>
  )
}

export default Hero
