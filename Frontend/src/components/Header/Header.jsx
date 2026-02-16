import React from 'react';
import './Header.css';
// import {assets} from '../../assets/header_img.png'; error due to { } 
import headerImg from '../../assets/header_img.png';

const Header = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className= 'header' id='header'>
            <img className="header-img" src={headerImg} alt="Header" />
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our mission is to satisfy your cravings and elevate your dining experience, one delicious meal at a time.</p>
        <button onClick={() => scrollToSection('explore-menu')}>View Menu</button>
      </div>
      
    </div>
  )
}

export default Header
