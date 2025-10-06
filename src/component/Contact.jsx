import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const iconStyle = { color: '#fff', backgroundColor: '#000', borderRadius: '6px', padding: '8px', width: '40px', height: '40px' };
  const linkStyle = { display: 'inline-flex', alignItems: 'center', justifyContent: 'center' };

  const heroStyle = { width: '100%', minHeight: '40vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(180deg, rgba(0,0,0,0.55), rgba(0,0,0,0.55))', color: '#fff', textAlign: 'center' };
  const formSectionStyle = { backgroundColor: '#e6e6e6', padding: '3rem 1rem' };
  const formContainerStyle = { maxWidth: '980px', margin: '0 auto', backgroundColor: '#f7f7f7', borderRadius: '8px', padding: '2rem', boxShadow: '0 2px 10px rgba(0,0,0,0.08)' };
  const formTitleStyle = { textAlign: 'center', marginBottom: '1.25rem', color: '#333', fontWeight: 600, fontSize: 'clamp(1rem, 2.5vw, 1.25rem)' };
  const gridStyle = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' };
  const inputStyle = { width: '100%', padding: '0.9rem 1rem', borderRadius: '6px', border: '1px solid #d0d0d0', outline: 'none', fontSize: '1rem', backgroundColor: '#fff' };
  const textareaStyle = { ...inputStyle, minHeight: '140px', resize: 'vertical' };
  const sendBtnWrapStyle = { display: 'flex', justifyContent: 'center', marginTop: '1.25rem' };
  const sendBtnStyle = { backgroundColor: '#001524', color: '#fff', border: 'none', padding: '0.9rem 2rem', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 };
  const footerStyle = { backgroundColor: '#001524', color: '#fff', padding: '2.5rem 1rem' };
  const footerGridStyle = { maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '2rem', alignItems: 'start' };
  const listStyle = { listStyle: 'none', padding: 0, margin: 0 };

  return (
    <div>
      <section style={heroStyle}><h1 style={{ fontSize: 'clamp(2rem, 6vw, 3rem)', fontWeight: 700, letterSpacing: '0.5px' }}>Get In Touch</h1></section>
      <section style={formSectionStyle}>
        <div style={formContainerStyle}>
          <h3 style={formTitleStyle}>How can we help?</h3>
          <form action="https://formsubmit.co/olaleyebabatun@gmail.com" method="POST">
            <input type="hidden" name="_subject" value="New Contact Submission - Art Portfolio" />
            <input type="hidden" name="_template" value="table" />
            <input type="hidden" name="_captcha" value="false" />
            <div style={gridStyle}>
              <input style={inputStyle} type="text" name="first_name" placeholder="First Name" required />
              <input style={inputStyle} type="email" name="email" placeholder="Email" required />
              <input style={inputStyle} type="text" name="last_name" placeholder="Last Name" required />
              <input style={inputStyle} type="tel" name="phone" placeholder="Phone No." />
            </div>
            <div style={{ marginTop: '1rem' }}>
              <input style={inputStyle} type="text" name="referrer" placeholder="How did you hear about us" />
            </div>
            <div style={{ marginTop: '1rem' }}>
              <textarea style={textareaStyle} name="message" placeholder="Let Us Know How We Can Help You" required />
            </div>
            <div style={sendBtnWrapStyle}><button type="submit" style={sendBtnStyle}>Send</button></div>
          </form>
        </div>
      </section>
      <footer style={footerStyle}>
        <div style={footerGridStyle}>
          <div>
            <h4 style={{ marginBottom: '0.75rem' }}>Ongoing Series:</h4>
            <ul style={listStyle}>
              <li>PUZZLE SERIES</li>
              <li>OBA OBIRIN</li>
              <li>MOVE BY MOVE</li>
            </ul>
            <h4 style={{ marginTop: '1.5rem', marginBottom: '0.75rem' }}>Site Map</h4>
            <ul style={listStyle}>
              <li>HOME</li>
              <li>ABOUT</li>
              <li>PROJECTS</li>
              <li>CONTACT</li>
            </ul>
          </div>
          <div>
            <h4 style={{ marginBottom: '0.75rem' }}>Contact</h4>
            <p>Lagos — Los Angeles — London</p>
            <p>olaleyebabatun@gmail.com</p>
          </div>
          <div>
            <h4 style={{ marginBottom: '0.75rem' }}>Connect on Socials</h4>
            <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
              <a href="https://web.facebook.com/babatunde.olaleye.773" target="_blank" rel="noopener noreferrer" style={linkStyle} aria-label="Facebook"><FaFacebookF style={iconStyle} /></a>
              <a href="https://twitter.com/YOUR_TWITTER_USERNAME" target="_blank" rel="noopener noreferrer" style={linkStyle} aria-label="Twitter"><FaTwitter style={iconStyle} /></a>
              <a href="https://www.instagram.com/abdullahi_olaleye" target="_blank" rel="noopener noreferrer" style={linkStyle} aria-label="Instagram"><FaInstagram style={iconStyle} /></a>
              <a href="mailto:olaleyebabatun@gmail.com" style={linkStyle} aria-label="Email"><FaEnvelope style={iconStyle} /></a>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: '0.75rem' }}>Newsletter</h4>
            <form action="https://formsubmit.co/olaleyebabatun@gmail.com" method="POST">
              <input type="hidden" name="_subject" value="Newsletter Subscription" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="email" name="newsletter_email" placeholder="Enter Your Email" style={{ ...inputStyle, backgroundColor: '#1a1a1a', color: '#fff', borderColor: '#333' }} required />
              <button type="submit" style={{ ...sendBtnStyle, marginTop: '0.75rem' }}>Subscribe</button>
            </form>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
