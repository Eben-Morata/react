import React from 'react';
import "./cart.css";

const Cart = ({cartItems,handleAddCart,
  handleRemoveCart,clearItems}) => {

    const totalPrice = cartItems.reduce((price,items)=> price + items.quantity * items.price,
    0);
  return (
    <div className='cart-container'>
       <div className="cart-title">Your Cart Items</div>
       <div className="clear">
         {cartItems.length >= 1 &&(
           <button onClick={clearItems}>Clear Items</button>
         )}
       </div>
       {cartItems.length === 0 && (<div className='empty-cart'>
         No Cart Items added
       </div>)}
       {cartItems.map((items,index)=>{
          return(
            <div key={index} className='carts'>
                 <img src={items.img} alt={items.header} />
                  <div className="carts-title">
                     <h2>{items.name}</h2>
                  </div>
                    <div className="carts-price">
                     <p>{items.quantity} * ${items.price}</p>
                  </div>
                  <div className="carts-buttons">
                     <button onClick={()=>handleAddCart(items)}>+</button>
                     <button onClick={()=>handleRemoveCart(items)}>-</button>
                  </div>
            </div> 
          )
       })}
       <div className="totalPrice">
           Total:
           <div className="totalCart">${totalPrice}</div>
       </div>
    </div>
  )
}

export default Cart