import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import "./Login.css";
const Login = () => {
    const [
        signInWithEmailAndPassword,
        user,
    ] = useSignInWithEmailAndPassword(auth);
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleFormSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }

    const handleNewRegister = () => {
        navigate("/register");
    }
    if (user) {
        navigate(from, { replace: true });
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
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p className='mt-3 text-center'>Are you new in The Car Doctor? <button onClick={handleNewRegister} className='btn text-danger'>Register now!</button></p>
            </Form>
        </div>
    );
};

export default Login;