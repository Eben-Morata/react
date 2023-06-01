import React from 'react';
import "./footer.css";
import Footer1 from './Footer1/Footer1';
import Footer2 from './footer2/Footer2';
import Footer3 from './footer3/Footer3';

const Footer = () => {
  return (
      <div className="footer">
        <div className='footer-container'>
         <div className="footer1">
             <Footer1 />
         </div>
         <div className="footer2">
             <Footer2 />
         </div>
         <div className="footer3">
             <Footer3 />
         </div>
    </div>
    <hr />
    <div className="copy">
      &copy;COPYRIGHT 2023
    </div>
      </div>
  )
}

export default Footer