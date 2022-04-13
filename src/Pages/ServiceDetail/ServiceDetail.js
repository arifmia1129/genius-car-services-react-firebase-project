import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div className='container'>
            <h2>This is service detail component: {serviceId}</h2>
            <div className='text-center'>
                <Link to="/proceed">
                    <button className='btn btn-primary'>Proceed Now!</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;