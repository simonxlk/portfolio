import React from 'react'
import './sect1.css';
import MyLogo from '../images/logo.png';
import { HiMenu } from "react-icons/hi";
import { FaHourglassHalf } from "react-icons/fa";
import { FaHatCowboy } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";

const sect1 = () => {
  return (
    <div className='sect1-container'>
        <div className='top-bar-wrapper'>
            <div className="top-bar">
                <div className="top-left">
                    <img src={MyLogo} alt="logo" />
                </div>
                <div className="top-right">
                    <div className="menu-wrapper">
                        <div className="menu-btn"><HiMenu /></div>
                        <ul className="menu-items">
                            <li><a href="#skills_section" className='link-item'><FaHatCowboy /> <span className='text-gap'>Skills</span></a></li>
                            <li><a href="#examples_section" className='link-item'><FaHourglassHalf /> <span className='text-gap'>Recent Work</span></a></li>
                            <li><a href="#contact" className='link-item'><MdOutlineAlternateEmail /> <span className='text-gap'>Contact</span></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div className="page-heading">
            <h1>Front-end Developer &amp; Designer</h1>
            
        </div>
    </div>
  )
}

export default sect1