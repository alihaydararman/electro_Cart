import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useLocation,useNavigate } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import Footer from '../Home/Footer/Footer';
import Header from '../Shared/Header/Header';

const SignUp = () => {

  const {register,error,setError,saveUsertoDb}=useAuth()
const location =useLocation()
const navigate=useNavigate()
 const [logInData,setData]=useState({})
 const url=location.state?.from.pathname||"/"

  const handleChange=e=>{
   const field= e.target.name
   const value=e.target.value
const newLogindata={...logInData}
newLogindata[ field ]=value;
setData(newLogindata)


  }
    const handleSignup=e=>{
      if(logInData.password.length<6)
      {
        setError("password must be 6 digits")
  
      }
                   
     else{
        register(logInData.email,logInData.password,logInData.name)


     }

     saveUsertoDb(logInData.email,logInData.name)

     alert("user Created ")
         navigate(url)
        e.preventDefault()
    }
    return (
      <>
        <Header />
        <Container className='my-5'>
          <div className='row d-flex justify-content-center '>
            <div
              className='col-10 col-md-8 col-lg-5 data-form box-shadow border'
              style={{
                borderRadius: '4px',
                padding: '30px 50px',
              }}
            >
                <h1>Sign Up</h1>
                <Form onSubmit={handleSignup}>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      onBlur={handleChange}
                      name='name'
                      type='text'
                      placeholder='Enter Name'
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicEmail'>
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      onBlur={handleChange}
                      type='email'
                      name='email'
                      placeholder='Enter email'
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='formBasicPassword'>
                    <Form.Label>Password</Form.Label>
                    {error && <small className='text-danger'>{error}</small>}
                    <Form.Control
                      onBlur={handleChange}
                      type='password'
                      name='password'
                      placeholder='Password'
                    />
                  </Form.Group>
                  <Button
                    className=' btn fs-5 btn-warning text-white'
                    type='submit'
                  >
                    Sign Up
                  </Button>
                </Form>
            
            </div>
          </div>
        </Container>
        <Footer />
      </>
    );
};

export default SignUp;