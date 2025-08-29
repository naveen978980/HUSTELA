import React from 'react';

export default function contact() {
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
          height: 100%;
          background: linear-gradient(to right, #e3f2fd, #ffffff);
        }

        .page-container {
          font-family: 'Segoe UI', sans-serif;
          min-height: 100vh;
          background: linear-gradient(to bottom right, #e3f2fd, #ffffff);
          padding: 60px 20px;
        }

        .section {
          max-width: 900px;
          margin: 0 auto 80px auto;
          background: white;
          padding: 40px;
          border-radius: 12px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
        }

        .section h2 {
          font-size: 2.4rem;
          margin-bottom: 20px;
          color: #1a237e;
        }

        .section p {
          font-size: 1.1rem;
          line-height: 1.6;
          color: #444;
        }

        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 14px;
          margin-bottom: 20px;
          border: 1px solid #ccc;
          border-radius: 8px;
          font-size: 1rem;
        }

        .contact-form textarea {
          resize: vertical;
          height: 120px;
        }

        .contact-form button {
          background-color: #1a73e8;
          color: white;
          padding: 12px 20px;
          border: none;
          border-radius: 6px;
          font-size: 1rem;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        .contact-form button:hover {
          background-color: #0f5dd1;
        }

        .contact-info {
          margin-top: 20px;
          font-size: 1rem;
          color: #555;
        }

        @media (max-width: 600px) {
          .section {
            padding: 30px 20px;
          }

          .section h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>

      <div className="page-container">
        {/* About Section */}
        <div className="section">
          <h2>About Hustela</h2>
          <p>
          Hustela is a digital platform designed to connect skilled labourers and daily wage workers with contractors, homeowners, and businesses in need of their services. Our mission is to bridge the gap between supply and demand of local talent, especially in underserved regions where employment opportunities are often inaccessible.
          </p>
          <p>
            Whether you're looking for an electrician, a plumber, a carpenter, or any other local service provider, RozgarYojna makes it easy to find and contact them directly. We aim to promote dignity of work, ensure fair opportunities, and contribute to local economic growth.
          </p>
          <p>
            Our platform is built with love and passion by students to empower communities with technology. We envision a future where no one is left behind in the search for honest work.
          </p>
        </div>

        {/* Contact Section */}
        <div className="section">
          <h2>Contact Us</h2>
          <form className="contact-form">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
          <div className="contact-info">
            Or email us at <strong>support@hustela.in</strong><br />
            Call: <strong>+91 9876543210</strong> (Mon–Fri, 10AM–6PM)
          </div>
        </div>
      </div>
    </>
  );
}
