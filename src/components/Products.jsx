import React from 'react'
import "./Products.css"

const Products = ({img, link}) => {
  return (
    <div className='itemBox'>
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="yo" className='p-img' />
        </a>
    </div>
  )
}

export default Products