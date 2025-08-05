import React from 'react';
import '../index.css'; 

const Skills = () => {
  return (
    <section id="skills">
      <div className="container">
        <h2 className="section-title">Skills & Expertise</h2>

        <div className="skills-grid">
          {/* Frontend */}
          <div className="skill-card">
            <h3>Frontend Development</h3>
            <div className="tech-logos">
              <img src="./assets/logos/icons8-react-96.png" alt="React" title="React" className="tech-logo" />
              <img src="/assets/logos/html.svg" alt="HTML5" title="HTML5" className="tech-logo" />

              <img src="../assets/logos/css-3.svg" alt="CSS3" title="CSS3" className="tech-logo" />
              <img src="../assets/logos/js.png" alt="JavaScript" title="JavaScript" className="tech-logo" />
              <img src="../assets/logos/Bootstrap_logo.svg.png" alt="Bootstrap" title="Bootstrap" className="tech-logo" />
              <img src="/assets/logos/tailwind.png" alt="Tailwind CSS" title="Tailwind CSS" className="tech-logo" />
            </div>
          </div>

          {/* Backend */}
          <div className="skill-card">
            <h3>Backend Development</h3>
            <div className="tech-logos">
              <img src="/assets/logos/nodejs-custom.svg" alt="Node.js" title="Node.js" className="tech-logo" />
              <img src="/assets/logos/java.svg" alt="Java" title="Java" className="tech-logo" />
              <img src="/assets/logos/python.png" alt="Python" title="Python" className="tech-logo" />
              <img src="/assets/logos/php-custom.svg" alt="PHP" title="PHP" className="tech-logo" />
              <img src="/assets/logos/spring.png" alt="Spring" title="Spring" className="tech-logo" />
            </div>
          </div>

          {/* Database & Cloud */}
          <div className="skill-card">
            <h3>Database & Cloud</h3>
            <div className="tech-logos">
              <img src="/assets/logos/mongodb-custom.svg" alt="MongoDB" title="MongoDB" className="tech-logo" />
              <img src="/assets/logos/mysql.png" alt="MySQL" title="MySQL" className="tech-logo" />
              <img src="/assets/logos/google-cloud-1.svg" alt="Google Cloud" title="Google Cloud" className="tech-logo" />
              <img src="/assets/logos/aws.png" alt="AWS" title="AWS" className="tech-logo" />
              <img src="/assets/logos/docker.svg" alt="Docker" title="Docker" className="tech-logo" />
              <img src="/assets/logos/kubernetes.png" alt="Kubernetes" title="Kubernetes" className="tech-logo" />
            </div>
          </div>

          {/* Dev Tools */}
          <div className="skill-card">
            <h3>Dev Tools & Utilities</h3>
            <div className="tech-logos">
              <img src="/assets/logos/git-custom.svg" alt="Git" title="Git" className="tech-logo" />
              <img src="/assets/logos/github-custom.svg" alt="GitHub" title="GitHub" className="tech-logo" id="github-logo" />
              <img src="/assets/logos/postman-custom.svg" alt="Postman" title="Postman" className="tech-logo" />
              <img src="/assets/logos/Figma-logo.svg.png" alt="Figma" title="Figma" className="tech-logo" />
              <img src="/assets/logos/IntelliJ_IDEA_Icon.svg.png" alt="IntelliJ IDEA" title="IntelliJ IDEA" className="tech-logo" />
              <img src="/assets/logos/notion.svg" alt="Notion" title="Notion" className="tech-logo" id="notion-logo" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
