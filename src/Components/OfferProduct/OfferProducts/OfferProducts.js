import React, { useEffect, useState } from 'react';
import Footer from '../../Home/Footer/Footer';
import Header from '../../Shared/Header/Header';
import OfferProduct from '../OfferProduct/OfferProduct';
import './OfferProducts.css'

const OfferProducts = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {

        fetch('../offerprice.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='container'>
            <Header></Header>
            <div className='my-3' style={{ textAlign: 'center', padding: '20px', backgroundColor: 'royalblue' }}>
                <h3 > <span className='text-warning'>WOW!!</span> <span className='text-light'>WOW!! </span> Our Electro Cart Special Offer</h3>
                <h5> This offer is valid till January 30 , 2022</h5>
            </div>

            <div className='pbody'>
                <div class="container mx-auto mt-4">
                    <div class="row">
                        <div class="col-md-4 product-container">
                            {
                                products.slice(0, 6).map(product => <OfferProduct
                                    key={product.id}
                                    product={product}
                                ></OfferProduct>)
                            }
                        </div>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default OfferProducts;