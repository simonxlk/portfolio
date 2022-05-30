import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css'
import MyLogo from '../images/logo.png';
import { FaHatCowboy } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdBuild } from 'react-icons/md';
import { MdMenu, MdClose } from 'react-icons/md';
import { useState } from 'react';
import { IoHome } from 'react-icons/io5'

const Navbar = () => {

    const [open, setOpen] = useState(false);
  return (
    <div className='nav-container'>
        <div className='top-bar-wrapper'>
            <div className="top-bar">
                <div className="top-left">
                    <img src={MyLogo} alt="logo" />
                </div>
                <div className="top-right">
                <div className="menu-btn" onClick={() => setOpen(!open)}><MdMenu /> <MdClose /></div>
                    <div className="menu-wrapper">
                        <div className="menu-items">
                            <li><Link to="/" className='link-item'>
                                <IoHome /> Home</Link>
                            </li>
                            <li><Link to="/skills" className='link-item'>
                                <FaHatCowboy /> Skills</Link>
                            </li>
                            <li><Link to="/projects" className='link-item'>
                                <MdBuild /> Projects</Link>
                            </li>
                            
                            <li><Link to="/contact" className='link-item'>
                                <MdOutlineAlternateEmail /> Contact</Link>
                            </li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar