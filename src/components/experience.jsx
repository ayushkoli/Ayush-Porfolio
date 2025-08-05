import React from 'react';
import '../index.css';

const Experience = () => {
  return (
    <section id="experience">
      <div className="container">
        <h2 className="section-title">Experience</h2>
        <div className="experience-list">
          <div className="experience-item">
            <h3>Web Developer Intern</h3>
            <p className="company">Abhinav IT Solutions Pvt Ltd</p>
            <p className="exp-description">
              Completed an in-office, stipend-based internship at a product-based company.
              Contributed to building and maintaining company products, collaborated with teams,
              attended client meetings, and optimized development workflows — reducing dev time and
              improving product delivery.
            </p>
          </div>

          <div className="experience-item">
            <h3>National Level Hackathon WINNER</h3>
            <p className="company">InnovateYou Techathon 2.0</p>
            <p className="exp-description">
              Winner of a 24-hour national-level hackathon at AISSMS IoT College in the
              healthcare domain, recognized for developing an AI-powered health solution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
