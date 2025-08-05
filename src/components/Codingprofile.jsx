import React from 'react';
import './codingprofile.css';
import '../index.css';


const CodingProfiles = () => {
  return (
   <section id="coding-profiles" className="coding-profiles-section">
  <div className="container">
    <h2 className="section-title">Coding Profiles</h2>
    
    <div className="coding-profiles-container">
      {/* Card 1 */}
      <div className="coding-profile-card">
        <div className="coding-profile-content">
          <img
            src="https://leetcard.jacoblin.cool/ayushkoli?theme=dark&ext=contest"
            alt="Ayush Koli's LeetCode Stats"
            className="coding-profile-image"
          />
          <div className="coding-profile-heading">LeetCode Stats</div>
          <p className="coding-profile-description">
            @ayushkoli on <a href="https://leetcode.com/u/ayushkoli/" target="_blank" rel="noreferrer">LeetCode</a>
          </p>
        </div>
      </div>

      {/* Card 2 */}
      <div className="coding-profile-card">
        <div className="coding-profile-content">
          <img
            src="https://github-readme-stats.vercel.app/api?username=ayushkoli&show_icons=true&theme=github_dark&cache_bust=1"
            alt="Ayush Koli's GitHub Stats"
            className="coding-profile-image"
          />
          <div className="coding-profile-heading">GitHub Stats</div>
          <p className="coding-profile-description">
            @ayushkoli on <a href="https://github.com/ayushkoli" target="_blank" rel="noreferrer">GitHub</a>
          </p>
        </div>
      </div>
    </div>
  </div>
</section>

  );
};

export default CodingProfiles;
