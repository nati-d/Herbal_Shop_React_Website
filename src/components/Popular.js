import React from 'react'
import '../assets/styles/popular.css'
import image1 from '../assets/images/image1.jpg'

const Popular = () => {
  return (
    <div className='popular-container'>
        <h1>Our Popular Products</h1>
        <div className='popular-card-container'>
      <div className='popular-card'>
        <h4>This is My first product Guys please order me</h4>
        <div className='image' >
            <img src={image1} alt='image1'/>
        </div>
        <button>Buy Now</button>
      </div>
      <div className='popular-card'>
        <h4>This is My first product Guys please order me</h4>
        <div className='image' >
            <img src={image1} alt='image1'/>
        </div>
        <button>Buy Now</button>
      </div>
      <div className='popular-card'>
        <h4>This is My first product Guys please order me</h4>
        <div className='image' >
            <img src={image1} alt='image1'/>
        </div>
        <button>Buy Now</button>
      </div>
      <div className='popular-card'>
        <h4>This is My first product Guys please order me</h4>
        <div className='image' >
            <img src={image1} alt='image1'/>
        </div>
        <button>Buy Now</button>
      </div>
      <div className='popular-card'>
        <h4>This is My first product Guys please order me</h4>
        <div className='image' >
            <img src={image1} alt='image1'/>
        </div>
        <button>Buy Now</button>
      </div>
      <div className='popular-card'>
        <h4>This is My first product Guys please order me</h4>
        <div className='image' >
            <img src={image1} alt='image1'/>
        </div>
        <button>Buy Now</button>
      </div>
      </div>
    </div>
  )
}

export default Popular
