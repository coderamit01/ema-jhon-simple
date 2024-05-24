import React from 'react';
import { useParams } from 'react-router-dom';
import Product from '../Product/Product';
import allProducts from "../../fakeData/products.json";
import './singleproduct.css'

const SingleProduct = () => {
  const {productId} = useParams();
  const product = allProducts.find(pd => pd.id === productId)
  return (
    <div>
      <div className="singleProduct">
        <Product showAddToCart={false} product={product}></Product>
      </div>
    </div>
  );
};

export default SingleProduct;