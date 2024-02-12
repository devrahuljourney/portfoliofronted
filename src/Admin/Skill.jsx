import React, { useEffect, useState } from 'react';
import { axiosInstance } from '../services/apiConnector';
import { toast } from 'react-toastify';
import { BASE_URL } from '../services/apis';

export default function Skill() {
    const [name, setName] = useState('');
    const [proficiency, setProficiency] = useState('');
    const [skills, setSkills] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchSkills = async () => {
            try {
                setLoading(true);
                const response = await axiosInstance.get(`${BASE_URL}/get-skill`);
                setSkills(response?.data?.data);
            } catch (error) {
                console.error('Error fetching skills:', error);
                toast.error('Failed to fetch skills');
            } finally {
                setLoading(false);
            }
        };

        fetchSkills();
    }, []);

    const handleDelete = async (id) => {
        try {
            const response = await axiosInstance.delete(`${BASE_URL}/admin/delete-skill/${id}`);
            if (response.data.success) {
                toast.success('Skill deleted successfully');
                // Update skills after successful deletion
                setSkills(skills.filter(skill => skill._id !== id));
            } else {
                throw new Error(response.data.message);
            }
        } catch (error) {
            console.error('Error deleting skill:', error);
            toast.error('Failed to delete skill');
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post(`${BASE_URL}/admin/create-skill`, { name, proficiency });
            if (response.data.success) {
                toast.success('Skill added successfully');
                // Update skills after successful addition
                setSkills([...skills, response.data.skill]);
                // Clear form fields after successful submission
                setName('');
                setProficiency('');
            } else {
                throw new Error(response.data.message);
            }
        } catch (error) {
            console.error('Error adding skill:', error);
            toast.error('Failed to add skill');
        }
    };

    return (
        <div className="max-w-xl mx-auto px-4 py-8">
            <h2 className="text-3xl font-bold mb-4">Manage Skills</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="name" className="block font-medium">Skill Name:</label>
                    <input type="text" name='name' id="name" value={name} onChange={(e) => setName(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500" />
                </div>
                <div>
                    <label htmlFor="proficiency" className="block font-medium">Proficiency:</label>
                    <select id="proficiency" value={proficiency} onChange={(e) => setProficiency(e.target.value)} className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500">
                        <option value="">Select Proficiency</option>
                        <option value="Beginner">Beginner</option>
                        <option value="Intermediate">Intermediate</option>
                        <option value="Advanced">Advanced</option>
                    </select>
                </div>
                <button type="submit" className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Add Skill</button>
            </form>

            {/* Display existing skills */}
            <div className="mt-8">
                <h2 className="text-3xl font-bold mb-4">Existing Skills</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        {skills.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map(skill => (
                            <div key={skill._id} className="flex justify-between items-center border-b py-4">
                                <div>
                                    <h3 className="text-lg font-semibold">{skill.name}</h3>
                                    <p>Proficiency: {skill.proficiency}</p>
                                </div>
                                <div>
                                    <button onClick={() => handleDelete(skill._id)} className="text-red-500 hover:text-red-700">Delete</button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
