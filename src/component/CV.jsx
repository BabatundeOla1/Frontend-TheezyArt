import React from 'react';
import './CV.css';

const CV = () => {
  return (
    <div className="cv-container">
      <h2 className="cv-title">CV</h2>

      <section className="cv-section">
        <h3>EDUCATION</h3>
        <p>
          <strong>2015 – 2017</strong><br />
          OND in Art and Industrial Design, Moshood Abiola Polytechnique, Nigeria
        </p>
        <p>
          <strong>2019 – 2022</strong><br />
          OND in Building Technology, Yaba College of Technology, Nigeria
        </p>
        <p>
          <strong>2024 – 2025</strong><br />
          Diploma in Software Engineering, Semicolon Africa, Lagos, Nigeria
        </p>
      </section>

      {/* <section className="cv-section">
        <h3>SELECTED SOLO EXHIBITIONS</h3>
        <p>
          <strong>2024</strong><br />
          *Echoes of Solitude*, The Art Place, Lagos, Nigeria
        </p>
        <p>
          <strong>2023</strong><br />
          *Shades of Identity*, Freedom Park Gallery, Lagos, Nigeria
        </p>
      </section> */}

      <section className="cv-section">
        <h3>SELECTED GROUP EXHIBITIONS & FAIRS</h3>
        <p>
          <strong>2023</strong><br />
            The Crucible Art Collective - Connecticut St., Buffalo, New York
        </p>
        <p>
          <strong>2021</strong><br />
            2021 Tech4Dev / WomenTechSters Exhibition, Lagos, NG
        </p>
      </section>

      <section className="cv-section">
        <h3>SKILLS</h3>
        <p>
          Strategic Planning, Creative Thinking, Time Management, Problem Solving,
          Critical Thinking, Continuous Learning
        </p>
      </section>

      <section className="cv-section">
        <h3>LANGUAGES</h3>
        <p>English (Fluent)</p>
      </section>
    </div>
  );
};

export default CV;
