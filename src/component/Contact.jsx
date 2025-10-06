import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const iconStyle = { color: '#fff', backgroundColor: '#000', borderRadius: '6px', padding: '8px', width: '40px', height: '40px' };
  const linkStyle = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center' };

  return (
    <div style={{ padding: '2rem', backgroundColor: '#111', color: '#fff' }}>
      <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>Get In Touch</h2>
      <p style={{ textAlign: 'left', marginBottom: '1rem' }}>Connect on Socials</p>
      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
        <a href="https://web.facebook.com/babatunde.olaleye.773" target="_blank" rel="noopener noreferrer" style={linkStyle} aria-label="Facebook">
          <FaFacebookF style={iconStyle} />
        </a>
        <a href="https://twitter.com/YOUR_TWITTER_USERNAME" target="_blank" rel="noopener noreferrer" style={linkStyle} aria-label="Twitter">
          <FaTwitter style={iconStyle} />
        </a>
        <a href="https://www.instagram.com/abdullahi_olaleye" target="_blank" rel="noopener noreferrer" style={linkStyle} aria-label="Instagram">
          <FaInstagram style={iconStyle} />
        </a>
        <a href="mailto:olaleyebabatun@gmail.com" style={linkStyle} aria-label="Email">
          <FaEnvelope style={iconStyle} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
