import React from 'react';
import "./Service.css";
const Service = ({ service }) => {
    const { name, price, img, description } = service;
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>{price}$</h3>
            <p>{description}</p>
            <div className='btn'>
                <button>Book now!</button>
            </div>
        </div>
    );
};

export default Service;