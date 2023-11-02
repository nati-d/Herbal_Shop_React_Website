import React from 'react'
import Logo from '../assets/images/logo.jfif'
import { FiSearch,FiUser } from "react-icons/fi";
import { SlHandbag } from "react-icons/sl";
import '../assets/styles/navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
        <div className='logo'>
            <img src={Logo} alt='logo'/>
        </div>
        <div className='navlink-container'>
            <ul>
            <li>Home</li>
            <li>Shop</li>
            <li style={{fontSize:'18px'}}><FiSearch/></li>
            <li style={{fontSize:'18px'}}><FiUser/></li>
            <li style={{fontSize:'18px'}}><SlHandbag/></li>
            </ul>

        </div>
    </div>

  )
}

export default Navbar
