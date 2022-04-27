import React from 'react';
import useServices from '../hooks/useServices';

const ManageServices = () => {
    const [services, setServices] = useServices();

    const handleDeleteService = (id) => {
        const proceed = window.confirm("Are you sure delete this service?")
        if (proceed) {
            fetch(`https://obscure-shore-20433.herokuapp.com/service/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    const remain = services.filter(service => service._id !== id);

                    setServices(remain);

                })
        }
    }
    return (
        <div className='text-center mt-5'>
            {
                services.map(service =>
                    <p key={service._id}>
                        {service.name} <button onClick={() => handleDeleteService(service._id)} className='btn btn-outline-primary fw-bold'>X</button>
                    </p>)
            }
        </div>
    );
};

export default ManageServices;