import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function HomePage() {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/Show');
  };

  return (
    <>
      <style>{`
        * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }
        body, html, #root {
          width: 100%;
          min-height: 100%;
          background: linear-gradient(to right, #e3f2fd, #ffffff);
        }

        .homepage {
          background: linear-gradient(to right, #e3f2fd, #ffffff);
          font-family: 'Segoe UI', sans-serif;
        }

        .hero-section {
          display: flex;
          flex-direction: row;
          min-height: 100vh;
        }

        .left-section {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 80px 60px;
        }

        .title {
          font-size: 3.5rem;
          font-weight: bold;
          color: #0d47a1;
          margin-bottom: 20px;
        }

        .subtitle {
          font-size: 1.3rem;
          color: #37474f;
          margin-bottom: 30px;
          line-height: 1.7;
        }

        .cta-button {
          padding: 14px 28px;
          font-size: 1.1rem;
          background-color: #1565c0;
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          width: fit-content;
          transition: 0.3s;
        }

        .cta-button:hover {
          background-color: #0d47a1;
        }

        .right-section {
          flex: 1;
          background: url('https://images.unsplash.com/photo-1605902711622-cfb43c4437d1?auto=format&fit=crop&w=1050&q=80') no-repeat center center;
          background-size: cover;
        }

        .info-section {
          padding: 100px 50px;
          background: linear-gradient(to right, #e3f2fd, #ffffff);
          text-align: center;
        }

        .info-section h2 {
          font-size: 2.5rem;
          margin-bottom: 25px;
          color: #1a237e;
        }

        .info-section p {
          max-width: 1000px;
          margin: 0 auto;
          font-size: 1.2rem;
          color: #444;
          line-height: 1.9;
        }

        .benefits-section {
          background: linear-gradient(to right, #e3f2fd, #ffffff);
          padding: 100px 50px;
          text-align: center;
        }

        .benefits-section h2 {
          font-size: 2.4rem;
          color: #1a237e;
          margin-bottom: 40px;
        }

        .benefit-cards {
          display: flex;
          justify-content: space-around;
          gap: 30px;
          flex-wrap: wrap;
        }

        .card {
          background: #f0f4ff;
          padding: 30px;
          border-radius: 12px;
          flex: 1;
          min-width: 280px;
          max-width: 340px;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .card h3 {
          color: #0d47a1;
          margin-bottom: 15px;
        }

        .card p {
          color: #333;
          font-size: 1rem;
          line-height: 1.7;
        }

        .bg-section {
          background-image: url('https://images.unsplash.com/photo-1581093588401-0a46e4a0d56b?auto=format&fit=crop&w=1350&q=80');
          background-size: cover;
          background-position: center;
          padding: 100px 30px;
          color: white;
          text-align: center;
          position: relative;
          margin-bottom:0px;
        }

        .bg-section::before {
          content: "";
          position: absolute;
          inset: 0;
          background-color: rgba(0, 0, 0, 0.6);
        }

        .bg-section-content {
          position: relative;
          z-index: 1;
        }

        .bg-section h2 {
          font-size: 2.8rem;
          margin-bottom: 25px;
        }

        .bg-section p {
          max-width: 1000px;
          margin: 0 auto;
          font-size: 1.3rem;
          line-height: 2.0;
          color: #f0f0f0;
        }

        @media (max-width: 768px) {
          .hero-section {
            flex-direction: column;
          }

          .left-section,
          .right-section {
            padding: 30px;
            flex: unset;
            height: 50vh;
          }

          .title {
            font-size: 2.2rem;
          }

          .info-section h2,
          .benefits-section h2,
          .bg-section h2 {
            font-size: 1.8rem;
          }

          .info-section p,
          .bg-section p {
            font-size: 1rem;
          }

          .benefit-cards {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>

      <div className="homepage">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="left-section">
            <h1 className="title">HUSTELA</h1>
            <p className="subtitle">
              Hustela is a digital platform revolutionizing employment in India. Whether you're a skilled worker looking for jobs or a contractor in need of trusted labour, our platform bridges the gap using real-time listings, skill filters, and direct communication.
            </p>
            <button className="cta-button" onClick={handleGetStarted}>
               Explore Jobs
            </button>
          </div>
          <div className="right-section"></div>
        </div>

        {/* Info Section */}
        <div className="info-section">
          <h2>How Hustela Works</h2>
          <p>
            Get started by registering in just a minute. Search jobs by category or skill, apply in a click, or find reliable workers in your local area. RozgarYojna streamlines the process of employment and hiring for daily wage workers, small contractors, and households alike.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <h2> Key Benefits</h2>
          <div className="benefit-cards">
            <div className="card">
              <h3>For Workers</h3>
              <p>Promote your skills, find verified jobs nearby, and boost your profile through ratings and work history. Get contacted by contractors directly.</p>
            </div>
            <div className="card">
              <h3>For Contractors</h3>
              <p>Find reliable workers quickly with our verified profiles. Save time, negotiate directly, and manage your workforce digitally with ease.</p>
            </div>
            <div className="card">
              <h3>For Local Communities</h3>
              <p>Digitally empower your area by connecting opportunities with talent. Drive transparency, trust, and dignity of work across all regions.</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
