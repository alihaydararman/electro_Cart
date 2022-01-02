import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {

        fetch('../products.json')
            .then(res => res.json())
            .then(data => setProducts(data));
    }, [])
    return (
        <div className='pbody'>

            <div class="container mx-auto mt-4">
                <div class="row">
                    <div class="col-md-4 product-container">
                        {
                            products.slice(0, 6).map(product => <Product
                                key={product.id}
                                product={product}
                            ></Product>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Products;