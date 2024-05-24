import React from 'react';
import './product.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCartPlus, faChartLine } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

library.add(faCartPlus); // Add the icon to the library




const Product = (props) => {
  const {img,name,seller,price,stock,id} = props.product;
  return (
    <div className='product'>
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <div className="product-dt">
        <h3 className='product-title'><Link to={"/product/" + id}>{name}</Link></h3>
        <p>By: {seller}</p>
        <p><span>$</span>{price}</p>
        <p>Only left in <span>{stock}</span> in Stock</p>
        <div className="product-btn">
          {props.showAddToCart && <button className='cart-btn' onClick={() => props.addProduct(props.product)}>
          <FontAwesomeIcon icon={faCartPlus} /> Add to Cart</button>}
        </div>
      </div>
    </div>
  );
};

export default Product;