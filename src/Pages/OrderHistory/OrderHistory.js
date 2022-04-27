import axios from 'axios';
import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import axiosPrivate from '../api/axiosPrivate';
import Loading from '../Shared/Loading/Loading';

const OrderHistory = () => {
    const [user] = useAuthState(auth);
    const [orders, setOrders] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const getOrders = async () => {
            try {
                const { data } = await axiosPrivate.get(`https://obscure-shore-20433.herokuapp.com/order?email=${user?.email}`)
                setOrders(data);
            }
            catch (error) {
                if (user.email !== undefined) {
                    if (error.response.status === 401 || error.response.status === 403) {

                        navigate("/login");
                        signOut(auth);
                    }
                }
            }
        }
        getOrders();
    }, [user])

    return (
        <div className='container my-3'>
            <h1>Total Orders : {orders.length}</h1>
            {
                orders.map(order => <div className='border border-3 p-3 mb-3 rounded-3' key={order._id}>
                    <h3>{order.service}</h3>
                    <p>{order.price}</p>
                    <p>{order.email}</p>
                </div>)
            }
        </div>
    );
};

export default OrderHistory;