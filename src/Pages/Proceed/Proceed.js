import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import auth from '../../firebase.init';
import useServiceDetails from '../hooks/useServiceDetails';
import axios from "axios";

const Proceed = () => {
    const { serviceId } = useParams();
    const [service] = useServiceDetails(serviceId);
    const [user] = useAuthState(auth);
    const [email, setEmail] = useState({
        email: "abc@def.com"
    })

    const handleChangeField = event => {
        const newAddress = event.target.value;
        setEmail({ address: newAddress });
    }
    const handleFormSubmit = event => {
        event.preventDefault();
        const placeOrder = {
            name: event.target.name.value,
            email: event.target.email.value,
            service: event.target.service.value,
            address: event.target.address.value,
            contact: event.target.contact.value
        };
        axios.post("https://obscure-shore-20433.herokuapp.com/order", placeOrder)
            .then(res => {
                const { data } = res;
                if (data.insertedId) {
                    event.target.reset();
                    alert("Oder booked!");
                }
            })
    }
    return (
        <div className='container my-5 mx-auto w-50 text-center border py-3'>
            <h1 className='text-primary'>You order for {service.name}</h1>
            <form onSubmit={handleFormSubmit}>
                <input className='w-100 mb-2 rounded-3 ps-2' type="text" name="name" placeholder='Name' value={user?.displayName} readOnly />
                <br />
                <input className='w-100 mb-2 rounded-3 ps-2' type="text" name="email" placeholder='Email' onChange={handleChangeField} value={user?.email || email.email} />
                <br />
                <input className='w-100 mb-2 rounded-3 ps-2' type="text" name="service" placeholder='Service' value={service.name} readOnly />
                <br />
                <input className='w-100 mb-2 rounded-3 ps-2' type="text" name="address" placeholder='Current Address' autoComplete='off' />
                <br />
                <input className='w-100 mb-2 rounded-3 ps-2' type="text" name="contact" placeholder='Contact No.' autoComplete='off' />
                <br />
                <input className='btn btn-primary' type="submit" value="Confirm Order" />
            </form>
        </div>
    );
};

export default Proceed;