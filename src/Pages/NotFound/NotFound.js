import React from 'react';
import notFound from '../../images/404.jpg';
const NotFound = () => {
    return (
        <div className='container text-center'>
            <h1 className='text-danger fw-bold my-3'>Not Found Your URL (404)!!</h1>
            <img style={{ height: "70vh" }} className='w-100 rounded-3' src={notFound} alt="" />
        </div>
    );
};

export default NotFound;