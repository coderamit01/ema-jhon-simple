import React, { useState, useEffect } from 'react';
import './shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
    .then(res => res.json())
    .then(data => {
      const first10 = data.slice(0,10);
      setProducts(first10);
      })
  }, []);

  const handleAddProduct = (product) =>{
    const newCart = [...cart, product];
    setCart(newCart);
  }

  return (
    <div>
      <div className="product-container">
        <div className="products">
          {products.map(pd => <Product addProduct={handleAddProduct} product={pd}></Product>)}
        </div>
        <div className="cart-container">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
};

export default Shop;
