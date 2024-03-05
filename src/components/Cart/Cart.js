import React from 'react';

const Cart = (props) => {
  const cart = props.cart;
  const total = cart.reduce((total,product) => total + product.price,0);
  let shipping = 0;

  if( total > 35){
    shipping = 5;
  } 
  else if (total > 15) {
    shipping = 4.99;
  } 
  else if (total > 0){
    shipping = 12.99;
  }
  return (
    <div>
      <h2 style={{backgroundColor:"green", padding: "8px", color: '#fff', borderRadius: "5px"}}>Order Summery</h2>
          <p>Items Ordered : {cart.length}</p>
          <p>Product Price: {total}</p>
          <p>Shipping Cost: {shipping}</p>
          <p>Tax / Vat Cost: </p>
          <p>Total Price: {total + shipping}</p>
    </div>
  );
};

export default Cart;