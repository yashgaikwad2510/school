import React from 'react';

const Students = () => {
  return (
    <div className="section container">
      <h1 className="section-title">Students</h1>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem' }}>
        <p>Total Students: 500+</p>
        <p>Classes: 1st to 8th Standard</p>
        <p>Information about student participation and activities is available here.</p>
        <br/>
        <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>
          * For privacy and security, no personal information (phone, address) is displayed publicly.
        </p>
      </div>
    </div>
  );
};

export default Students;
