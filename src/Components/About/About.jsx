import React from 'react'
import "./About.css"
import java from "../../Media/Java.png"
import node from "../../Media/Node.png"
import react from "../../Media/React.png"
import css from  "../../Media/css.png"
import html from  "../../Media/html.png"

const About = () => {

    return (
        <div className='about-container'>
            <div className='about-desc'>
                <h3>Let me tell you something about ame</h3>
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
                <img
                    src="https://cdn.pixabay.com/photo/2015/01/08/18/29/entrepreneur-593358_960_720.jpg"
                    alt="about"
                />

            </div>


        </div>
    )
}

export default About