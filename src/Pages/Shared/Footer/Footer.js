import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div className='text-center mt-5'>
                <p><small className='fw-bold'>Copyright &copy; {new Date().getFullYear()
                } The Car Doctor</small></p>
            </div>
        </footer>
    );
};

export default Footer;