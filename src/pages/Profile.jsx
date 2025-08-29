import { useState } from 'react';

export default function Profile() {
  const user = JSON.parse(localStorage.getItem('loggedUser'));

  const [bookings, setBookings] = useState([
    { workerId: 1, date: '2025-07-14', client: 'Akash', location: 'Delhi' },
    { workerId: 2, date: '2025-07-15', client: 'Maya', location: 'Pune' },
    { workerId: 1, date: '2025-07-16', client: 'Ritu', location: 'Noida' }
  ]);

  const [newDate, setNewDate] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newClient, setNewClient] = useState('');

  const myJobs = bookings.filter(job => job.workerId === user?.id);

  const handleAddSchedule = () => {
    if (!newDate || !newLocation || !newClient) return;

    const newJob = {
      workerId: user.id,
      date: newDate,
      location: newLocation,
      client: newClient
    };

    setBookings([...bookings, newJob]);
    setNewDate('');
    setNewLocation('');
    setNewClient('');
  };

  const handleDeleteSchedule = (indexToDelete) => {
    const updated = bookings.filter((job, i) => {
      const isUserJob = job.workerId === user.id;
      const userJobIndex = myJobs.findIndex(j => j === job);
      return !(isUserJob && userJobIndex === indexToDelete);
    });
    setBookings(updated);
  };

  return (
    <>
      <style>{`
      * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

       body, html, #root {
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, #e3f2fd, #ffffff);
        }

        .profile-container {
          max-width: 700px;
          margin: 40px auto;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          padding: 24px;
          font-family: sans-serif;
        }

        .profile-container h2 {
          font-size: 24px;
          margin-bottom: 16px;
          color: #2c3e50;
        }

        .profile-container p {
          margin: 4px 0;
          color: #333;
        }

        .schedule-list {
          margin-top: 16px;
        }

        .job-card {
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #ddd;
          padding: 12px;
          margin-bottom: 10px;
          border-radius: 6px;
        }

        .job-card p {
          margin: 2px 0;
        }

        .btn-delete {
          background-color: #e74c3c;
          color: white;
          border: none;
          padding: 6px 12px;
          border-radius: 4px;
          cursor: pointer;
        }

        .btn-delete:hover {
          background-color: #c0392b;
        }

        .form-section {
          margin-top: 24px;
        }

        .form-section h4 {
          margin-bottom: 12px;
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 10px;
        }

        .form-grid input {
          padding: 8px;
          border: 1px solid #ccc;
          border-radius: 4px;
        }

        .btn-add {
          margin-top: 12px;
          background-color: #007bff;
          color: white;
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
        }

        .btn-add:hover {
          background-color: #0056b3;
        }

        .login-warning {
          color: red;
          font-weight: bold;
        }

        @media (max-width: 600px) {
          .form-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <div className="profile-container">
        <h2>My Profile</h2>

        {user ? (
          <>
            <p><strong>Name:</strong> {user.name}</p>
            <p><strong>Skill:</strong> {user.skill}</p>
            <p><strong>Email:</strong> {user.email}</p>

            <div className="schedule-list">
              <h3>My Schedule</h3>
              {myJobs.length === 0 ? (
                <p>No upcoming jobs</p>
              ) : (
                myJobs.map((job, index) => (
                  <div className="job-card" key={index}>
                    <div>
                      <p><strong>Date:</strong> {job.date}</p>
                      <p><strong>Client:</strong> {job.client}</p>
                      <p><strong>Location:</strong> {job.location}</p>
                    </div>
                    <button className="btn-delete" onClick={() => handleDeleteSchedule(index)}>
                      Delete
                    </button>
                  </div>
                ))
              )}
            </div>

            <div className="form-section">
              <h4>Add New Schedule</h4>
              <div className="form-grid">
                <input
                  type="date"
                  value={newDate}
                  onChange={(e) => setNewDate(e.target.value)}
                />
                <input
                  type="text"
                  value={newClient}
                  onChange={(e) => setNewClient(e.target.value)}
                  placeholder="Client"
                />
                <input
                  type="text"
                  value={newLocation}
                  onChange={(e) => setNewLocation(e.target.value)}
                  placeholder="Location"
                />
              </div>
              <button className="btn-add" onClick={handleAddSchedule}>
                Add Schedule
              </button>
            </div>
          </>
        ) : (
          <p className="login-warning">Please login first</p>
        )}
      </div>
    </>
  );
}
localStorage.setItem('loggedUser', JSON.stringify({
  id: 1,
  name: 'Ravi Kumar',
  skill: 'Electrician',
  email: 'ravi@example.com'
}));
