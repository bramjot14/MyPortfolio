import React from 'react';
import './Home.css';

function Home() {
  return (
    <div className="home-container">
      <div className="intro-section">
      <img src="../images/Photograph.JPG" alt="Profile" className="profile-photo" />
        <h1>Bramjot Singh</h1>
        <h2>Full Stack Developer</h2>
        <p>
          Welcome to my portfolio! I specialize in building responsive, user-friendly web applications using modern technologies like React, Node.js, Express, and PostgreSQL.
          Let’s create something amazing together.
        </p>
        <a href="/contact" className="contact-button">Get in Touch</a>
      </div>
      <div className="skills-section">
        <h3>Core Skills</h3>
        <ul className="skills-list">
          <li>React,</li>
          <li>Node.js, Express.js</li>
          <li>Javascript, EJS</li>
          <li>PostgreSQL</li>
          <li>HTML5, CSS3, Bootstrap</li>
          <li>Version Control- Git</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
