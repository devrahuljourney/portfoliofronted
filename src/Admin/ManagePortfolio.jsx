import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import User from './User';
import Skill from './Skill';
import Project from './Project';
import WorkExperience from './WorkExperience';
import { auth } from '../services/apis';
import { axiosInstance } from '../services/apiConnector';
import { toast } from 'react-toastify';
import Message from './Message';
import Coding from './Coding';
export default function ManagePortfolio() {
    const { LOGOUT_API } = auth;
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [selectedComponent, setSelectedComponent] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user === true) {
            setIsLoggedIn(true);
        } else {
            setIsLoggedIn(false);
        }
    }, []);

    const handleLogout = async () => {
        try {
            const result = await axiosInstance.post(LOGOUT_API);
            if (result.data.success) {
                localStorage.removeItem('user');
                setIsLoggedIn(false);
                toast.success("Log out Successfully");
                navigate("/admin/login")
            } else {
                throw new Error(result.data.message);
            }
        } catch (error) {
            console.error('Logout failed:', error);
            toast.error("Failed to log out");
        }
    };

    const renderComponent = (component) => {
        setSelectedComponent(component);
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">Manage Portfolio</h1>
            <div className="flex flex-col gap-4">
                {isLoggedIn ? (
                    <>
                        <NavLink className="text-blue-500 hover:text-blue-700" onClick={() => renderComponent('User')} to="#">User Management</NavLink>
                        <NavLink className="text-blue-500 hover:text-blue-700" onClick={() => renderComponent('Skill')} to="#">Skill Management</NavLink>
                        <NavLink className="text-blue-500 hover:text-blue-700" onClick={() => renderComponent('coding')} to="#">Coding Profile</NavLink>

                        <NavLink className="text-blue-500 hover:text-blue-700" onClick={() => renderComponent('Project')} to="#">Project Management</NavLink>
                        <NavLink className="text-blue-500 hover:text-blue-700" onClick={() => renderComponent('WorkExperience')} to="#">Work Experience Management</NavLink>
                        <NavLink className="text-blue-500 hover:text-blue-700" onClick={() => renderComponent('message')} to="#">Message</NavLink>

                        <button className="text-red-500 hover:text-red-700" onClick={handleLogout}>Logout</button>
                    </>
                ) : (
                    <p>Please log in to access the portfolio management features.</p>
                )}
            </div>

            <div className="mt-8">
                {selectedComponent === 'User' && <User />}
                {selectedComponent === 'Skill' && <Skill />}
                {selectedComponent === 'Project' && <Project />}
                {selectedComponent === 'WorkExperience' && <WorkExperience />}
                {
                    selectedComponent === 'message' && <Message/>
                }
                {
                    selectedComponent === 'coding' && <Coding/>
                }
            </div>
        </div>
    );
}
