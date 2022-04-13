import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const nameRef = useRef("");
    const navigate = useNavigate();
    const handleFormSubmit = event => {
        event.preventDefault();

        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        const name = nameRef.current.value;
        console.log(email, password, name);
    }

    const handleLogin = () => {
        navigate("/login");
    }
    return (
        <div className=' mx-auto my-2 p-3 form'>
            <h2 className='text-center text-danger mt-3'>Register Now!</h2>
            <Form className="border p-3" onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control ref={nameRef} type="text" placeholder="Your full name" required />
                </Form.Group>
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
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p className='mt-3 text-center'>Already hava an account in The Car Doctor? <button onClick={handleLogin} className='btn text-danger'>Login Now!</button></p>
            </Form>
        </div>
    );
};

export default Register;