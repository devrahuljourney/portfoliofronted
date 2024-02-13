import React, { useEffect, useState } from 'react';
import { getCoding } from '../services/operations/Coding';
import { sendMessage } from '../services/operations/contact';

export default function ContactForm() {

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
    });
    const[loading,setLoading] = useState(false);
    // useEffect(() => {
    //     getCoding(setLoading,formData);
    // },[])

    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((previous) => ({ ...previous, [name]: value }));
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
        sendMessage(setLoading,formData)
        setFormData({
            firstName:"",
            lastName:"",
            email:"",
            message:"",
            subject:""
        });
    }

    return (
        
        <div>
            {
                loading ? ("...Loading") : (
                    <form className='md:w-[500px]  w-full mb-10 flex flex-col justify-center items-center gap-3 bg-[#151414] p-6 rounded-lg' onSubmit={submitHandler}>
    <p className='font-bold text-white text-lg'>Send me a message</p>
    <div className=' w-full  p-10  flex flex-col md:flex-row gap-4'>
        <input className=' w-[100%] md:w-[50%] bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none' placeholder='First Name' onChange={changeHandler} type='text' name='firstName' value={formData.firstName} />
        <input className=' w-[100%] md:w-[50%] bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none' placeholder='Last Name (Optional)' onChange={changeHandler} type='text' name='lastName' value={formData.lastName} />
    </div>
    <div className='flex flex-col gap-4 w-full ' >
    <input className=' w-full bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none' placeholder='Email' onChange={changeHandler} type='email' name='email' value={formData.email} />
    <input className=' w-full bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none' placeholder='Subject' onChange={changeHandler} type='text' name='subject' value={formData.subject} />
    <textarea className=' w-full bg-transparent border-b border-white text-white placeholder-gray-400 focus:outline-none' placeholder='Message' onChange={changeHandler} type='text' name='message' value={formData.message} />
    </div>
    <button className='  text-lg  rounded-full px-6 py-3 bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300' type='submit'>Submit</button>
</form>
                )
            }
        </div>

    );
}
