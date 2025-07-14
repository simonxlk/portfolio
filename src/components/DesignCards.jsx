import React from 'react'
import "./DesignCards.css"



const designCards = ({img, shortName}) => {

  return (
    <div>
      <div className='designBox'>
            <img src={img} alt={shortName} className='p-img' />
            <div className='design-text'>
              <p className='design-disc'>{shortName}</p>
            </div>
      </div>
       
    </div>
  )
}

export default designCards