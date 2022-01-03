import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import SignleReview from './SignleReview';

const Review = () => {

    const [reviews,setreviews]=useState([])

    useEffect(()=>{

        fetch('http://localhost:9000/reviews').then(res=>res.json()).then(data=>{
            setreviews(data)
        })
    },[])
    return (
       <Container className="my-5">
           <Row  xs={1} md={3} className="g-4">

               {

                   reviews.map(review=><SignleReview
                    key={review._id}
                    review={review}
                   ></SignleReview>)
               }
           </Row>
       </Container>
    );
};

export default Review;