import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '../../../img/slider1.jpg';
import slider2 from '../../../img/slide2.png';
import slider3 from '../../../img/slide3.png';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <div className='mx-auto'>
      <Carousel  className='carousel'>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={slider1}
            alt='First slide'
            style={{ height: '600px' }}
          />
          <Carousel.Caption>
            <h1 className='fw-bold text-uppercase'>Get Powerful electrical tools</h1>
            <p className='text-white-50'>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>

            <Link to='/shop' className='btn btn-warning mb-4'>
              Shop Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={slider2}
            alt='Second slide'
            style={{ height: '600px' }}
          />
          <Carousel.Caption>
            <h1 className='fw-bold text-uppercase'>Get Powerful electrical tools</h1>
            <p className='text-white-50'>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>

            <Link to='/shop' className='btn btn-warning mb-4'>
              Shop Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className='d-block w-100'
            src={slider3}
            alt='Third slide'
            style={{ height: '600px' }}
          />
          <Carousel.Caption>
            <h1 className='fw-bold text-uppercase'>Get Powerful electrical tools</h1>
            <p className='text-white-50'>
              Nulla vitae elit libero, a pharetra augue mollis interdum.
            </p>

            <Link to='/shop' className='btn btn-warning mb-4'>
              Shop Now
            </Link>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
