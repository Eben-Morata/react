import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from '../navbar/Navbar';
import Cart from '../cart/Cart';
import Home from '../Home/Home';
import Register from '../Register/Register';
import SignUp from '../signup/SignUp'
import ProductHome from '../ProductHome/ProductHome';
import Footer from '../footer/Footer';

const Routes = ({data,cartItems,handleAddCart,
  products, handleRemoveCart,clearItems}) => {
  return (
    <div>
           <Home/>
          <Navbar cartItems={cartItems}/>
        <Switch>
            <Route path="/"exact>
              <ProductHome data={data} handleAddCart={handleAddCart}
              products={products}/>
            </Route>
            <Route path="/register"exact>
               <Register />
            </Route>
            <Route path="/signup"exact>
               <SignUp />
            </Route>
            <Route path="/cart">
                <Cart cartItems={cartItems} 
                handleAddCart={handleAddCart}
                handleRemoveCart={handleRemoveCart}
                clearItems={clearItems}/>
            </Route>
        </Switch>
        <Footer />
    </div>
  )
}

export default Routes