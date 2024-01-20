import React, { useState } from 'react';
import './App.css';
import alexa from "./images/alexa_l.jpg";
import react_logo from "./images/logo.svg";
import project1 from "./videos/interface.mp4";
import icon from "./images/icon.png";

function App() {
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: 'Interactive Live Streaming',
      description: 'This project is a web application that allows users to interact with and operate a displayed CG avatar. This application is developed using Django(Python) and HTML/CSS, JavaScript, and the avatar part was implemented in Unity(using C#). This is not deployed, but a paper describing the results of a study using this application has been published.',
      link: 'https://doi.org/10.11517/pjsai.JSAI2023.0_2K4GS903',
      // image: react_logo,
      video: project1,
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2.',
      // image: alexa,
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
      <section class="twocols">
        <div class="twocols-container w-container">
          <div class="twocols-column">
            <img src={icon} className="icon"/>
          </div>

          <div class="twocols-column">
            <h2>About Me</h2>
              <p class="left">
                <b><font color = "blue">Birthday</font></b>: 1999/05/16
              </p>
              <p class="left">
                <b><font color = "blue">Education</font></b>:<a target="_blank" href="https://www.engg.nagoya-u.ac.jp/?lang=en"> Graduate School of Engineering, Nagoya University</a>, Nagoya, Japan
              </p>
              <p class="left">
                <b><font color = "blue">Skills</font></b>: Described below
              </p>
              <ul class="square">
                <li>OS: Windows, MacOS, Amazon Linux, Ubuntu</li>
                <li>Language: C, Python, JavaScript(jQuery, React), HTML/CSS, C#, C++, PHP</li>
                <li>Framework: Django, Laravel</li>
                <li>Other: Unity, Blender</li>
              </ul>
          </div>
        </div>
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
            <div className='twocols'>
              <div class="twocols-container w-container">
                <div className='twocols-clumn'>
                  {project.description}<br/><br/>
                  <a target="_blank" href={project.link}>Link</a>
                </div>
                <div className='twocols-clumn'>
                  {/* <img src={project.image} className="image" alt="image1" /> */}
                  <video src={project.video} className="video" controls alt="video1" />
                </div>
              </div>
            </div>
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
