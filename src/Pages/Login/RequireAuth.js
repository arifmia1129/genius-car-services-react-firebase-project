import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import {
    useLocation,
    Navigate
} from "react-router-dom";
import Loading from '../Shared/Loading/Loading';

const RequireAuth = ({ children }) => {
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);

    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;

    }
    if (user.providerData[0].providerId === "password" && !user.emailVerified) {
        return <div className='text-center my-5 fw-bold'>
            <h3 className='text-danger'>Your email not verified.</h3>
            <h4 className='text-success'>Please verify your email than try to login.</h4>
            <button className='btn btn-primary'
                onClick={async () => {
                    await sendEmailVerification();
                    alert('Sent email');
                }}
            >
                Verify email
            </button>

        </div>
    }
    return children;
};

export default RequireAuth;