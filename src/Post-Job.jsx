import React, { useState } from 'react';

export default function PostJob() {
  const [title, setTitle] = useState('');
  const [skill, setSkill] = useState('');
  const [location, setLocation] = useState('');
  const [contact, setContact] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const res = await fetch('http://localhost:5000/api/jobs', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ title, skill, location, contact })
    });
    const data = await res.json();
    alert(data.message);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input placeholder="Skill" value={skill} onChange={(e) => setSkill(e.target.value)} required />
      <input placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} required />
      <input placeholder="Contact" value={contact} onChange={(e) => setContact(e.target.value)} required />
      <button type="submit">Post Job</button>
    </form>
  );
}