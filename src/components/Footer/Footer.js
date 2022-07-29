import React from 'react';
import './Footer.css'

const Footer = () => (
  <footer className='footer'>
    <a
      href='https://github.com/rajshekhar26/cleanfolio'
      className='link footer__link'
    >
      &copy; 2022 - {new Date().getFullYear()}
    </a>
  </footer>
)

export default Footer
