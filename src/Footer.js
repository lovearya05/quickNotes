import React from 'react'

const Footer = () => {

const year = new Date().getFullYear();

  return (
    <footer>
    <p className='footer'>copyright &copy; {year}</p>
    </footer>
    
  )
}

export default Footer