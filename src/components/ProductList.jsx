import React from 'react'
import "./ProductList.css"
import Products from './Products'
import { Projects } from './data'

const ProductList = () => {
  return (
    <div className='pl' id='examples_section'>
        <div className="pl-text">
            <h1 className="pl-title">Shit I have created recently</h1>
            <p className="pl-desc">
                in my time on Earth I have only created these..
            </p>
        </div>
        <div className="pl-list">
          {Projects.map((item) =>(
            <Products key={item.id} img={item.img} link={item.link}/>
          ))}
            
        </div>
    </div>
  )
}

export default ProductList