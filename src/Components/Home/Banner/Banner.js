import React from 'react';


const watch = [
    {
        id: 1,
        style: "To make what we make.",
        img: "https://i.ibb.co/w6ccSSG/product-2.jpg",
    },
    {
        id: 2,
        style: `To say that Perfact`,
        img: "https://i.ibb.co/ZWqQR5J/product-3.jpg",
    },
    {
        id: 3,
        style: "Better Normal For All",
        img: "https://i.ibb.co/XpkV1dP/product-6.jpg",
    },
];


const Banner = () => {
    return (
        <div className="container banner-footer-container">
            <div className="row">
                {watch.map((wt) => {
                    return (
                        <div key={wt.id} className="col-lg-4">
                            <div
                                // style={{ backgroundColor: "#0A93BB" }}
                                className="d-flex align-items-center justify-content-evenly p-3 my-lg-0 my-2  rounded bg-warning"
                            >
                                <div>
                                    <span style={{ color: "White" }} className="fw-bold">
                                        Electro Cart
                                    </span>
                                    <h4 className="w-75 text-dark fw-normal"> {wt.style}</h4>
                                </div>
                                <img height="100" src={wt.img} alt="" />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};


export default Banner;