import React, { useEffect, useState } from 'react';

export default function MyJobs() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:5000/api/jobs/my', {
      headers: { 'Authorization': `Bearer ${token}` }
    })
      .then(res => res.json())
      .then(data => setJobs(data));
  }, []);

  return (
    <div>
      <h2>My Posted Jobs</h2>
      <ul>
        {jobs.map(job => (
          <li key={job._id}>{job.title} - {job.skill} - {job.location}</li>
        ))}
      </ul>
    </div>
  );
}
