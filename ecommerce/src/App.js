import React ,{useState}from 'react';
import Routes from './component/front/routes/Routes';
import data from './component/back/data';
import products from './component/back/productData';

function App() {
  const [cartItems, setCartItems] = useState([]);

const handleAddCart=(product)=>{
  const productCart = cartItems.find((item)=> item.id === product.id);
  if (productCart) {
    setCartItems(cartItems.map((item)=>item.id === product.id ?
    {...productCart,quantity:productCart.quantity + 1}: item))
  } else{
    setCartItems([...cartItems,{...product,quantity : 1}])
  }
}

const handleRemoveCart=(product)=>{
  const productCart = cartItems.find((item)=> item.id === product.id);
  if (productCart.quantity === 1) {
    setCartItems(cartItems.filter((item)=> item.id !== product.id))
  }else{
    setCartItems(cartItems.map((item)=>item.id === product.id ?
    {...productCart,quantity:productCart.quantity - 1}:item))
  }
}

const clearItems=()=>{
  setCartItems([]);
}

  return (
    <div className="App">
        <Routes cartItems={cartItems}
          data={data} handleAddCart={handleAddCart}
          products={products} handleRemoveCart={handleRemoveCart}
          clearItems={clearItems}/>
    </div>
  );
}

export default App;
