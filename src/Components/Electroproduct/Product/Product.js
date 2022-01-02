import React from 'react';

const Product = ({ product }) => {
    const { name, description, img, stock, price } = product;
    return (
        <div>
            <div className="card" style={{ width: "22rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Price: $ <span>{price}</span></h6>
                    <h6 className="card-subtitle mb-2 text-muted">Stock:<span>{stock}</span></h6>
                    <p className="card-text">{description}</p>
                    <a href="/" className="btn mr-2"><i className="fas fa-link"></i> Details</a>
                    <a href="/" className="btn "><i className="fa fa-shopping-cart"></i>Add Card</a>
                </div>
            </div>
        </div>
    );
};

export default Product;