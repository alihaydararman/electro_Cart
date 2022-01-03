import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions/cartAction';
import Footer from '../Home/Footer/Footer';
import Header from '../Shared/Header/Header';
import CartItem from './CartItem';

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();
  const qtyChangeHandler = (id, qty) => {
    dispatch(addToCart(id, qty));
  };
  const removeCartHanler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };
  return (
    <div>
      <Header/>
      <div className='container  my-5'>
        <div className='row'>
          <div className='col-12 col-md-8 box-shadow p-lg-3  '>
            {getCartCount() === 0 ? (
              <div className='p-4 d-flex align-items-center'>
                <p className=' m-0 '>Your cart is empty</p>{' '}
                <Link to='/' className='text-warning ms-3 p-0'>
                  <i className='fas fa-home me-1'></i>
                  Go home
                </Link>
              </div>
            ) : (
              cartItems.map((item) => (
                <CartItem
                  key={item.product}
                  item={item}
                  qtyChangeHandler={qtyChangeHandler}
                  removeCartHanler={removeCartHanler}
                ></CartItem>
              ))
            )}
          </div>

          <div className='col-12 col-md-4 mt-5 mt-md-0 ps-md-4'>
            <div className=' bg-white box-shadow rounded-3 p-4 py-5'>
              <h5>Total: {getCartCount()} items</h5>
              <h6>Subtotal price: ${getCartTotal()}</h6>
              <h6>Tax: ${getCartTotal() * 0.1}</h6>
              <h6>Total price: ${getCartTotal() + getCartTotal() * 0.1}</h6>
              <hr />
              <Link
                to={`/product/checkout`}
                className='btn btn-warning px-0 d-block text-center'
              >
                Proced to checkout
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Cart;
