import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.jpg'
import {assets} from '../../assets/assets'
const Navbar = () => {
  return (
    <div className='navbar'>
      <img className='logo' src={logo} alt="logoerror" />
      <img className='profile' src={assets.profile_image} alt="profileerror" />
    </div>
  )
}

export default Navbar
