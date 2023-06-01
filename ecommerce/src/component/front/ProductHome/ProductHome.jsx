import React from 'react';
import NewsLetter from '../newsLetter/NewsLetter';
import Product from '../product/Product';
import ProductCarts from '../ProductCart/ProductCarts';
import ShoppingItems from '../ShoppingItems/ShoppingItems';

const ProductHome = ({data,handleAddCart,products}) => {
  return (
    <div>
         <Product />
         <ShoppingItems data={data}handleAddCart={handleAddCart}/>
         <ProductCarts products={products} handleAddCart={handleAddCart}/>
         <NewsLetter/>
    </div>
  )
}

export default ProductHome