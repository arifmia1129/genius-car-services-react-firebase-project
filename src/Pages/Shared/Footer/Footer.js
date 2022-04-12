import React from 'react';

const Footer = () => {
    return (
        <div className='text-center mt-5'>
            <p><small>Copyright &copy; {new Date().getFullYear()
            } The Car Doctor</small></p>
        </div>
    );
};

export default Footer;