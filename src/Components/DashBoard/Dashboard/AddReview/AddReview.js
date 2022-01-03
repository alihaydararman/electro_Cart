import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import useAuth from '../../../../Hooks/useAuth';

const AddReview = () => {
  const { user } = useAuth();
  const [ratingData, setRatingData] = useState({});

  const handleChange = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newUserInfo = { ...ratingData };
    newUserInfo[field] = value;
    setRatingData(newUserInfo);
  };

  const handleRating = (e) => {
    const userdata = { name: `${user.displayName}`, email: `${user.email}` };

    const ratingInfo = ratingData;
    ratingInfo.users = userdata;

    fetch('http://localhost:9000/reviews', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(ratingInfo),
    }).then();

    alert('Your Review added . thanks for staying with us');

    e.preventDefault();
  };

  return (
    <Container className='my-5 w-75'>
      <Form onSubmit={handleRating}>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='name@example.com'
            defaultValue={user.email}
            disabled
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='email'
            placeholder='Your name'
            defaultValue={user.displayName}
            disabled
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlInput1'>
          <Form.Label>Star's</Form.Label>
          <Form.Control
            onChange={handleChange}
            name='stars'
            type='number'
            placeholder='Rate Out of 5'
            min='1'
            max='5'
            step='0.01'
            required
          />
        </Form.Group>
        <Form.Group className='mb-3' controlId='exampleForm.ControlTextarea1'>
          <Form.Label>Explain Your feedback</Form.Label>
          <Form.Control
            onChange={handleChange}
            name='Feedback'
            as='textarea'
            rows={3}
          />
        </Form.Group>
        <Button type='submit' className='btn btn-warning'>
          Submit Reveiw
        </Button>
      </Form>
    </Container>
  );
};

export default AddReview;
