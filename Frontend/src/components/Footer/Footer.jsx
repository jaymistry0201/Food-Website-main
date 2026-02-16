import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="QuickBites Logo" />
          <p>QuickBites brings your favorite meals from the best local restaurants straight to your doorstep. Fresh ingredients, lightning-fast delivery, and unbeatable taste – all in one tap. Discover new flavors or stick to your classics; we’ve got every craving covered.</p>
          
          <div className="footer-social-icons">
            <a
              href="https://www.facebook.com/quickbites"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.facebook_icon} alt="Facebook" />
            </a>
            <a
              href="https://www.twitter.com/quickbites"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.twitter_icon} alt="Twitter" />
            </a>
            <a
              href="https://www.linkedin.com/company/quickbites"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={assets.linkedin_icon} alt="LinkedIn" />
            </a>
          </div>
        </div>

        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li onClick={() => scrollToSection('header')} style={{ cursor: 'pointer' }}>Home</li>
            <li onClick={() => scrollToSection('explore-menu')} style={{ cursor: 'pointer' }}>About Us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@quickbites.com</li>
          </ul>
        </div>
      </div>

      <hr />

      <p className="footer-copyright">
        Copyright 2024 @quickbites.com . All Rights Reserved
      </p>
    </div>
  )
}

export default Footer
