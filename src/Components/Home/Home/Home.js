import React from 'react';
import Products from '../../Electroproduct/Products/Products';
import Header from '../../Shared/Header/Header';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Slider from '../Slider/Slider';


const Home = () => {
    return (
        <div className=''>
            <Header></Header>
            <Slider></Slider>
            <Banner></Banner>
            <Products></Products>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;