import React, { useState } from 'react';
import { Alert } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import useAuth from '../../Hooks/useAuth';
import { reseteCart } from '../../redux/actions/cartAction';
import Footer from '../Home/Footer/Footer';
import Header from '../Shared/Header/Header';
import './Checkout.css';

const Checkout = () => {
  const { user } = useAuth();
  const [success, setSuccess] = useState('');

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const dispatch = useDispatch();

  const cartReset = () => {
    dispatch(reseteCart());
  };
  const getCartTotal = () => {
    return cartItems.reduce((price, item) => item.price * item.qty + price, 0);
  };
  const getCartCount = () => {
    return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
  };

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const order = { ...data, status: 'pending', order: [...cartItems] };
    fetch('https://intense-plateau-36885.herokuapp.com/orders', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          setSuccess(true);
          reset();
          setTimeout(() => {
            setSuccess(false);
          }, 5000);
        }
        console.log(data);
      });
    cartReset();
  };
  return (
    <>
      <Header />
      <div className='container'>
        <div className='row my-5'>
          <div className='col-12 col-md-7 box-shadow p-4 data-form '>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                required
                placeholder='Name'
                {...register('name')}
                defaultValue={user.displayName}
              />

              <input
                required
                placeholder='Your Email'
                type='email'
                {...register('email')}
                defaultValue={user.email}
              />
              <input
                required
                placeholder='Your Mobile'
                type='text'
                {...register('phone')}
              />
              <input
                required
                placeholder='Your address'
                {...register('address')}
              />

              <button type='submit' className='btn btn-warning w-100'>
                Place order
              </button>
              {success && (
                <Alert variant='success' className='mt-2 py-2'>
                  order confirm successfully
                </Alert>
              )}
            </form>
          </div>

          <div className='col-12 col-md-5 mt-5 mt-md-0 ps-md-4 p-0'>
            <div className=' bg-white box-shadow rounded-3 p-4 py-5'>
              <h4>Order summary</h4>
              <hr className='mb-3' />
              <h6 className='text-dark'>Total: {getCartCount()} items</h6>
              <h6>Price: ${getCartTotal()}</h6>
              <h6>Tax: ${getCartTotal() * 0.1}</h6>
              <h6>Total price: ${getCartTotal() + getCartTotal() * 0.1}</h6>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Checkout;
