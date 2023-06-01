import React from 'react';
import { Link } from 'react-router-dom';
import "./footer2.css";

const Footer1 = () => {
  return (
    <div className='footer2-container'>
         <h2>USEFUL LINKS</h2>
         <div className="footer2-links">
           <Link exact to="/">Home</Link>
           <Link to="/cart">Cart</Link>
           <Link to="/accessories">Accessories</Link>
           <Link to="/myAccount">My Account</Link>
           <Link to="/register">Register</Link>
           <Link to="/signUp">LogIn</Link>
         </div>
    </div>
  )
}

export default Footer1