import React from 'react'
import './sect1.css';
import HeroImg from '../images/hero.svg';
import ProfilePic from '../images/profile.png';


const sect1 = () => {
  return (
    <div>
        <div className='sect1-container'>
            
            <div className="page-heading">
                <h1>Front-end Developer</h1>
                <div className="blurb">I enjoy turning beautiful designs into live web pages or apps!</div>
            </div>
            <div className="mr-handsome">
                <div className="profile-wrapper">
                    <img src={ProfilePic} alt="profile pic" />
                </div>
            </div>
            <div className="hero-img">
                <img src={HeroImg} alt="computers: desktop, laptop and mobile" />
            </div>
        </div>
        <div className="bottom-bar"></div>
    </div>
  )
}

export default sect1