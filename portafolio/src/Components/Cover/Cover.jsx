import React from 'react'
import coverVideo from "../../Media/coverVideo.mp4"
import "./Cover.css"

const Cover = () => {
  return (
    <div className='cover-container'>
        <video className='video' src={coverVideo} autoPlay loop muted></video>
        <h1>Bautista Moreiro</h1>
        <p>Developer | Designer </p>
    </div>
  )
}

export default Cover