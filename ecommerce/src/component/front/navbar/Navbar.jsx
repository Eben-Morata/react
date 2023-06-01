import React,{useState} from 'react';
import {AiOutlineDownCircle, AiOutlineSearch, AiOutlineShoppingCart} from 'react-icons/ai';
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom';
import "./navbar.css";

const Navbar = ({cartItems}) => {
  const [navMenu, setNavMenu] = useState(false);
  
  const handleNavMenu=()=>{
     setNavMenu(!navMenu)
  }
  return (
    <div className='navbar'>
      <div className="input">
         <div className="lang">
           EN <AiOutlineDownCircle/>
         </div>
         <input type="text" placeholder='Search...' />
         <AiOutlineSearch className='search'/>
      </div>
      <div className="logo">
      <Link to="/">Eben..</Link>
      </div>
         <div className="links">
          <ul id='nav-bar' className={navMenu ? "#nav-bar active":"#nav-bar"}>
         <li> <Link to="/register">Register</Link></li>
         <li> <Link to="/signup">SignUp</Link></li>
        <li> <Link to="/cart"><AiOutlineShoppingCart className='icon'/></Link></li>
             <span className="num">{
               cartItems.quantity === 0 ? "0" : cartItems.length
             }</span>
          </ul>
         </div>
         <div className="menu" onClick={handleNavMenu}>
          {navMenu ? <FaTimes className='menuIcon'/> : <FaBars className='menuIcon'/>}
         </div>
    </div>
  )
}

export default Navbar