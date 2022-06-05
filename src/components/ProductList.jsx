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
          <div className="box-container">
            <h2>Development projects</h2>
            <div className="pl-list">
              {Projects.map((item) =>(
                <Products key={item.id} img={item.img} link={item.link} pname={item.pname}/>
              ))}
                
            </div>

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