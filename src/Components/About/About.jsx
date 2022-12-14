import React from 'react'
import "./About.css"
import java from "../../Media/Java.png"
import node from "../../Media/Node.png"
import react from "../../Media/React.png"
import css from  "../../Media/css.png"
import html from  "../../Media/html.png"
import Foto from "../../Media/Foto2.png"

const About = () => {

    return (
        <div className='about-container'>
            <div className='about-desc'>
                <h3>Let me tell you something about me</h3>
                <p> I am a full stack developer, since I was a child I like everything that has to do with science and technology, I am a student of electronic engineering, I am currently in my third year.
                    I am from Argentina and with respect to programming I have knowledge in different technologies:</p>
                <picture className='container-picture'>
                    <div className='picture'><img src={java} alt="JavaScript"></img></div>
                    
                    <div className='picture'><img src={node} alt="node"></img></div>
                    
                    <div className='picture'><img src={react} alt="react"></img></div>
                    
                </picture>

                <picture className='container-picture2'>
                    <div className='picture'><img src={css} alt="css"></img></div>
                    
                    <div className='picture'><img src={html} alt="html"></img></div>
                    
                    
                    
                </picture>



            </div>
            <div className='about-img'>
                <a a href="https://github.com/Botsi1" target="_blank" rel="noreferrer"> <img
                    src={Foto}
                    alt="about"
                /></a>
               

            </div>


        </div>
    )
}

export default About
