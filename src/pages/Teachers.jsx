import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, GraduationCap } from 'lucide-react';

const Teachers = () => {
  const [filter, setFilter] = useState('सर्व');
  
  const staff = [
    {
      id: 1,
      name: "वर्षा शाम गायकवाड",
      role: "शिक्षक",
      education: "M.A, D.ed",
      image: "/teacher.jpeg",
      email: null,
      category: "शिक्षक"
    },
    {
      id: 2,
      name: "श्री अरुण मारुती पवार",
      role: "शिक्षक",
      education: "B.A. D.Ed",
      image: "/teacher2.jpeg",
      email: null,
      category: "शिक्षक"
    }
  ];

  const filteredStaff = filter === 'सर्व' ? staff : staff.filter(s => s.category === filter);

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Hero Section */}
      <div style={{ backgroundColor: 'var(--dark-navy)', color: 'white', padding: '3rem 0', position: 'relative' }}>
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ fontSize: '0.875rem', marginBottom: '1.5rem', opacity: 0.8 }}>
            <Link to="/" style={{ color: 'white' }}>मुख्य पृष्ठ</Link> / शिक्षक आणि कर्मचारी
          </div>
          <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '1rem' }}>शिक्षक आणि कर्मचारी</h1>
          <p style={{ maxWidth: '600px', fontSize: '1.125rem', opacity: 0.9 }}>
            आमच्या शाळेचा खरा आधारस्तंभ म्हणजे आमचे समर्पित शिक्षक आणि कर्मचारी. विद्यार्थ्यांच्या उज्ज्वल भविष्यासाठी आम्ही सदैव कटिबद्ध आहोत.
          </p>
        </div>
      </div>

      <div className="container" style={{ marginTop: '3rem' }}>
        {/* Filters */}
        <div style={{ display: 'flex', gap: '1rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
          {['सर्व', 'मुख्याध्यापक', 'शिक्षक', 'कर्मचारी'].map(cat => (
            <button 
              key={cat}
              onClick={() => setFilter(cat)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                border: filter === cat ? 'none' : '1px solid var(--border-color)',
                backgroundColor: filter === cat ? 'var(--dark-navy)' : 'var(--bg-white)',
                color: filter === cat ? 'var(--accent-gold)' : 'var(--text-main)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Staff Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
          gap: '2rem' 
        }}>
          {filteredStaff.map(person => (
            <div key={person.id} className="teacher-card">
              <div className="teacher-img-wrapper">
                <img 
                  src={person.image} 
                  alt={person.name} 
                  className="teacher-img"
                  onError={(e) => { e.target.style.display = 'none' }}
                />
              </div>
              <div className="teacher-details">
                <span className="teacher-role-badge">{person.role}</span>
                <h3 className="teacher-name">{person.name}</h3>
                
                <div className="teacher-info-item">
                  <GraduationCap size={16} /> <span>शिक्षण: {person.education}</span>
                </div>
                
                {person.email && (
                  <div className="teacher-info-item">
                    <Mail size={16} /> <span>{person.email}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
          {filteredStaff.length === 0 && (
            <div style={{ gridColumn: '1 / -1', padding: '3rem', textAlign: 'center', backgroundColor: 'var(--bg-white)', borderRadius: '12px' }}>
              सध्या या श्रेणीत माहिती उपलब्ध नाही.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Teachers;
