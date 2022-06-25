import React from 'react'
import './sect1.css';
import HeroImg from '../images/hero.svg';
import ProfilePic from '../images/profile.png';
import {Link} from 'react-router-dom';
import { MdBuild } from 'react-icons/md';
import { FaHatCowboy } from "react-icons/fa";


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

            <div className="key-links">
                <div className="home-link-box">
                    <Link to="/projects" className='home-link'>
                        <MdBuild /> Projects
                    </Link>
                </div>
                <div className="home-link-box">
                    <Link to="/skills" className='home-link'>
                        <FaHatCowboy /> Skills
                    </Link>
                </div>
            </div>
            <div className="hero-img">
                <img src={HeroImg} alt="computers: desktop, laptop and mobile" />
            </div>
        </div>
        <div className="bottom-bar">
        </div>
    </div>
  )
}

export default sect1