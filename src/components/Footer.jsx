import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Portfolio<span>.</span></h3>
            <p>Building fully custom digital experiences with React.</p>
          </div>
          
          <div className="footer-social">
            <a href="https://github.com/placeholder" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/placeholder" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={20} />
            </a>
            <a href="https://twitter.com/placeholder" target="_blank" rel="noreferrer" aria-label="Twitter">
              <FiTwitter size={20} />
            </a>
            <a href="mailto:email@example.com" aria-label="Email">
              <FiMail size={20} />
            </a>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} ASWATHI K J. All rights reserved.</p>
          <div className="footer-links">
            {/* Future links like Privacy Policy could go here */}
            <p>Designed & Built with React & CSS</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
