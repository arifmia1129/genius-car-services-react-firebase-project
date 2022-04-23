import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import SocialLogin from "../../Pages/Login/SocialLogin/SocialLogin";
import { useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import PageTitle from '../Shared/PageTitle/PageTitle';

const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });
    const [updateProfile] = useUpdateProfile(auth);

    console.log(user);
    const navigate = useNavigate();
    const handleFormSubmit = async event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });
        alert('Updated profile');


    }
    if (user) {
        navigate("/");
    }

    const handleLogin = () => {
        navigate("/login");
    }
    if (loading) {
        return <Loading></Loading>;
    }
    return (
        <div className=' mx-auto my-2 p-3 form'>
            <PageTitle title="Register"></PageTitle>
            <h2 className='text-center text-primary mt-3'>Register Now!</h2>
            <Form className="border p-3" onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3" >
                    <Form.Label>Name</Form.Label>
                    <Form.Control name="name" type="text" placeholder="Your full name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control name="email" type="email" placeholder="Enter email" required />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control name="password" type="password" placeholder="Password" required />
                </Form.Group>
                <div className='my-3'>
                    <input onClick={() => setAgree(!agree)} className='ms-3 me-2' type="checkbox" name="terms" id="terms" />
                    <label className={`fw-bold ${agree ? "text-primary" : "text-danger"}`} htmlFor="terms">Agree with our terms and condition?</label>
                </div>
                <Button disabled={!agree} className='w-50 mx-auto d-block' variant="primary" type="submit">
                    Register
                </Button>
                <p className='mt-3 text-center'>Already hava an account in The Car Doctor? <button onClick={handleLogin} className='btn text-primary'>Login Now!</button></p>
                <SocialLogin></SocialLogin>
            </Form>
        </div>
    );
};

export default Register;