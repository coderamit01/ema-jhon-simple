import React from 'react';
import './reviewitem.css'

const Reviewitem = (props) => {
  const {img,name,price,qty,id} = props.product;
  return (
    <div>
      <div className="review-product">
      <div className="review-img">
        <img src={img} alt="Product Image" />
      </div>
      <div className="review-details">
        <h4>{name}</h4>
        <p>Price: {price}</p>
        <p>Quantity: {qty}</p>
        <button onClick={() =>props.removeProduct(id)} className='cart-btn'>Remove</button>
      </div>
      </div>

    </div>
  );
};

export default Reviewitem;