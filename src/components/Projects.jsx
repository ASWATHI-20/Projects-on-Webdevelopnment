import React, { useState } from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import './Projects.css';

const projectsData = [
  {
    id: 1,
    title: "E-Commerce Web Application",
    description: "A full-stack web application with authentication, product management, and cart functionality. Includes user authentication, product listing/filtering, and a shopping cart system.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "https://github.com/yourusername",
    demo: "https://your-demo-link",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management Application",
    description: "A simple and responsive task manager to track daily activities. Features a clean interface, responsive UI, and the ability to add, update, and delete tasks.",
    tech: ["React", "JavaScript", "CSS"],
    github: "https://github.com/yourusername",
    demo: "https://your-demo-link",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Application",
    description: "A dynamic weather app that shows real-time data using API integration. Features a user-friendly interface to display current weather conditions.",
    tech: ["HTML", "CSS", "JavaScript", "API"],
    github: "https://github.com/yourusername",
    demo: "https://your-demo-link",
    category: "Frontend"
  },
  {
    id: 4,
    title: "REST API Service",
    description: "Backend API with authentication and CRUD operations. Features JWT authentication and structured API design.",
    tech: ["Node.js", "Express", "MySQL"],
    github: "https://github.com/yourusername",
    demo: "",
    category: "Backend"
  }
];

const categories = ["All", "Frontend", "Backend", "Full Stack"];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filteredProjects = activeFilter === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">Some things I've built</p>
      
      <div className="filter-container">
        {categories.map((cat, index) => (
          <button 
            key={index} 
            className={`filter-btn ${activeFilter === cat ? 'active' : ''}`}
            onClick={() => setActiveFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      
      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <ul className="project-tech-list">
                {project.tech.map((tech, idx) => (
                  <li key={idx} className="project-tech-item">{tech}</li>
                ))}
              </ul>
              
              <div className="project-links">
                {project.github && (
                  <a href={project.github} target="_blank" rel="noreferrer" aria-label="GitHub Link">
                    <FiGithub size={22} />
                  </a>
                )}
                {project.demo && (
                  <a href={project.demo} target="_blank" rel="noreferrer" aria-label="External Demo Link">
                    <FiExternalLink size={22} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
