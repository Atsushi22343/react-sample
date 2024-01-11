import React, { useState } from 'react';
import './App.css';

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1.',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2.',
    },
    // Add more projects as needed
  ]);

  const handleProjectHover = (index) => {
    // Custom hover effect if needed
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Atsushi Kobayashi</h1>
        <p>Graduate Student</p>
      </header>
      <p class="bound">
          <span>Welcome</span>
          <span>to</span>
          <span>my</span>
          <span>portfolio</span>
          <span>!</span>
        </p>
      <section className="About">
        <h2>About Me</h2>
        <p>
          <b><font color = "blue">Education</font></b>: Nagoya University, Japan.
        </p>
      </section>
      <section className="Projects">
        <h2>Projects</h2>
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="Project"
            onMouseEnter={() => handleProjectHover(index)}
          >
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
      <section className="Contact">
        <h2>Contact Me</h2>
        <p>Email: kobayashi.atsushi.s6@s.mail.nagoya-u.ac.jp</p>
        {/* Add more contact information as needed */}
      </section>
      <footer>
        <p>&copy; 2024 Atsushi Kobayashi</p>
      </footer>
    </div>
  );
}

export default App;
