import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';

const SignUp = () => {

  const {register,error,setError,saveUsertoDb}=useAuth()

 const [logInData,setData]=useState({})
    

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
        e.preventDefault()
    }
    return (
        <Container>
            <h1>Sign Up</h1>
            <Form onSubmit={handleSignup}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control onBlur={handleChange} name="name" type="text" placeholder="Enter Name" />
    <Form.Text className="text-muted">
      Enter Your Name here.
    </Form.Text>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    
    <Form.Label>Email address</Form.Label>
    <Form.Control onBlur={handleChange} type="email" name="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label><br/>
    { error && <small className="text-danger">{error}</small>}
    <Form.Control onBlur={handleChange} type="password" name="password" placeholder="Password" />
  </Form.Group>
  <Button className="border rounded-3 p-3 fs-5 btn-warning text-white"  type="submit">
   Sign Up
  </Button>
</Form>
        </Container>
    );
};

export default SignUp;