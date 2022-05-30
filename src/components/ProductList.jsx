import React from 'react'
import "./ProductList.css"
import Products from './Products'
import { Projects } from './data'

const ProductList = () => {
  return (
    <div className='pl' id='examples_section'>
        <div className="pl-text">
            <h1 className="pl-title">My recent work</h1>
            <p className="pl-desc">
                Some of my work across design and development..
            </p>
        </div>
        <div className="project-container">
          <div className="project-half">
            <h2>Development projects</h2>
          <div className="pl-list">
            {Projects.map((item) =>(
              <Products key={item.id} img={item.img} link={item.link} pname={item.pname}/>
            ))}
              
          </div>
          </div>
          <div className="project-half">
              <h2>Design projects</h2>
              <div className="link-box">
                <div className='bg-img'>
                    <img src="https://portfolio-3e62a.web.app/images/preview/design.jpg" alt="design img" />
                </div>
                <a href="https://portfolio-3e62a.web.app/graphics.html" target="_blank" rel="noreferrer">
                  <div className="shadow">
                    <p>Static Designs</p>
                  </div>
                </a>
              </div>

              <div className="link-box">
                <img src="https://portfolio-3e62a.web.app/images/preview/animated-banners.jpg" alt="animated banners" />
                <a href="https://portfolio-3e62a.web.app/animation.html" target="_blank" rel="noreferrer">
                  <div className="shadow">
                    <p>Animated banners</p>
                  </div>
                </a>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default ProductList