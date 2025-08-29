import React, { useState } from 'react';

const LoginRegisterForm = () => {
  const [activeForm, setActiveForm] = useState('login');

  const switchForm = (formId) => {
    setActiveForm(formId);
  };

  return (
    <>
      <style>{`
         * {
    padding: 0; margin: 0; box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
  }

  html, body, #root {
  height: 100%;
  width: 100%;
  margin: 0;
  padding: 0;
  background-image: url("C:\Users\Admin\Desktop\bg.jpg"); 
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
}


  .background {
    width: 430px;
    height: 520px;
    position: absolute;
    transform: translate(-50%, -50%);
    left: 50%;
    top: 50%;
    z-index: -1;
  }
        .background .shape {
          height: 200px;
          width: 200px;
          position: absolute;
          border-radius: 50%;
        }
        .shape:first-child {
          background: linear-gradient(#1845ad, #23a2f6);
          left: -80px;
          top: -80px;
        }
        .shape:last-child {
          background: linear-gradient(to right, #ff512f, #f09819);
          right: -30px;
          bottom: -80px;
        }
        .form-wrapper {
          width: 400px;
          margin: 80px auto;
          background-color: rgba(255, 255, 255, 0.13);
          border-radius: 10px;
          backdrop-filter: blur(10px);
          border: 2px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
          padding: 40px 30px;
          color: white;
        }
        .tabs {
          display: flex;
          justify-content: space-between;
          margin-bottom: 30px;
        }
        .tab {
          flex: 1;
          padding: 10px;
          cursor: pointer;
          background: rgba(255, 255, 255, 0.1);
          color: #fff;
          text-align: center;
          font-weight: 500;
          border-radius: 8px;
          margin: 0 5px;
          transition: 0.3s;
        }
        .tab.active {
          background-color: #fff;
          color: #080710;
        }
        form {
          display: none;
        }
        form.active {
          display: block;
        }
          
        form label {
          display: block;
          margin-top: 20px;
          font-size: 14px;
        }
        form input {
          display: block;
          width: 100%;
          height: 45px;
          margin-top: 8px;
          padding: 0 10px;
          border-radius: 5px;
          background-color: rgba(255, 255, 255, 0.07);
          color: #fff;
          border: none;
          font-size: 14px;
        }
        form input::placeholder {
          color: #e5e5e5;
        }
        form button {
          margin-top: 30px;
          width: 100%;
          background-color: #fff;
          color: #080710;
          padding: 12px;
          border: none;
          border-radius: 6px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
        }
      `}</style>

      <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>

      <div className="form-wrapper">
        <div className="tabs">
          <div className={`tab ${activeForm === 'login' ? 'active' : ''}`} onClick={() => switchForm('login')}>
            Login
          </div>
          <div className={`tab ${activeForm === 'labour' ? 'active' : ''}`} onClick={() => switchForm('labour')}>
            Register Labour
          </div>
          <div className={`tab ${activeForm === 'public' ? 'active' : ''}`} onClick={() => switchForm('public')}>
            Register Public
          </div>
        </div>

        {/* Login Form */}
        <form className={activeForm === 'login' ? 'active' : ''}>
          <h3 style={{ textAlign: 'center' }}>Login</h3>
          <label htmlFor="login-username">Username</label>
          <input type="text" id="login-username" placeholder="Email or Phone" required />

          <label htmlFor="login-password">Password</label>
          <input type="password" id="login-password" placeholder="Password" required />

          <button type="submit">Log In</button>
        </form>

        {/* Register Labour Form */}
        <form className={activeForm === 'labour' ? 'active' : ''}>
          <h3 style={{ textAlign: 'center' }}>Register as Labour</h3>
          <label htmlFor="labour-name">Name</label>
          <input type="text" id="labour-name" placeholder="Your Name" required />

          <label htmlFor="labour-job">Job</label>
          <input type="text" id="labour-job" placeholder="Job Role" required />

          <label htmlFor="labour-place">Place</label>
          <input type="text" id="labour-place" placeholder="Location" required />

          <button type="submit">Register</button>
        </form>

        {/* Register Public Form */}
        <form className={activeForm === 'public' ? 'active' : ''}>
          <h3 style={{ textAlign: 'center' }}>Register as Public</h3>
          <label htmlFor="public-username">Username</label>
          <input type="text" id="public-username" placeholder="Username" required />

          <label htmlFor="public-email">Email</label>
          <input type="email" id="public-email" placeholder="Email" required />

          <label htmlFor="public-password">Password</label>
          <input type="password" id="public-password" placeholder="Password" required />

          <button type="submit">Register</button>
        </form>
      </div>
    </>
  );
};

export default LoginRegisterForm;
