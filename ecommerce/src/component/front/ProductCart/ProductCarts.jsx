import React from 'react';
import "./productCarts.css";
import {FaSearch, FaShoppingCart} from 'react-icons/fa';
import {AiFillLike} from 'react-icons/ai'

const ProductCarts = ({products,handleAddCart}) => {
  return (
    <div className='product-container'>
        <div className="product-title">
            <h2>Products Available</h2>
        </div>
        <div className="prods">
            {products.map((item)=>{
                return(
                    <div key={item.id} className='prods-cards'>
                          <img src={item.img} alt="item" />
                          <div className="overlay">
                              <div className="description">
                                  <h2>{item.name}</h2>
                                     <div className="shop-cart">
                                         <FaShoppingCart className='react-icon'onClick={()=>handleAddCart(item)}/>
                                         <FaSearch className='react-icon'/>
                                         <AiFillLike className='react-icon'/>
                                     </div>
                              </div>
                          </div>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default ProductCarts