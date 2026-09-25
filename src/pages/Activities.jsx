import React from 'react';

const Activities = () => {
  return (
    <div className="section container">
      <h1 className="section-title">Activities</h1>
      <div className="grid-3">
        {['Cultural Activities', 'Sports', 'Science Exhibition', 'Educational Trip'].map((activity, i) => (
          <div key={i} className="card">
            <div style={{ height: '200px', background: '#e5e7eb' }}></div>
            <div className="card-content">
              <h3 className="card-title">{activity}</h3>
              <p className="card-desc">Glimpses of our {activity.toLowerCase()} from this academic year.</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Activities;
