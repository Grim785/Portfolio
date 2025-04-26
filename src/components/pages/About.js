import React from "react";
import "./About.scss";

class About extends React.Component {
  render() {
    return (
        <article className="About row">
          <section className="about-section py-5 col" id="about">
            <div className="container">
              <h2 className="text-center mb-4">About Me</h2>
              <p className="lead text-center">
                I'm <strong className="text-highlight">Nguyen Van An</strong> – an aspiring <strong className="text-highlight">Full-Stack Developer</strong> with a strong foundation in <strong className="text-highlight">JavaScript</strong> and a growing passion for web technologies.
              </p>
              <p>
                I focus mainly on front-end development using <strong className="text-highlight">React</strong>, and I have hands-on experience working with <strong className="text-highlight">RESTful APIs</strong> and <strong className="text-highlight">Node.js</strong> to build responsive and scalable web applications.
              </p>
              <p>
                I enjoy turning ideas into clean, functional, and user-friendly web apps. Every project I work on helps me grow as a full-stack developer.
              </p>
              <p>
                With a strong desire to learn and improve, I'm continuously expanding my skill set through real-world projects and personal challenges.
              </p>        
              <div className="mt-4">
                <h4 className="mb-3">Tech Stack</h4>
                <ul className="list-inline">
                  <li className="p-2 list-inline-item badge bg-secondary me-2 mb-2">JavaScript</li>
                  <li className="p-2 list-inline-item badge bg-secondary me-2 mb-2">React</li>
                  <li className="p-2 list-inline-item badge bg-secondary me-2 mb-2">Node.js</li>
                  <li className="p-2 list-inline-item badge bg-secondary me-2 mb-2">REST API</li>
                  <li className="p-2 list-inline-item badge bg-secondary me-2 mb-2">HTML</li>
                  <li className="p-2 list-inline-item badge bg-secondary me-2 mb-2">CSS/SCSS</li>
                  <li className="p-2 list-inline-item badge bg-secondary me-2 mb-2">Bootstrap</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
    );
  }
}

export default About;