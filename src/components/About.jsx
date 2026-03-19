import React from 'react';
import './About.css';

const About = () => {
  return (
    <section id="about" className="about-section">
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">Get to know me</p>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm Aswathi, an engineering student passionate about web development and modern technologies. I focus on building full-stack applications using the MERN stack and continuously improving my problem-solving skills.
          </p>
          <p>
            Currently, I am exploring DevOps and cloud platforms like AWS to understand how applications are deployed and scaled in real-world environments.
          </p>
          <p>
            I enjoy learning by building projects and aim to become a developer capable of designing, developing, and deploying complete applications.
          </p>
        </div>
        
        <div className="about-image-container">
          <div className="about-image-wrapper">
            {/* Placeholder for actual image */}
            <div className="about-image-placeholder">
              <span>AKJ</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
