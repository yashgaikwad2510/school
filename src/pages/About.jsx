import React from 'react';

const About = () => {
  return (
    <div className="section container">
      <h1 className="section-title">About School</h1>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: 'var(--shadow-sm)' }}>
        <h2>School History</h2>
        <p>Established to provide quality education in Bhutkarwadi...</p>
        <br/>
        <h2>Vision & Mission</h2>
        <p>Vision: To create a brighter future through education.</p>
        <p>Mission: Empower students with knowledge and values.</p>
        <br/>
        <h2>School Features</h2>
        <ul>
          <li>Experienced Staff</li>
          <li>Modern Teaching Methods</li>
          <li>Focus on Extracurriculars</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
