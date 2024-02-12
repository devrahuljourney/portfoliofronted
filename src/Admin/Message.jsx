import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../services/apis';

export default function ContactTable() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/getcontact`);
        setContacts(response.data.data);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();
  }, []);

  return (
    <div className="container mt-4 overflow-x-auto ">
      <h2 style={{ borderBottom: '2px solid #333', paddingBottom: '10px' }}>Contact Information</h2>
      <table className="table" style={{ border: '2px solid #333', borderRadius: '8px', overflow: 'hidden' }}>
        <thead style={{ backgroundColor: '#333', color: '#fff' }}>
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          {contacts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt)).map((contact, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f2f2f2' : '#fff' }}>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>
                <a target="_blank" rel="noopener noreferrer" href={`mailto:${contact.email}`} style={{ color: '#007bff', textDecoration: 'none' }}>{contact.email}</a>
              </td>
              <td>{contact.subject}</td>
              <td>{contact.message}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
