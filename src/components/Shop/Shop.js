import React, { useState, useEffect } from 'react';
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import allProducts from "../../fakeData/products.json";
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { Link } from 'react-router-dom';



const Shop = () => {
  const [cart, setCart] = useState([]);
  const products = allProducts;

  useEffect(() => {
    const saveCart = getShoppingCart();
    const productKeys = Object.keys(saveCart);
    const previousCart = productKeys.map(existingKey => {
      const product = allProducts.find(pd => pd.id === existingKey);
      product.quantity = saveCart[existingKey];
      return product;
    })
    setCart(previousCart);
    console.log(productKeys)
  },[])

  const handleAddProduct = (product) =>{
    const newCart = [...cart, product];
    setCart(newCart);
    const sameProduct = newCart.filter(pd => pd.id === product.id)
    const count = sameProduct.length;
    addToDb(product.id, count);
  }

  return (
    <div>
      <div className="product-container">
        <div className="products">
          {products.map(pd => <Product showAddToCart={true} addProduct={handleAddProduct} product={pd} key={pd.id}></Product>)}
        </div>
        <div className="cart-container">
          <Cart cart={cart}>
            <Link to='/review'>
              <button className='cart-btn' style={{width: '100%'}}>Order Review</button>
            </Link>
          </Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
