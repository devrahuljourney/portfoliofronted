import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from '../services/apis';
import { axiosInstance } from '../services/apiConnector';

export default function Coding() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [link, setLink] = useState('');
  const [codingProfiles, setCodingProfiles] = useState([]);

  useEffect(() => {
    const fetchCodingProfiles = async () => {
      try {
        const response = await axiosInstance.get(`${BASE_URL}/get-coding-profile`);
        setCodingProfiles(response.data.data);
      } catch (error) {
        console.error('Error fetching coding profiles:', error);
      }
    };

    fetchCodingProfiles();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', title);
      formData.append('description', description);
      formData.append('link', link);

      const response = await axiosInstance.post(`${BASE_URL}/admin/create-coding-profile`, formData);
      if (response.data.success) {
        toast.success('Coding profile created successfully');
        setCodingProfiles([...codingProfiles, response.data.codingProfile]);
        // Clear form fields after successful submission
        setTitle('');
        setDescription('');
        setLink('');
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('Error creating coding profile:', error);
      toast.error('Failed to create coding profile');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axiosInstance.delete(`${BASE_URL}/admin/delete-coding-profile/${id}`);
      if (response.data.success) {
        toast.success('Coding profile deleted successfully');
        setCodingProfiles(codingProfiles.filter((profile) => profile._id !== id));
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('Error deleting coding profile:', error);
      toast.error('Failed to delete coding profile');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Coding Profile</h2>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="mb-3">
          <label htmlFor="title" className="form-label">Title</label>
          <input type="text" className="form-control" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">Description</label>
          <textarea className="form-control" id="description" rows="3" value={description} onChange={(e) => setDescription(e.target.value)}></textarea>
        </div>
        <div className="mb-3">
          <label htmlFor="link" className="form-label">Link</label>
          <input type="text" className="form-control" id="link" value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>

      <div className="mt-4">
        <h2>Coding Profiles</h2>
        <div className="list-group">
          {codingProfiles.map((profile) => (
            <div key={profile._id} className="list-group-item list-group-item-action d-flex justify-content-between align-items-center">
              <div>
                <h5 className="mb-1">{profile.title}</h5>
                <p className="mb-1">{profile.description}</p>
                <a target="_blank" rel="noopener noreferrer" href={profile.link} className="btn btn-link" target="_blank" rel="noopener noreferrer">Visit</a>
              </div>
              <button onClick={() => { handleDelete(profile._id); }} className="btn bg-red-500 p-4 btn-danger">Delete</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
