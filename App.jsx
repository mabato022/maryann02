import React from 'react';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Portfolio</h1>
        <p>Hi, I am Mary Ann Bato! Check out my work below.</p>
      </header>

      <section className="portfolio">
        <h2>Featured Projects</h2>
        <div className="projects">
          <ProjectCard 
            title="About Me"
            description="A description of project one."
            link="https://github.com/username/project-one"
          />
          <ProjectCard 
            title="Projects"
            description="A description of project two."
            link="https://github.com/username/project-two"
          />
          <ProjectCard 
            title="Contact me "
            description="A description of project three."
            link="https://github.com//project-three"
          />
        </div>
      </section>

      <footer className="App-footer">
        <p>&copy; 2025 Your Name. All rights reserved.</p>
      </footer>username
    </div>
  );
};

const ProjectCard = ({ title, description, link }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{description}</p>
    <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
  </div>
);

export default App;