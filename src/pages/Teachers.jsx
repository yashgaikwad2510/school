import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, GraduationCap, Building2, Briefcase, Phone } from 'lucide-react';

const Teachers = () => {
  const [filter, setFilter] = useState('सर्व');
  
  const staff = [
    {
      id: 1,
      name: "श्री यशवंत भीमराव डांगे",
      role: "अहिल्यानगर मनपा आयुक्त",
      department: "अहिल्यानगर महानगरपालिका",
      category: "अधिकारी",
      education: null,
      email: null,
      phone: null,
      image: "/aukta.jpeg",
      org: "अहिल्यानगर महानगरपालिका"
    },
    {
      id: 2,
      name: "श्री. जुबेर नुरमोहम्मद पठाण",
      role: "प्रशासन अधिकारी",
      department: "शिक्षण विभाग",
      category: "अधिकारी",
      education: "MA, D.Ed, B.Ed",
      email: "mnpschoolbhutkarwadi03@gmail.com",
      phone: null,
      image: "/zuber.jpeg",
      org: "अहमदनगर मनपा शिक्षण विभाग"
    },
    {
      id: 3,
      name: "श्री अरुण मारुती पवार",
      role: "मुख्याध्यापक",
      department: null,
      category: "मुख्याध्यापक",
      education: "B.A., D.Ed",
      email: null,
      phone: null,
      image: "/teacher2.jpeg",
      org: "श्री छत्रपती शिवाजी महाराज महानगरपालिका प्राथमिक शाळा, भुतकरवाडी"
    },
    {
      id: 4,
      name: "वर्षा शाम गायकवाड",
      role: "शिक्षक",
      department: null,
      category: "शिक्षक",
      education: "M.A., D.Ed",
      email: null,
      phone: null,
      image: "/teacher.jpeg",
      org: "श्री छत्रपती शिवाजी महाराज महानगरपालिका प्राथमिक शाळा, भुतकरवाडी"
    }
  ];

  const filteredStaff = filter === 'सर्व' ? staff : staff.filter(s => s.category === filter);

  // Helper to count category totals
  const getCount = (cat) => staff.filter(s => s.category === cat).length;
  const filterOptions = [
    { label: 'सर्व', count: staff.length },
    { label: 'अधिकारी', count: getCount('अधिकारी') },
    { label: 'मुख्याध्यापक', count: getCount('मुख्याध्यापक') },
    { label: 'शिक्षक', count: getCount('शिक्षक') }
  ];

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '5rem' }}>
      {/* Hero Section */}
      <div style={{ 
        background: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("/teacherbg.png") right center/cover no-repeat', 
        color: 'white', 
        padding: '3rem 0', 
        position: 'relative' 
      }}>
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
          {filterOptions.map(option => (
            <button 
              key={option.label}
              onClick={() => setFilter(option.label)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '999px',
                border: filter === option.label ? 'none' : '1px solid var(--border-color)',
                backgroundColor: filter === option.label ? 'var(--dark-navy)' : 'var(--bg-white)',
                color: filter === option.label ? 'var(--accent-gold)' : 'var(--text-main)',
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.2s',
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem'
              }}
            >
              {option.label} ({option.count})
            </button>
          ))}
        </div>

        {/* Staff Grid */}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', 
          gap: '1.5rem' 
        }}>
          {filteredStaff.map((person, index) => (
            <div key={person.id} style={{
              backgroundColor: 'white',
              borderRadius: '12px',
              overflow: 'hidden',
              boxShadow: 'var(--shadow-subtle)',
              border: '1px solid var(--border-color)',
              display: 'flex',
              flexDirection: 'column'
            }}>
              <div style={{ position: 'relative' }}>
                {/* Ranking / Priority indicator */}
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  backgroundColor: 'var(--accent-gold)',
                  color: 'var(--dark-navy)',
                  fontWeight: 'bold',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                  zIndex: 10
                }}>
                  {person.id}
                </div>
                
                {person.image ? (
                  <img 
                    src={person.image} 
                    alt={person.name} 
                    style={{
                      width: '100%',
                      height: '300px',
                      objectFit: 'cover'
                    }}
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                ) : (
                  <div style={{
                    width: '100%',
                    height: '300px',
                    backgroundColor: '#e5e7eb',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#9ca3af'
                  }}>
                    <span>फोटो उपलब्ध नाही</span>
                  </div>
                )}
              </div>
              
              <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ marginBottom: '1rem' }}>
                  <h3 style={{ fontSize: '1.25rem', color: 'var(--dark-navy)', marginBottom: '0.5rem' }}>{person.name}</h3>
                  <span style={{ 
                    display: 'inline-block',
                    backgroundColor: 'var(--accent-gold)',
                    color: 'var(--dark-navy)',
                    padding: '0.25rem 0.75rem',
                    borderRadius: '4px',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    marginBottom: '0.5rem'
                  }}>
                    {person.role}
                  </span>
                  <div style={{ fontSize: '0.875rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                    {person.org}
                  </div>
                </div>

                <div style={{ 
                  display: 'flex', 
                  flexDirection: 'column', 
                  gap: '0.75rem',
                  marginTop: 'auto',
                  borderTop: '1px solid var(--border-color)',
                  paddingTop: '1rem'
                }}>
                  {person.department && (
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                      <Briefcase size={16} style={{ color: 'var(--primary-navy)', flexShrink: 0, marginTop: '0.125rem' }} />
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>विभाग</span>
                        <span>{person.department}</span>
                      </div>
                    </div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                    <GraduationCap size={16} style={{ color: 'var(--primary-navy)', flexShrink: 0, marginTop: '0.125rem' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>शिक्षण</span>
                      <span>{person.education || "माहिती उपलब्ध नाही"}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                    <Phone size={16} style={{ color: 'var(--primary-navy)', flexShrink: 0, marginTop: '0.125rem' }} />
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>संपर्क</span>
                      <span>{person.phone || "माहिती उपलब्ध नाही"}</span>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--text-main)' }}>
                    <Mail size={16} style={{ color: 'var(--primary-navy)', flexShrink: 0, marginTop: '0.125rem' }} />
                    <div style={{ display: 'flex', flexDirection: 'column', wordBreak: 'break-all' }}>
                      <span style={{ color: 'var(--text-muted)', fontSize: '0.75rem' }}>ई-मेल</span>
                      <span>{person.email || "माहिती उपलब्ध नाही"}</span>
                    </div>
                  </div>
                </div>
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
