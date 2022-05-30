import React from 'react'
import "./Products.css"

const Products = ({img, link, pname}) => {
  return (
    <div className='itemBox'>
        <div className="p-browser">
          <div className="p-circle"></div>
          <div className="p-circle"></div>
          <div className="p-circle"></div>
        </div>
        <a href={link} target="_blank" rel="noreferrer">
          <img src={img} alt="yo" className='p-img' />
          <p className='item-disc'>{pname}</p>
        </a>
    </div>
  )
}

export default Products