import React from 'react';
import { Card } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart } from '../../../redux/actions/cartAction';

const OfferProduct = ({ product }) => {
    const { name, description, img, stock, price, offerprice } = product;
      const dispatch = useDispatch();

      const addToCartHandler = () => {
        dispatch(addToCart(product._id, 1));
      };
    return (
      <div>
        <Card className='card'>
          <img src={img} className='card-img-top' alt='...' />
          <div className='card-body'>
            <h5 className='card-title'>{name}</h5>
            <h4 className='card-subtitle mb-2 text-muted'>
              Price: ${' '}
              <span>
                <s>{price}</s>
              </span>{' '}
            </h4>
            <h4 className='card-subtitle mb-2 text-muted'>
              Offer-Price: $ <span>{offerprice}</span>{' '}
            </h4>
            <h6 className='card-subtitle mb-2 text-muted'>
              Stock:<span>{stock}</span>
            </h6>
            <p className='card-text'>{description}</p>
            <Card.Footer className='bg-transparent border-0 ps-0'>
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

export default OfferProduct;