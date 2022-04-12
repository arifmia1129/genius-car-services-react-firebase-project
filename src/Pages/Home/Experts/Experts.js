import React from 'react';
import e1 from "../../../images/experts/expert-1.jpg";
import e2 from "../../../images/experts/expert-2.jpg";
import e3 from "../../../images/experts/expert-3.jpg";
import e4 from "../../../images/experts/expert-4.jpg";
import e5 from "../../../images/experts/expert-5.jpg";
import e6 from "../../../images/experts/expert-6.png";
import Expert from '../Expert/Expert';
const Experts = () => {
    const experts = [
        {
            id: 1,
            name: "Shahin",
            img: e1
        },
        {
            id: 2,
            name: "Naim",
            img: e2
        },
        {
            id: 3,
            name: "Mozahid",
            img: e3
        },
        {
            id: 4,
            name: "Shuvo",
            img: e4
        },
        {
            id: 5,
            name: "Talukder",
            img: e5
        },
        {
            id: 6,
            name: "Jahida",
            img: e6
        }
    ]
    return (
        <div className='container mt-5'>
            <h1 className='text-primary text-center'>Our Experts</h1>
            <div className='row'>
                {
                    experts.map(expert => <Expert
                        key={expert.id}
                        expert={expert}
                    ></Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;