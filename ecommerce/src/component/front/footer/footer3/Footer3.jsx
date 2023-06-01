import React from 'react';
import "./footer3.css";
import {FaLocationArrow, FaMailBulk, FaPhone} from 'react-icons/fa'

const Footer3 = () => {
  return (
    <div className='footer3-container'>
           <div className="foot3-title">
                <h2>CONTACT</h2>
                <div className="details">
                     <FaLocationArrow className='details-icon'/>
                     <span className="text">619 4th floor Accra Street</span><br/>
                     <FaPhone className='details-icon'/>
                     <span className="text1">+(233)556408910</span><br/>
                     <FaMailBulk className='details-icon'/>
                     <span className="text2">info@Eben.com</span>
                </div>
           </div>
    </div>
  )
}

export default Footer3