import React from "react";
import "./Slider.css";
import henry from "../../Media/home1.png"
import Appgames from "../../Media/Background.png"
import youtube from "../../Media/youtube.png"

const slidesInfo = [
  {
    src:
    henry,
    alt: "Project 1",
    desc: "Henry Bienes Raices",
    link: "https://henrybienesraices.vercel.app/"

  },
  {
    src:
      Appgames,
    alt: "Project 2",
    desc: "Videogames APP",
    link:"https://github.com/Botsi1/PI"
  },
  {
   src: youtube,
   alt:"Project 3",
   desc:"Youtube Clone",
   link:"https://videotube-phi.vercel.app/"
  }

];


const slides = slidesInfo.map(slide =>{
  return(
    <a href={slide.link} target="_blank" rel="noreferrer" className={"slide-container"}>
        <img className="img" src={slide.src} alt={slide.alt} />
        <div className="slide-desc">
            <span>
                {slide.desc}
            </span>

        </div>
    </a>

  )
    
})

export default slides