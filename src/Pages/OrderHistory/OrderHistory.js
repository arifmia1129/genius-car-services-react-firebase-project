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
    }, [])

    return (
        <div className='container my-3'>
            <h1>Total Orders : {orders.length}</h1>
        </div>
    );
};

export default OrderHistory;