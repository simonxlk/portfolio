import React from 'react';
import './intro.css';
import bigMe from "../images/pop_artv2_cropped.jpg";

const Intro = () => {
    return (
        <div className='i'>
            <div className='intro-left'>
                <div className='i-left-wrapper'>
                    <h2 className='intro-para'>Hi my name is:</h2>
                    <h1 className='intro-author'>Johny Boy</h1>
                    <div className='i-title'>
                        <div className='title-wrapper'>
                            <div className='title-item'>Developer</div>
                            <div className='title-item'>Designer</div>
                            <div className='title-item'>Editor</div>
                            <div className='title-item'>Writer</div>
                            <div className='title-item'>Developer</div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className='intro-right'>
                <img src={bigMe} alt="artistic me" className='mypic'/>
            </div>

        </div>
    )
}

export default Intro