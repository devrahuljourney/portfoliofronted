import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { auth } from '../services/apis';
import { axiosInstance } from '../services/apiConnector';
import { toast } from 'react-toastify';

const { LOGIN_API } = auth;

export default function Login(props) {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });

    const changeHandler = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const setUser = (user) => {
        localStorage.setItem('user', JSON.stringify(user));
        props.setUser(user);
    };

    const [loading, setLoading] = useState(false);

    const submitHandler = async (e) => {
        e.preventDefault();
        try {
          setLoading(true)
            const response = await axiosInstance.post(LOGIN_API, formData);
            if (response.data.success === true) {
                setUser(true);
                navigate("/admin/manage-portfolio");
                console.log('Login successful:', response.data);
                toast.success("Login Successfully")
            } else {
                console.log('Login failed:', response.data.message);
                toast.error(response.data.message)
                navigate("/admin/login");
            }
            setLoading(false)
        } catch (error) {
            console.error('Error during login:', error);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='card-container flex flex-col gap-4 items-center bg-gray-100 p-8 rounded-lg shadow-lg'>
                <h1 className='text-2xl font-bold text-gray-800 mb-4'>Administrator Login</h1>
                <form className='flex flex-col gap-2 w-full' onSubmit={submitHandler}>
                    <label htmlFor='username' className='text-gray-600'>Username:</label>
                    <input type='text' id='username' name='username' placeholder='Enter your username' onChange={changeHandler} className='input-field' />

                    <label htmlFor='password' className='text-gray-600'>Password:</label>
                    <input type='password' id='password' name='password' placeholder='Enter your password' onChange={changeHandler} className='input-field' />

                    <button type='submit' className='bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'>
                        { !loading ? "Logging" : "Login" }
                    </button>
                </form>
            </div>
        </div>
    );
}
