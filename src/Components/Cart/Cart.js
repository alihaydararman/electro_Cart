import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../redux/actions/cartAction';
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
      return cartItems.reduce(
        (price, item) => item.price * item.qty + price,
        0
      );
    };
    const getCartCount = () => {
      return cartItems.reduce((qty, item) => qty + Number(item.qty), 0);
    };
  return (
    <div>
      <div className='container  my-5'>
       
      </div>
    </div>
  );
};

export default Cart;