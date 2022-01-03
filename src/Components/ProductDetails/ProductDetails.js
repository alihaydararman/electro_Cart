import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import {  useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {addToCart} from '../../redux/actions/cartAction'

const ProductDetails = () => {
  let [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const { id } = useParams();
  console.log(id)
  const [product, setProduct] = useState({});

  useEffect(() => {
    fetch(`http://localhost:9000/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, [id]);
  console.log(product);

  const { name, img, stock, price, rating, description } = product;

    const addToCartHandler = () => {
    dispatch(addToCart(product._id, quantity));
      
    };
  return (
    <div className='container my-5'>
      <div className='row p-3 p-md-5 box-shadow'>
        <div className='col-12 col-lg-4 text-center'>
          <img src={img} alt='' className='img-fluid' />
        </div>
        <div className='col-12 col-md-6 col-lg-4'>
          <h4>{name}</h4>

          <Rating
            className='text-warning d-block mb-3'
            readonly
            initialRating={rating}
            emptySymbol='far fa-star '
            fullSymbol='fas fa-star '
          />
          <div className='d-flex align-items-center'>
            <span className='me-2'> Availability:</span>
            {stock > 0 ? (
              <button
                className='border-0 rounded-3'
                style={{ backgroundColor: '#c3f5d69a', color: '#09a043' }}
              >
                In stock
              </button>
            ) : (
              <button
                className='border-0 rounded-3 text-danger'
                style={{ backgroundColor: '#f7c1c18f' }}
              >
                out of stock
              </button>
            )}
          </div>

          <h4 className='mt-3'>Price: ${price}</h4>

          <p className='text-muted mt-4'>{description}</p>
          <button className='btn btn-warning' onClick={addToCartHandler}>
            <i className='fas fa-cart-plus'></i> Add to cart
          </button>
        </div>
        <div className='col-12 col-md-6 col-lg-4 mt-5 '>
          <div
            className='px-4 py-5'
            style={{ background: '#f9f9f9', borderRadius: '10px' }}
          >
            <div className='d-flex align-items-center text-muted mb-3'>
              <i className='fas fa-shipping-fast me-4'></i>
              <span>Free shipping apply to all orders over shipping $300</span>
            </div>
            <div className='d-flex align-items-center text-muted mb-3'>
              <i className='fas fa-exchange-alt me-4'></i>
              <span>1 Day Returns if you change your mind</span>
            </div>
            <div className='d-flex align-items-center text-muted mb-3'>
              <i className='fas fa-dollar-sign me-4'></i>
              <span>Cash on Delivery Available</span>
            </div>
            <div className='d-flex align-items-center text-muted mb-3'>
              <i className='fas fa-home me-4'></i>

              <span>Home Delivery within 1 day</span>
            </div>
            <div className='d-flex align-items-center text-muted mb-3'>
              <i className='fas fa-leaf me-4'></i>
              <span>100% genuine products</span>
            </div>
            <div className='d-flex align-items-center text-muted mb-3'>
              <i className='fas fa-file-import  me-4'></i>
              <span>Imported products from populer brand</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
