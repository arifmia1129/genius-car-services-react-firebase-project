import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {

        fetch("http://localhost:5000/service", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })

            .then(res => res.json())
            .then(result => console.log(result));

        console.log(data);
    };
    return (
        <div className='container w-50 mx-auto text-center mt-5'>
            <h3>Add New Service</h3>
            <form className="d-flex flex-column" onSubmit={handleSubmit(onSubmit)}>
                <input className='mb-2 rounded-3 ps-2' placeholder='Name' {...register("name", { required: true, maxLength: 20 })} />
                <textarea className='mb-2 rounded-3 ps-2' placeholder='Description' {...register("description")} />
                <input className='mb-2 rounded-3 ps-2' placeholder='Price' type="number" {...register("price")} />
                <input className='mb-2 rounded-3 ps-2' placeholder='Picture Url' type="text" {...register("img")} />
                <input className='w-25 mx-auto rounded-3 px-5 py-3 fw-bold' type="submit" value={"Add Service"} />
            </form>
        </div>
    );
};

export default AddService;