import React from 'react';
import "./footer1.css";
import {FaFacebook, FaGithub, FaTwitter, FaYoutube} from 'react-icons/fa'

const Footer1 = () => {
  return (
    <div className='footer1-container'>
        <div className="foot1-title">
            <h2>EBEN...</h2>
        </div>
        <div className="foot1-content">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Dolorem sapiente ducimus repellendus 
              architecto accusantium ab natus sunt? Non, tempora ipsa?</p>
        </div>
        <div className="foot1-social">
             <FaFacebook className='social'/>
             <FaGithub className='social'/>
             <FaTwitter className='social'/>
             <FaYoutube className='social'/>
        </div>
    </div>
  )
}

export default Footer1