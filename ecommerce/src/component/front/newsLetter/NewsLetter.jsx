import React from 'react';
import "./newsLetter.css";
import {AiOutlineSend} from 'react-icons/ai'

const NewsLetter = () => {
  return ( 
    <div className='newsletter'>
           <div className="news-title">
               <h2>NewsLetter</h2>
               <p>Get timely Updates from your favorite Products.</p>
           </div>
           <div className="news-input">
             <input type="email" placeholder='Your Email' />
             <AiOutlineSend className='react-icons'/>
           </div>
    </div>
  )
}

export default NewsLetter