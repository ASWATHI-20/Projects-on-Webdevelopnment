import React, { useState } from 'react';
import { FiBook, FiAward, FiStar } from 'react-icons/fi';
import './Experience.css';

const journeyData = [
  {
    type: 'journey',
    title: 'Self-Learning Developer',
    entity: 'Independent',
    date: 'Present',
    description: 'Actively working on projects and learning full-stack development, DevOps, and cloud technologies.'
  },
  {
    type: 'journey',
    title: 'Engineering Student',
    entity: 'University',
    date: 'Ongoing',
    description: 'Currently pursuing my degree and building strong fundamentals in programming and development.'
  },
  {
    type: 'certifications',
    title: 'Python Programming Workshop',
    entity: 'Haapps',
    date: 'Completed',
    description: 'Completed comprehensive workshop certification in Python programming.'
  },
  {
    type: 'achievements',
    title: 'Practical Project Delivery',
    entity: 'Full Stack & Frontend',
    date: 'Ongoing',
    description: 'Successfully built and deployed multiple full-stack and frontend applications.'
  },
  {
    type: 'achievements',
    title: 'Cloud & DevOps Upskilling',
    entity: 'Self-Taught',
    date: 'Present',
    description: 'Actively learning and implementing DevOps practices and cloud technologies.'
  },
  {
    type: 'achievements',
    title: 'Technical Participation',
    entity: 'Learning Programs',
    date: 'Past/Present',
    description: 'Consistently participated in various technical learning programs and bootcamps.'
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState('all');

  const filteredExperience = activeTab === 'all' 
    ? journeyData 
    : journeyData.filter(item => item.type === activeTab);

  return (
    <section id="experience" className="experience-section">
      <h2 className="section-title">My Journey</h2>
      <p className="section-subtitle">Experience, Certifications & Achievements</p>

      <div className="experience-tabs">
        <button 
          className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`}
          onClick={() => setActiveTab('all')}
        >
          All
        </button>
        <button 
          className={`tab-btn ${activeTab === 'journey' ? 'active' : ''}`}
          onClick={() => setActiveTab('journey')}
        >
          Journey
        </button>
        <button 
          className={`tab-btn ${activeTab === 'certifications' ? 'active' : ''}`}
          onClick={() => setActiveTab('certifications')}
        >
          Certifications
        </button>
        <button 
          className={`tab-btn ${activeTab === 'achievements' ? 'active' : ''}`}
          onClick={() => setActiveTab('achievements')}
        >
          Achievements
        </button>
      </div>

      <div className="timeline-container">
        {filteredExperience.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-icon">
              {item.type === 'journey' && <FiBook />}
              {item.type === 'certifications' && <FiAward />}
              {item.type === 'achievements' && <FiStar />}
            </div>
            <div className="timeline-content">
              <h3 className="timeline-title">{item.title}</h3>
              <h4 className="timeline-entity">{item.entity}</h4>
              <span className="timeline-date">{item.date}</span>
              <p className="timeline-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
