import React, { useEffect, useState } from 'react';
import { FiArrowDown } from 'react-icons/fi';
import './Hero.css';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "DevOps & Cloud Enthusiast";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);
    
    return () => clearInterval(typingInterval);
  }, []);

  return (
    <section id="home" className="hero-section fade-in">
      <div className="hero-content">
        <p className="hero-greeting">Hi, I'm</p>
        <h1 className="hero-name">ASWATHI K J<span>.</span></h1>
        <h2 className="hero-title">
          Full Stack Developer | <br/>
          <span className="hero-typing">{text}</span>
          <span className="cursor">|</span>
        </h2>
        <p className="hero-description">
          I build scalable web applications and explore cloud technologies to solve real-world problems.
        </p>
        
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Work</a>
          <a href="#contact" className="btn btn-outline">Contact Me</a>
        </div>
      </div>
      
      <div className="hero-scroll-indicator">
        <a href="#about" aria-label="Scroll down">
          <div className="mouse"></div>
          <FiArrowDown className="arrow-down" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
