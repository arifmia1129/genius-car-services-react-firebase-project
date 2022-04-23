import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});
    useEffect(() => {
        fetch(`http://localhost:5000/service/${serviceId}`)
            .then(res => res.json())
            .then(data => setService(data));
    }, [])


    return (
        <div className='container'>
            <h2>This is service detail component: {service.name}</h2>
            <div className='text-center'>
                <Link to="/proceed">
                    <button className='btn btn-primary'>Proceed Now!</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;