import React from 'react';
import { Container } from 'react-bootstrap';
import Review from '../Dashboard/Review/Review';


const DashboardHome = () => {
    const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}];
    return (
        <Container className="my-5 w-75"> 
            <h4>Reviews By Our Users </h4>

          <Review></Review>
        </Container>
    );
};

export default DashboardHome;