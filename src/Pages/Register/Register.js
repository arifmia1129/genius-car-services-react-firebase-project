import { Button, Form } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
    ] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    const handleFormSubmit = event => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.name.value;
        createUserWithEmailAndPassword(email, password);


    }
    if (user) {
        navigate("/");
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
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p className='mt-3 text-center'>Already hava an account in The Car Doctor? <button onClick={handleLogin} className='btn text-danger'>Login Now!</button></p>
            </Form>
        </div>
    );
};

export default Register;