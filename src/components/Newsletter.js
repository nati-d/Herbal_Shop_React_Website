import React from 'react'
import '../assets/styles/newsletter.css'
import image2 from '../assets/images/image 2.jpg'
import image4 from '../assets/images/image 4.jfif'

const Newsletter = () => {
  return (
    <div className='newsletter-container margin'>
      <div className='left'>
        <div className='img-container'>
            <img src={image2} alt='image2'/>
        </div>
        <img src={image4} className='splash'/>
      </div>
      <div className='right'>
        <h4>Subscribe</h4>
        <h2>Our Newsletter</h2>
        <p>To get updated and latest information as soon as possible</p>
        <div className='email-box'>
            <input type='text' placeholder='Your Email Here'/>
            <button>Send</button>
        </div>
      </div>
    </div>
  )
}

export default Newsletter
