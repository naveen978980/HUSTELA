import React, { useState } from 'react';

export default function LoginRegisterForm() {
  const [activeForm, setActiveForm] = useState('login');

  const handleLogin = (e) => {
    e.preventDefault();
    alert('Logged in!');
  };

  const handleRegister = (type) => (e) => {
    e.preventDefault();
    alert(`Registered as ${type}`);
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        body, html, #root {
          width: 100%;
          height: 100%;
          background-image: linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);
        }

        .form-wrapper {
          width: 100%;
          max-width: 400px;
          margin: 60px auto;
          padding: 30px;
          background: rgba(255, 255, 255, 0.25);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          color: #0f172a;
          box-shadow: 0 8px 24px rgba(0,0,0,0.1);
        }

        .form-header {
          text-align: center;
          margin-bottom: 20px;
        }

        .form-title {
          font-size: 1.8rem;
          color: #1e3a8a;
          margin-bottom: 10px;
        }

        .tabs {
          display: flex;
          justify-content: center;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }

        .tab {
          flex: 1;
          padding: 10px;
          text-align: center;
          background: rgba(255, 255, 255, 0.3);
          cursor: pointer;
          color: #0f172a;
          font-size: 1rem;
          transition: background 0.3s;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center; /* Optional but safe */
        }

        .tab.active {
          background: white;
          color: #1e3a8a;
          font-weight: 600;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center; /* Optional but safe */

        }

        form {
          display: none;
          margin-top: 20px;
        }

        form.active {
          display: block;
        }

        input, select {
          width: 100%;
          margin: 10px 0;
          padding: 10px;
          background: rgba(255, 255, 255, 0.4);
          border: none;
          border-radius: 12px;
          color: #0f172a;
          font-size: 1rem;
        }

        input::placeholder, select {
          color: #334155;
        }

        button {
          width: 100%;
          padding: 12px;
          margin-top: 10px;
          background: #1e3a8a;
          color: white;
          border: none;
          border-radius: 12px;
          font-weight: bold;
          cursor: pointer;
          transition: background 0.3s;
        }

        button:hover {
          background: #2563eb;
        }
      `}</style>

      <div className="form-wrapper">
        <div className="form-header">
          <h2 className="form-title">Welcome</h2>
          <div className="tabs">
            <div
              className={`tab ${activeForm === 'login' ? 'active' : ''}`}
              onClick={() => setActiveForm('login')}
            >
              Login
            </div>
            <div
              className={`tab ${activeForm === 'labour' ? 'active' : ''}`}
              onClick={() => setActiveForm('labour')}
            >
              Register Labour
            </div>
            <div
              className={`tab ${activeForm === 'public' ? 'active' : ''}`}
              onClick={() => setActiveForm('public')}
            >
              Register Public
            </div>
          </div>
        </div>

        <form className={activeForm === 'login' ? 'active' : ''} onSubmit={handleLogin}>
          <input type="text" placeholder="Name" required />
          <input type="password" placeholder="Password" required />
          <select required>
            <option value="">hello world</option>
            <option value="public">Public</option>
            <option value="labour">Labour</option>
          </select>
          <button type="submit">Login</button>
        </form>

        <form className={activeForm === 'labour' ? 'active' : ''} onSubmit={handleRegister('Labour')}>
          <input type="text" placeholder="Name" required />
          <input type="password" placeholder="Password" required />
          <input type="text" placeholder="Area" required />
          <button type="submit">Register Labour</button>
        </form>

        <form className={activeForm === 'public' ? 'active' : ''} onSubmit={handleRegister('Public')}>
          <input type="text" placeholder="Name" required />
          <input type="password" placeholder="Password" required />
          <input type="text" placeholder="Place" required />
          <button type="submit">Register Public</button>
        </form>
      </div>
    </>
  );
}