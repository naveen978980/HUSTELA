import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <>
      <style>{`
        .navbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          padding: 16px 24px;
         background-color: #ffffff;
color: #1976d2;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

          font-family: sans-serif;
        }

        .navbar h1 {
          font-size: 24px;
          font-weight: bold;
          color: #2c3e50;
          margin: 0;
        }

        .nav-links {
          display: flex;
          gap: 16px;
          margin-top: 8px;
        }

        .nav-links a {
          text-decoration: none;
          color: #333;
          font-weight: 500;
          transition: color 0.3s ease;
          padding: 6px 12px;
        }

        .nav-links a:hover {
          color: #007bff;
          background-color: #f0f0f0;
          border-radius: 4px;
        }

        @media (max-width: 600px) {
          .navbar {
            flex-direction: column;
            align-items: flex-start;
          }

          .nav-links {
            flex-direction: column;
            gap: 10px;
          }
        }
      `}</style>

      <nav className="navbar">
        <h1>HUSTELA</h1>
        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/login">Login</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/Show">Show</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>
    </>
  );
}
