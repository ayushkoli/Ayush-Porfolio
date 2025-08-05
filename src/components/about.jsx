import React from 'react';
import '../index.css'; // Optional: import CSS for styling
import ayush from '../assets/ayush.jpg';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I am a Computer Science graduate with a passion for building impactful digital solutions.
              I enjoy working on creative projects, solving problems, and learning new skills.
              With experience in web development and a keen interest in technology,
              I am always looking for opportunities to grow and contribute to meaningful work.
            </p>
            <p>
              I believe in continuous learning and strive to stay updated with the latest industry trends.
              My goal is to apply my knowledge and creativity to build solutions that make a real difference.
            </p>
          </div>
          <div className="about-image">
            <div className="profile-card">
              <div className="profile-img">
                <img
                  src={ayush}
                  alt="Ayush Koli"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '50%'
                  }}
                />
              </div>
              <h3>Ayush Koli</h3>
              <p>Full Stack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
