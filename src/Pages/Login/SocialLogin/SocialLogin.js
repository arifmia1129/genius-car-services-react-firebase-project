import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from "../../../firebase.init";
const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let errorMessage;
    const from = location.state?.from?.pathname || "/";

    if (user || githubUser) {
        navigate(from, { replace: true });
    }
    if (error || githubError) {
        errorMessage = error?.message || githubError?.message;
    }
    return (
        <div>

            <div className='d-flex justify-content-center align-items-center'>
                <div style={{ height: "1px" }} className='w-100 bg-primary'></div>
                <p className='pt-3 px-3'>OR</p>
                <div style={{ height: "1px" }} className='w-100 bg-primary'></div>
            </div>
            <p className='text-danger'>{errorMessage}</p>
            <div>
                <div className='text-center'>
                    <button
                        onClick={() => signInWithGoogle()}

                        className='btn btn-outline-secondary my-2'>
                        <img style={{ borderRadius: "50%" }} className='me-2 bg-white p-2' src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="" />
                        Sign in with Google
                    </button>
                </div>
                <div className='text-center'>
                    <button className='btn btn-outline-secondary my-2'>
                        <img style={{ width: "40px", height: "40px" }} className='me-2 p-2' src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" alt="" />
                        Sign in with Facebook
                    </button>
                </div>
                <div className='text-center'>
                    <button
                        onClick={() => signInWithGithub()}
                        className='btn btn-outline-secondary my-2 '>
                        <img style={{ width: "40px", height: "30px" }} className='me-2 ' src="https://logos-world.net/wp-content/uploads/2020/11/GitHub-Logo.png" alt="" />
                        Sign in with Github
                    </button>
                </div>
            </div>
        </div>
    );
};

export default SocialLogin;