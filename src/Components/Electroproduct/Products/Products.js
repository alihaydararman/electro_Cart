import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Product from '../Product/Product';
import './Products.css';

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch('http://localhost:9000/products')
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  return (
    <div className='pbody'>
      <div className='container py-5'>
        <h2 className='heading-main'>Popular Products</h2>
        <Row sm={1} md={2} lg={3} className='g-4 mt-4'>
          {products.slice(0, 6).map((product) => (
            <Product key={product.id} product={product}></Product>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Products;
