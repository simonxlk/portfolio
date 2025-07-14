import React from 'react'
import "./Products.css"



const Products = ({img, pname}) => {

  return (
    <div>
      <div className='itemBox'>
            <img src={img} alt={pname} className='p-img' />
            <div className='box-text'>
              <p className='item-disc'>{pname}</p>
            </div>
      </div>
       
    </div>
  )
}

export default Products