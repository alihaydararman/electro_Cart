import React from 'react';

const OfferProduct = ({ product }) => {
    const { name, description, img, stock, price, offerprice } = product;
    return (
        <div>
            <div className="card" style={{ width: "22rem" }}>
                <img src={img} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <h4 className="card-subtitle mb-2 text-muted">Price: $ <span ><s>{price}</s></span>  </h4>
                    <h4 className="card-subtitle mb-2 text-muted">Offer-Price: $ <span >{offerprice}</span>  </h4>
                    <h6 className="card-subtitle mb-2 text-muted">Stock:<span>{stock}</span></h6>
                    <p className="card-text">{description}</p>
                    <a href="/" className="btn mr-2"><i className="fas fa-link"></i> Details</a>
                    <a href="/" className="btn "><i className="fa fa-shopping-cart"></i>Add Card</a>
                </div>
            </div>
        </div>
    );
};

export default OfferProduct;