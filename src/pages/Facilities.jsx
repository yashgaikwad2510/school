import React from 'react';

const Facilities = () => {
  return (
    <div className="section container">
      <h1 className="section-title">Facilities</h1>
      <div className="grid-3">
        {['Computer Lab', 'Science Lab', 'Library', 'Smart Classroom', 'Playground'].map((facility, i) => (
          <div key={i} className="card">
            <div style={{ height: '200px', background: '#e5e7eb' }}></div>
            <div className="card-content">
              <h3 className="card-title">{facility}</h3>
              <p className="card-desc">Description of {facility.toLowerCase()} available for our students.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
