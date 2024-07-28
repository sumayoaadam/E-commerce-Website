import React from 'react';
import "./Hero.css";
import hand_icon from '../assetes/hand_icon.png'
import arrow_icon from '../assetes/arrow.png'
import hero_image from '../assetes/hero_image.png'

const Hero = () => {
  return (
    <div className='hero'>
      <div className="hero-left">
          <h2> NEW ARRIVALS ONLY</h2>
        <div>
           <div className="hand-hand-icon">
        <p>new</p>
        <img src={hand_icon} alt="" />
        </div>
        <p>Collection</p>
        <p>for everybody</p>
      </div>
      <div className="hero-latest-btn">
        <div>latest collection</div>
        <img src={arrow_icon} alt="" />
      </div>
    </div>
    <div className="hero-right">
       <img src={hero_image} alt="" />

    </div>
    </div>
  )
}


export default Hero
