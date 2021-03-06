import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../../redux/actions/cartAction';

const Product = ({ product }) => {
    const { name, _id, img, stock, price } = product;
  const dispatch = useDispatch();
  
  
   const addToCartHandler = () => {
      dispatch(addToCart(product._id, 1));
      };
  return (
    <div className=''>
      <Card className='card h-100'>
        <img src={img} className='card-img-top' alt='...' />
        <div className='card-body'>
          <h5 className='card-title'>{name}</h5>
          <h6 className='card-subtitle my-3 text-muted'>
            Price: $ <span>{price}</span>
          </h6>
          <h6 className='card-subtitle mb-2 text-muted'>
            Stock:<span>{stock}</span>
          </h6>

          <Card.Footer className='bg-transparent border-0 ps-0'>
            <Link
              to={`/products/${_id}`}
              className='product-name btn btn-outline-warning mr-2'
            >
              <i className='fas fa-link'></i> Details
            </Link>
            <button className='btn btn-warning' onClick={addToCartHandler}>
              {' '}
              <i className='fa fa-shopping-cart me-2'></i>Add Card
            </button>
          </Card.Footer>
        </div>
      </Card>
    </div>
  );
};

export default Product;
