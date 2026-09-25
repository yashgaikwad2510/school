import React from 'react';

const Teachers = () => {
  return (
    <div className="section container">
      <h1 className="section-title">Teachers & Staff</h1>
      <div className="grid-3">
        {[1, 2, 3, 4].map(i => (
          <div key={i} className="card" style={{ textAlign: 'center' }}>
            <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: '#e5e7eb', margin: '1.5rem auto 0' }}></div>
            <div className="card-content">
              <h3 className="card-title">Teacher Name</h3>
              <p className="card-desc">Designation / Subject</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teachers;
