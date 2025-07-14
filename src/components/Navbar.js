import React from 'react'
import {Link} from 'react-router-dom';
import './navbar.css'
import MyLogo from '../images/ob-logo.png';
import { FaHatCowboy } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { MdBuild } from 'react-icons/md';
import { MdMenu, MdClose } from 'react-icons/md';
import { IoHome } from 'react-icons/io5';
import { useState, useEffect, useRef } from 'react';

const Navbar = () => {

    const [showNav, setShowNav] = useState(false);
    //close the menu by clicking outside
    let menuRef = useRef();
    useEffect(() => {
        let handler = (event) =>{
            if (!menuRef.current.contains(event.target)){
                setShowNav(false);
            }
        };
        let myClick = (e) =>{
            if (menuRef.current.contains(e.target)){
                setShowNav(false);
            }
        };

        document.addEventListener('mousedown', handler);
        document.addEventListener('click', myClick);
        //remove the event
        return () => {
            document.removeEventListener('mousedown', handler);
            document.removeEventListener('click', myClick);
        };
    });

  return (
    <div className='nav-container'>
        <div className='top-bar-wrapper'>
            <div className="top-bar">
                <div className="top-left">
                    <div className="logo-container">
                        <Link to="/">
                            <img src={MyLogo} alt="logo made from my innitials" />
                        </Link>
                    </div>
                </div>
                <div ref={menuRef} className="top-right">
                    <div className="menu-btn" onClick={() => setShowNav(!showNav)}>{showNav? <MdClose /> :<MdMenu />}
                    </div>
                    <div className="menu-wrapper">
                        <div className="menu-items">
                            
                            <li><Link to="/" className='link-item'>
                                <MdBuild /> Projects</Link>
                            </li>
                            
                            <li><Link to="/contact" className='link-item'>
                                <MdOutlineAlternateEmail /> Contact</Link>
                            </li>
                        </div>
                    </div>
                    {showNav? <div className="mobile-menu">
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
                    </div>: null}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar