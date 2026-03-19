import React from 'react';
import { FiCode, FiLayers, FiCloud, FiTool } from 'react-icons/fi';
import './Skills.css';

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming",
      icon: <FiCode size={30} />,
      skills: ["Java", "Python", "C", "JavaScript", "HTML & CSS"]
    },
    {
      title: "Technologies & Frameworks",
      icon: <FiLayers size={30} />,
      skills: ["React", "Node.js", "Express.js", "MongoDB", "MySQL"]
    },
    {
      title: "DevOps & Cloud",
      icon: <FiCloud size={30} />,
      skills: ["AWS (EC2, S3 – Learning)", "Docker (Basics)"]
    },
    {
      title: "Tools",
      icon: <FiTool size={30} />,
      skills: ["Git & GitHub", "Postman", "VS Code"]
    }
  ];

  return (
    <section id="skills" className="skills-section">
      <h2 className="section-title">My Skills</h2>
      <p className="section-subtitle">What I bring to the table</p>
      
      <div className="skills-container">
        {skillCategories.map((category, index) => (
          <div className="skill-card" key={index}>
            <div className="skill-icon">{category.icon}</div>
            <h3 className="skill-card-title">{category.title}</h3>
            <ul className="skill-list">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="skill-item">
                  <span className="skill-bullet">▹</span> {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
