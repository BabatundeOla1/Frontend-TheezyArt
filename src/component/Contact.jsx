import React from 'react';

const Contact = () => {
  return (
    <div style={{ padding: '2rem' }}>
      <h2>Contact</h2>
      <p>Connect with me on social media:</p>
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        <li>
          <a href="https://web.facebook.com/babatunde.olaleye.773" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </li>
        <li>
          <a href="https://www.instagram.com/abdullahi_olaleye" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </li>
        <li>
          <a href="https://twitter.com/YOUR_TWITTER_USERNAME" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contact;
