import React, { useEffect } from 'react';
import './Project.css';
import gramin from '../assets/grahminarogya.png';
import quicktools from '../assets/quicktools.png';
import webrtc from '../assets/webrtc-icon.svg';

const Projects = () => {
  useEffect(() => {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach((card, idx) => {
      // Only set initial state if not already animated
      if (!card.classList.contains('slide-in-left') && !card.classList.contains('slide-in-right')) {
        card.classList.remove('slide-in-left', 'slide-in-right');
        card.dataset.slide = (idx % 2 === 0) ? 'left' : 'right';
        card.style.animationDelay = `${idx * 0.15}s`;
        card.style.willChange = 'transform, opacity';
      }
    });

    const projectObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const card = entry.target;
          if (card.dataset.slide === 'left') {
            card.classList.add('slide-in-left');
          } else {
            card.classList.add('slide-in-right');
          }
          projectObserver.unobserve(card); // Animate only once
        }
      });
    }, { threshold: 0.05, rootMargin: '0px 0px -20px 0px' });

    projectCards.forEach(card => projectObserver.observe(card));

    return () => {
      projectObserver.disconnect();
    };
  }, []);

  return (
    <section id="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-list">
          <div className="project-card" id="gramin-arogya-card">
            <div className="project-image">
              <img src={gramin} alt="Gramin Arogya Screenshot" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',borderRadius:'3px'}} />
            </div>
            <div className="project-content">
              <h3 className="project-title">Gramin Arogya — AI-Powered Rural Healthcare Platform</h3>
              <p className="project-description">
                Built a full-stack AI-powered healthcare platform for rural areas with features like symptom analysis, real-time health monitoring, and multilingual support.<br />
                Integrated telemedicine, digital prescriptions, and government scheme access using Node.js, MongoDB, WebSockets, and AI/ML models.
              </p>
              <div className="project-links">
                <a href="https://github.com/ayushkoli/Gramin-Arogya" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="project-card" id="quicktools-card">
            <div className="project-image">
              <img src={quicktools} alt="QuickTools Screenshot" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',borderRadius:'3px'}} />
            </div>
            <div className="project-content">
              <h3 className="project-title">QuickTools — Multi-Utility Web Tool Suite</h3>
              <p className="project-description">Developed a multi-utility web application integrating diverse features into a single, seamless user experience using JavaScript.</p>
              <div className="project-links">
                <a href="https://github.com/ayushkoli/Quicktools" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
          
          <div className="project-card" id="quicktools-card1">
            <div className="project-image">
              <img src={webrtc} alt="QuickTools Screenshot" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',borderRadius:'3px'}} />
            </div>
            <div className="project-content">
              <h3 className="project-title">Video Calling App</h3>
              <p className="project-description">Developed a real-time video calling app using WebRTC for peer-to-peer streaming and Socket.io for signaling, ensuring secure, low-latency communication.</p>
              <div className="project-links">
                <a href="https://github.com/ayushkoli/videocall" className="project-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;