import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css";
const Service = ({ service }) => {
    const { id, name, price, img, description } = service;
    const navigate = useNavigate();
    const handleServiceDetail = (id) => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='service'>
            <img src={img} alt="" />
            <h2>{name}</h2>
            <h3>{price}$</h3>
            <p>{description}</p>
            <button onClick={() => handleServiceDetail(id)} className='btn btn-primary w-100 mt-auto'>Book now!</button>
        </div>
    );
};

export default Service;