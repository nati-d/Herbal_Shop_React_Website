import React from 'react'
import image1 from '../assets/images/image1.jpg'
import '../assets/styles/menus.css'
const Menus = () => {
  return (
    <div className='menus-container margin'>
      <div className='menus-cards'>
        <h3>Active Cream</h3>
        <div className='img-container'>
            <img src={image1} alt='image1'/>
        </div>
        <div className='bg'></div>
      </div>
      <div className='menus-cards' style={{height:'320px', width:'250px'}}>
        <h3 style={{marginBottom:0}}>Hemp Tincture</h3>
        <p>Our first and very beloved product </p>
        <p>you can order here </p>
        <div className='img-container' style={{aspectRatio:'1/0.9'}}>
            <img src={image1} alt='image1'/>
        </div>
        <div className='bg' style={{backgroundColor:'#6CA6B1'}}></div>
      </div>
      <div className='menus-cards'>
      <h3>CBD Skin Care</h3>

        <div className='img-container'>
            <img src={image1} alt='image1'/>
            
        </div>
        <div className='bg'></div>
      </div>
    </div>
  )
}

export default Menus
