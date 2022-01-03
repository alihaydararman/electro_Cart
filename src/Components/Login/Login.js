
import React, { useState } from 'react';
import { Form ,Button, Container} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import Header from '../Shared/Header/Header';
import Footer from '../Home/Footer/Footer';

const Login = () => {


  
const {GoogleLogin,saveGoogleUsertoDb,setIsLoadng,LogOUt,user,Login}=useAuth()


 const [logInData,setData]=useState({})

 const location=useLocation()
 const history=useNavigate()
 const url=location.state?.from.pathname||"/"



 const handleGoogle=()=>{
   GoogleLogin().then(result=>{
    saveGoogleUsertoDb(result.user.email,result.user.displayName)
    history(url)
   });
 }
    

  const handleChange=e=>{
   const field= e.target.name
   const value=e.target.value
const newLogindata={...logInData}
newLogindata[field]=value;
setData(newLogindata)
  }

  const handleLogin=e=>{
    e.preventDefault()
    
          Login(logInData.email,logInData.password).then((userCredential) => {
            // Signed in 
            
            const user = userCredential.user;
            history(url)
            
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          }).finally(()=>{
            setIsLoadng(false);
            
          });
          


   
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
              <h1>Login</h1>

              <Form onSubmit={handleLogin}>
                <Form.Group className='mb-3' controlId='formBasicEmail'>
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type='email'
                    name='email'
                    placeholder='Enter email'
                  />
                  <Form.Text className='text-muted'>
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group className='mb-3' controlId='formBasicPassword'>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    type='password'
                    name='password'
                    placeholder='Password'
                  />
                </Form.Group>
                <Button
                  className='border rounded-3  fs-5 mb-5'
                  variant='warning'
                  type='submit'
                >
                  Log In
                </Button>
              </Form>
              <center>
                {' '}
                <h6 className=''>
                  {' '}
                  New User? 
                  <Link
                    style={{ color: 'salmon' }}
                    className='ms-2'
                    to='/signup'
                  >
                    SignUp Now
                  </Link>
                </h6>
              </center>
              <center>
                <Button className='btn-danger mt-2' onClick={handleGoogle}>
                  {' '}
                  GoogleSignIn
                </Button>
              </center>
            </div>
          </div>
        </Container>
        <Footer />
      </>
    );
};

export default Login;