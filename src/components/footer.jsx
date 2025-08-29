import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#111',
    color: 'white',
    padding: '20px 0',
    fontFamily: 'sans-serif',
    marginTop: '50px',
    textAlign: 'center',
  };

  const containerStyle = {
    width: '90%',
    maxWidth: '1200px',
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    alignItems: 'center',
  };

  const titleStyle = {
    margin: 0,
    fontSize: '24px',
  };

  const descStyle = {
    margin: '4px 0',
    fontSize: '14px',
    color: '#ccc',
  };

  const linksStyle = {
    display: 'flex',
    gap: '20px',
    flexWrap: 'wrap',
    justifyContent: 'center',
  };

  const linkStyle = {
    color: '#aaa',
    textDecoration: 'none',
    fontSize: '14px',
  };

  const bottomText = {
    fontSize: '13px',
    color: '#888',
    marginTop: '20px',
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <div>
          <h2 style={titleStyle}>Hustela</h2>
          <p style={descStyle}>Empowering local workers & contractors</p>
        </div>
        <div style={linksStyle}>
          <a href="#" style={linkStyle}>About</a>
          <a href="#" style={linkStyle}>Contact</a>
          <a href="#" style={linkStyle}>Privacy</a>
        </div>
        <div style={bottomText}>
          &copy; {new Date().getFullYear()} Hustela. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;