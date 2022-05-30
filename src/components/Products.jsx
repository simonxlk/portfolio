import React from 'react'
import "./Products.css"
import {MdDoubleArrow} from 'react-icons/md'

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
          <div className="text-screen">
            <p className='item-disc'>{pname}
            <span className='p-arrow'>Visit site <MdDoubleArrow /></span></p>
          </div>
        </a>
    </div>
  )
}

export default Products