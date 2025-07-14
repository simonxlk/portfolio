import React from 'react'
import "./ProductList.css"
import Products from './Products'
import DesignCards from './DesignCards'
import { Projects } from './data'
import { designProjects } from './design_assets'
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
            <h1 className="pl-title">Hello</h1>
            <p className="pl-desc">
              I'm Simon — welcome to my portfolio. Here you'll find a selection of projects I've worked on in recent years.
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

            <div className="design-projects pl-list">
              <h2>Design projects</h2>
                <div className="pl-list">
                {designProjects.map((item) =>(
                  <div key={item.id}>
                    <motion.div whileHover={{scale:1.05}} whileTap={{scale: 0.95}}
                    className='modal-button' onClick={() => {setIsOpen(true); setBigData(item)}}>
                      <DesignCards img={item.img} shortName={item.shortName}/>
                    </motion.div>
                  </div>
                ))}
                </div>

            </div>

            <Modal open={isOpen} onClose={() => setIsOpen(false)}>
              <div className='view-normalise'>
                <div className='design_asset_container'>
                  <div className='asset_intro'>
                    <h1>{bigData.pname}</h1>
                    <p>{bigData.desc}</p>
                    {bigData.url ? <div className="blink">Visit <a href={bigData.url} target="_blank" rel="noreferrer">Live site <FiExternalLink /></a></div> : ""}
                  </div>
                  <div className='asset_image'>
                    <img src={bigData.lgimg} alt="large pic"/>
                  </div>
                  {Array.isArray(bigData.source_assets) && bigData.source_assets.length > 0 ? (
                  <div className='original_assets'>
                    <h3>Original Assets</h3>
                    <div className="source-gallery">
                      {bigData.source_assets.map((src, index) => (
                        <img key={index} src={src} alt={`asset-${index}`} className="source-image" />
                      ))}
                    </div>
                  </div>
                  ): null}
                </div>
              </div>
            </Modal>
          </div>
          
        </div>
        
    </div>
  )
}

export default ProductList