import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div>
      <div className='wrapper'>
        <div className='overlay '>
          <div className='container  py-5'>
            <div className='row  d-flex  justify-content-center'>
              <div className='col-md-9 text-center'>
                <div className='contact-us '>
                  <h3>Contact Us</h3>
                  <p className='mb-4'>
                    Lorem ipsum is placeholder text commonly used in the
                    graphic, print, and publishing industries for previewing
                    layouts and visual mockups.
                  </p>
                </div>
              </div>
            </div>
            <div className='row mt-5 px-3 px-md-0 d-flex align-items-center'>
              <div className='col-md-6'>
                <div className=' text-center'>
                  <div className='d-flex flex-row align-items-center'>
                    {' '}
                    <span className='icons'>
                      <i className='fa fa-map-marker'></i>
                    </span>
                    <div className='address text-left'>
                      {' '}
                      <span>Address</span>
                      <p>Feni Bangladesh</p>
                    </div>
                  </div>
                  <div className='d-flex flex-row align-items-center mt-3'>
                    {' '}
                    <span className='icons'>
                      <i className='fa fa-phone'></i>
                    </span>
                    <div className='address text-left'>
                      {' '}
                      <span>Phone</span>
                      <p>+8801854046599</p>
                    </div>
                  </div>
                  <div className='d-flex flex-row align-items-center mt-3'>
                    {' '}
                    <span className='icons'>
                      <i className='fa fa-envelope'></i>
                    </span>
                    <div className='address text-left'>
                      {' '}
                      <span>Email</span>
                      <p>alihaydar6599@gmail.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='col-md-6 mt-4 mt-md-0'>
                <div className='text-center px-1'>
                  <div className='forms p-4 py-5 bg-white rounded-2'>
                    <h5>Send Message</h5>
                    <div className='inputs'>
                      {' '}
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Name'
                      />{' '}
                      <input
                        type='text'
                        className='form-control'
                        placeholder='Email'
                      />{' '}
                      <textarea
                        className='form-control'
                        placeholder='Type your message'
                      ></textarea>{' '}
                    </div>
                    <div className='button mt-4 text-left'>
                      {' '}
                      <button className='btn btn-warning'>Send</button>{' '}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
