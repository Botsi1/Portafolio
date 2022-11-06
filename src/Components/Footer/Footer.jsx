import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <footer className='footer'>
        <div className='footer-info'>
            <h1>Bautista</h1>
            <p>Argentina</p>
        </div>
        <div className='footer-contact'>
            <h3>Contact me</h3>
            <p>And let's get down to work</p>
        </div>
        <div className=' footer-sns'>
            <div className='design-by'> Design By Botsi</div>
            <div className='sns-links'>
                <a href="https://www.linkedin.com/in/bautista-moreiro/" target="_blank" rel='noreferrer'>
                    <i className='fab fa-linkedin linkedin'></i>
                </a>
            </div>
        </div>

    </footer>
 
  )
}

export default Footer