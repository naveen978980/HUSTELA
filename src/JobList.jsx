import React, { useState, useEffect } from 'react';

export default function JobList() {
  const [jobs, setJobs] = useState([]);
  const [skill, setSkill] = useState('');
  const [location, setLocation] = useState('');

  useEffect(() => {
    let query = '';
    if (skill) query += `skill=${skill}&`;
    if (location) query += `location=${location}`;

    fetch(`http://localhost:5000/api/jobs/all?${query}`)
      .then(res => res.json())
      .then(data => setJobs(data));
  }, [skill, location]);

  return (
    <div>
      <h2>Available Jobs</h2>
      <input placeholder="Skill" value={skill} onChange={e => setSkill(e.target.value)} />
      <input placeholder="Location" value={location} onChange={e => setLocation(e.target.value)} />
      <ul>
        {jobs.map(job => (
          <li key={job._id}>{job.title} - {job.skill} - {job.location} - {job.contact}</li>
        ))}
      </ul>
    </div>
  );
}
