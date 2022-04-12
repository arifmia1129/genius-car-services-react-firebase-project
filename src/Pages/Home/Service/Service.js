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
            <button className='btn btn-primary w-100 mt-auto'>Book now!</button>
        </div>
    );
};

export default Service;