import React, { useEffect, useState } from 'react';
import { deleteShoppingCart, getShoppingCart, removeFromDb } from '../../utilities/fakedb';
import fakedata from "../../fakeData/products.json";
import Reviewitem from './Reviewitems/Reviewitem';
import Cart from '../Cart/Cart';
import './review.css';
import { Link } from 'react-router-dom';
import orderImage from '../../images/giphy.gif';

const Review = () => {
  const [cart, setCart] = useState([]);

  const removeProduct = (id) => {
    const newCart = cart.filter(pd => pd.id !== id)
    setCart(newCart);
    removeFromDb(id);
  }
  const [placeOrder, setPlaceOrder] = useState(false);
  const handlePlaceOrder = () => {
    setCart([]);
    setPlaceOrder(true);
    deleteShoppingCart();
  }

  useEffect(()=>{
    const saveCart = getShoppingCart();
    const productKeys = Object.keys(saveCart)

    const cartProducts = productKeys.map(key => {
        const product = fakedata.find(pd => pd.id === key)
        product.quantity = saveCart[key]
        return product;
      })
      setCart(cartProducts);
  },[]);
  let thankyou;
  if(placeOrder){
    thankyou = <img src={orderImage} alt="orderImage" />
  }
  return (
    <div>
      <div className="review-container">
        <div className="">
          {
          cart.map(pd => <Reviewitem removeProduct={removeProduct} product={pd} key={pd.id}></Reviewitem>)
          }
          {
            thankyou
          }
        </div>
        <Cart cart={cart}>
        <Link to='/review'>
              <button onClick={handlePlaceOrder} className='cart-btn' style={{width: '100%'}}>Place Order</button>
            </Link>
        </Cart>
      </div>
      
      
    </div>
  );
};

export default Review;