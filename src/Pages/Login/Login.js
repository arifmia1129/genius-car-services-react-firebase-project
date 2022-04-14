import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';
import "./Login.css";
import SocialLogin from './SocialLogin/SocialLogin';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';


const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail] = useSendPasswordResetEmail(
        auth
    );


    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const handleFormSubmit = event => {
        event.preventDefault();


        signInWithEmailAndPassword(email, password);
    }
    const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(email);
            toast('Sent email for reset password!');
        }
        else {
            toast('Enter email then reset request for password');
        }
    }
    const handleNewRegister = () => {
        navigate("/register");
    }
    if (user) {
        navigate(from, { replace: true });
    }
    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <div className=' mx-auto my-2 p-3 form'>
            <h2 className='text-center text-primary mt-3'>Login Now!</h2>
            <Form className="border p-3" onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button className='w-50 mx-auto d-block' variant="primary" type="submit">
                    Login
                </Button>

            </Form>
            <p className='mt-3 text-center'>Are you forget password in The Car Doctor? <button onClick={resetPassword} className='btn text-primary'>Reset now</button>
                <ToastContainer />
            </p>
            <p className='mt-3 text-center'>Are you new in The Car Doctor? <button onClick={handleNewRegister} className='btn text-primary'>Register now!</button></p>
            <p className='text-danger'>{error?.message}</p>
            <SocialLogin></SocialLogin>

        </div>
    );
};

export default Login;