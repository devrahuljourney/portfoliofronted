import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import { BASE_URL } from '../services/apis';
import { axiosInstance } from '../services/apiConnector';

export default function WorkExperience() {
  const [logo, setLogo] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [role, setRole] = useState('');
  const [start, setStart] = useState('');
  const [end, setEnd] = useState('');
  const [works, setWorks] = useState([]);

  useEffect(() => {
    const fetchWorks = async () => {
      try {
        const response = await axiosInstance.get(`${BASE_URL}/getwork`);
        setWorks(response.data.data);
      } catch (error) {
        console.error('Error fetching work experience:', error);
      }
    };

    fetchWorks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('logo', logo);
      formData.append('companyName', companyName);
      formData.append('role', role);
      formData.append('start', start);
      formData.append('end', end);

      const response = await axiosInstance.post(`${BASE_URL}/admin/creatework`, formData);
      if (response.data.success) {
        toast.success('Work experience added successfully');
        setWorks([...works, response.data.work]);
        // Clear form fields after successful submission
        setLogo('');
        setCompanyName('');
        setRole('');
        setStart('');
        setEnd('');
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('Error adding work experience:', error);
      toast.error('Failed to add work experience');
    }
  };

  const handleDelete = async (id) => {
    try {
      const response = await axiosInstance.delete(`${BASE_URL}/admin/deletework/${id}`);
      if (response.data.success) {
        toast.success('Work experience deleted successfully');
        setWorks(works.filter((work) => work._id !== id));
      } else {
        throw new Error(response.data.message);
      }
    } catch (error) {
      console.error('Error deleting work experience:', error);
      toast.error('Failed to delete work experience');
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Add Work Experience</h2>
      <form onSubmit={handleSubmit} className="mb-5">
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="logo" className="form-label">Logo Image</label>
            <input type="file" className="form-control" id="logo" onChange={(e) => setLogo(e.target.files[0])} />
          </div>
          <div className="col-md-6">
            <label htmlFor="companyName" className="form-label">Company Name</label>
            <input type="text" className="form-control" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-md-6">
            <label htmlFor="role" className="form-label">Role</label>
            <input type="text" className="form-control" id="role" value={role} onChange={(e) => setRole(e.target.value)} />
          </div>
          <div className="col-md-3">
            <label htmlFor="start" className="form-label">Start Date</label>
            <input type="text" className="form-control" id="start" value={start} onChange={(e) => setStart(e.target.value)} />
          </div>
          <div className="col-md-3">
            <label htmlFor="end" className="form-label">End Date</label>
            <input type="text" className="form-control" id="end" value={end} onChange={(e) => setEnd(e.target.value)} />
          </div>
        </div>
        <button type="submit" className="btn btn-primary">Add</button>
      </form>

      <div className="mt-4">
        <h2>Work Experience</h2>
        <div className="list-group">
          {works.map((work) => (
            <div key={work._id} className="list-group-item list-group-item-action">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                  <img src={work.logo} alt="Company Logo" className="me-3" style={{ width: '50px' }} />
                  <div>
                    <div>{work.companyName}</div>
                    <div>{work.role}</div>
                  </div>
                </div>
                <button onClick={() => { handleDelete(work._id); }} className="btn btn-danger">Delete</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
