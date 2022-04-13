import React from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='container'>
            <h2>This is service detail component: {serviceId}</h2>
        </div>
    );
};

export default ServiceDetail;