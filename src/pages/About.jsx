import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProfileCard, { educationalGuides, schoolPillars } from '../components/ProfileCard';

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="section">
      <style>{`
        .school-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }
        .school-pillars-featured {
          display: flex;
          justify-content: center;
          margin: 1rem 0;
        }
        .school-pillars-featured .pillar-profile-card {
          width: min(100%, 308px);
        }
        .pillar-profile-card {
          overflow: hidden;
          border: 1px solid #8ab8d0;
          background: #fff;
          box-shadow: 0 2px 7px rgba(16, 42, 114, .06);
        }
        .pillar-profile-photo {
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #dbeef6;
          border-bottom: 1px solid #8ab8d0;
        }
        .pillar-profile-photo img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center top;
        }
        .pillar-profile-content {
          min-height: 112px;
          padding: 14px 16px 18px;
          background: #f7fbff;
        }
        .pillar-profile-content h3 {
          margin: 0 0 6px;
          color: #0c1a9c;
          font-size: 1.2rem;
          line-height: 1.35;
        }
        .pillar-profile-content .tcard-role {
          margin-top: 0;
          color: #111;
          border: 0;
          border-radius: 0;
          padding: 0;
          font-family: inherit;
          font-size: .95rem;
          font-weight: 400;
          letter-spacing: normal;
          text-transform: none;
        }
        @media (max-width: 620px) {
          .school-pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
      <div className="container">
        <h1 className="section-title">{t('about.title')}</h1>
        <div style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: 'var(--shadow-sm)' }}>
          <h2>{t('about.history')}</h2>
          <p>{t('about.historyText')}</p>
          <br />
          <h2>{t('about.visionTitle')}</h2>
          <p>{t('about.vision')}</p>
          <p>{t('about.mission')}</p>
          <br />
          <h2>{t('about.features')}</h2>
          <ul>
            <li>{t('about.experienced')}</li>
            <li>{t('about.methods')}</li>
            <li>{t('about.extracurricular')}</li>
          </ul>
        </div>

        <section className="section" style={{ paddingLeft: 0, paddingRight: 0 }}>
          <h2 className="section-title">{t('leadership.title')}</h2>
          <div className="school-pillars-grid">
            {educationalGuides.map((person) => <ProfileCard key={person.nameKey} person={person} t={t} />)}
          </div>

          <h2 className="section-title" style={{ marginTop: '3rem' }}>{t('pillars.title')}</h2>
          <div className="school-pillars-featured">
            <ProfileCard person={schoolPillars[0]} t={t} variant="pillar" />
          </div>
          <div className="school-pillars-grid">
            {schoolPillars.slice(1).map((person) => <ProfileCard key={person.nameKey} person={person} t={t} variant="pillar" />)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
