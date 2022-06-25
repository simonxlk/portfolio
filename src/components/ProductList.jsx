import React from 'react'
import "./ProductList.css"
import Products from './Products'
import { Projects } from './data'
import { motion } from "framer-motion";
import Modal from './Modal'
import { useState } from 'react';
import {FiExternalLink} from 'react-icons/fi'


const ProductList = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [bigData, setBigData] = useState('text');

  return (
    <div className='pl' id='examples_section'>
        <div className="pl-text">
            <h1 className="pl-title">My recent work</h1>
            <p className="pl-desc">
                Some of my work across design and development..
            </p>
        </div>
        <div className="project-container">
          <div className="box-container">
            <h2>Development projects</h2>
            <div className="pl-list">
              {Projects.map((item) =>(
                <div key={item.id}>
                  <motion.div whileHover={{scale:1.05}} whileTap={{scale: 0.95}}
                  className='modal-button' onClick={() => {setIsOpen(true); setBigData(item)}}>
                    <Products img={item.img} link={item.link} pname={item.pname}/>
                  </motion.div>
                </div>
              ))}
                
            </div>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              <div className="pic-view">
                <img src={bigData.lgimg} alt="large image"/>
              </div>
              <div className='mtext-view'>
                <h1>{bigData.pname}</h1>
                <p>{bigData.desc}</p>
                <div className="blink">Visit <a href={bigData.link} target="_blank" rel="noreferrer">Live site <FiExternalLink /></a></div>
              </div>
            </Modal>

            <div className="design-projects pl-list">
              <h2>Design projects</h2>
                <div className="link-box">
                  <img src="https://portfolio-3e62a.web.app/images/preview/design.jpg" alt="design img" />
                
                    <div className="shadow">
                      <p>Banners and graphics</p>
                      <a href="https://portfolio-3e62a.web.app/graphics.html" target="_blank" rel="noreferrer">
                        <div className='p-arrow'>open page</div>
                      </a>
                    </div>
                </div>

                <div className="link-box">
                  <img src="https://portfolio-3e62a.web.app/images/preview/animated-banners.jpg" alt="animated banners" />
                  
                    <div className="shadow">
                      <p>Animated banners</p>
                      <a href="https://portfolio-3e62a.web.app/animation.html" target="_blank" rel="noreferrer">
                        <div className='p-arrow'>open page</div>
                      </a>
                    </div>
                </div>
            </div>
          </div>
          
        </div>
        
    </div>
  )
}

export default ProductList