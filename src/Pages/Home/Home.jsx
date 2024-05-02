import React from 'react'
import './Home.css'
import Navbar from '../../Components/Navbar/Navbar'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
function Home() {
  return (
    <div className='home'>
    <Navbar/>
     <div className='hero'>
      <img src={hero_banner} alt="" className='banner-img' />
      <div className='hero-caption'>
        <img src={hero_title} alt="" className='caption_img' />
        <p>Discovering his ties to a secret anciet order, a young man living in modern istanbul embarks on a quest to save the city from an immortal enemy. </p>
        <div className='hero-btns'>
          <button className='btn'>
            <img src={play_icon} alt="" />Play
          </button>
          <button className='btn dark-btn'>
            <img src={info_icon} alt="" />
          More info</button>
        </div>
      </div>
     </div>
    </div>
  )
}

export default Home