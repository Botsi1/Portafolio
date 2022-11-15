import React from 'react'
import "./Footer.css"
import git from "../../Media/Git.png"

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='hola'>
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
                        <a href="https://github.com/Botsi1" target="_blank" rel='noreferrer'>
                            <i className='fab fa-github github'></i>
                        </a>
                    </div>
                </div>

            </div>


        </footer>

    )
}

export default Footer