import React from 'react';

const staff = [
  {
    name: 'श्री अरुण मारुती पवार',
    role: 'मुख्याध्यापक',
    image: '/teacher2.jpeg'
  },
  {
    name: 'वर्षा शाम गायकवाड',
    role: 'शिक्षक',
    image: '/teacher.jpeg'
  }
];

const Teachers = () => (
  <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', padding: '3rem 0 5rem' }}>
    <div className="container">
      <div style={{
        marginBottom: '2rem',
        paddingLeft: '1rem',
        borderLeft: '4px solid var(--accent-gold)'
      }}>
        <h1 style={{
          margin: 0,
          color: 'var(--dark-navy)',
          fontSize: 'clamp(1.8rem, 3vw, 2.5rem)'
        }}>
          शिक्षक आणि कर्मचारी
        </h1>
        <p style={{ margin: '0.5rem 0 0', color: 'var(--text-muted)' }}>
          आमच्या शाळेतील समर्पित शिक्षक व कर्मचारी वर्ग
        </p>
      </div>

      <div
        className="teachers-page-grid"
        style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
        gap: '1rem'
      }}>
        {staff.map((person) => (
          <article
            key={person.name}
            style={{
              border: '1px solid #8ab8d0',
              backgroundColor: '#fff'
            }}
          >
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem',
              backgroundColor: '#ffefbc',
              borderBottom: '1px solid #8ab8d0'
            }}>
              <img
                src={person.image}
                alt={person.name}
                style={{
                  width: '120px',
                  height: '150px',
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  border: '1px solid #8ab8d0',
                  backgroundColor: '#fff',
                  padding: '2px',
                  flexShrink: 0
                }}
              />
              <div>
                <h2 style={{
                  margin: '0 0 0.5rem',
                  color: '#0c1a9c',
                  fontSize: '1.35rem',
                  lineHeight: 1.35
                }}>
                  {person.name}
                </h2>
                <span style={{
                  display: 'inline-block',
                  padding: '0.3rem 0.7rem',
                  borderRadius: '4px',
                  backgroundColor: 'var(--accent-gold)',
                  color: 'var(--dark-navy)',
                  fontWeight: 700,
                  fontSize: '0.875rem'
                }}>
                  {person.role}
                </span>
              </div>
            </div>
            <div style={{
              padding: '1rem',
              backgroundColor: '#f7fbff',
              color: '#333',
              lineHeight: 1.6
            }}>
              श्री छत्रपती शिवाजी महाराज महानगरपालिका<br />
              प्राथमिक शाळा, भुतकरवाडी
            </div>
          </article>
        ))}
      </div>
    </div>

    <style>{`
      @media (max-width: 680px) {
        .teachers-page-grid {
          grid-template-columns: 1fr;
        }
      }
    `}</style>
  </div>
);

export default Teachers;
