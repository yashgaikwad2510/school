import React from 'react';

const Gallery = () => {
  return (
    <div className="section container">
      <h1 className="section-title">Gallery</h1>
      
      <h2>Photo Gallery</h2>
      <div className="grid-3" style={{ marginTop: '2rem', marginBottom: '4rem' }}>
        {[1, 2, 3, 4, 5, 6].map(i => (
          <div key={i} className="card">
            <div style={{ height: '200px', background: '#e5e7eb' }}></div>
          </div>
        ))}
      </div>

      <h2>Video Gallery</h2>
      <div className="grid-3" style={{ marginTop: '2rem' }}>
        {[1, 2].map(i => (
          <div key={i} className="card">
            <div style={{ height: '200px', background: '#374151', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
              Play Video
            </div>
            <div className="card-content">
              <h3 className="card-title">School Event Video {i}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
