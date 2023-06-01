import React from 'react';
import "./shoppingItem.css";

const ShoppingItems = ({data,handleAddCart}) => {
  return (
    <div className='items-container'>
        <div className="items">
            <h2>Shopping Items</h2>
        </div>
           <div className="items-cart">
           {data.map((item)=>{
            return(
            <div className='item-card' key={item.id}>
                <img src={item.img} alt="item" />
                <div className="over"></div>
                <div className="item-content">
                     <h2>{item.name}</h2>
                     <button onClick={()=>handleAddCart(item)}>Add to Cart</button>
                </div>
            </div>
            )
        })}
           </div>
    </div>
  )
}

export default ShoppingItems