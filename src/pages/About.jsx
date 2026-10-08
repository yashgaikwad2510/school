import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProfileCard, { schoolPillars } from '../components/ProfileCard';

const educationalGuides = [
  { img: '/aukta.jpeg', nameKey: 'leadership.commissionerName', roleKey: 'leadership.commissioner', orgKey: 'leadership.organizationValue' },
  { img: '/zuber.jpeg', nameKey: 'leadership.administrationOfficerName', roleKey: 'leadership.administrationOfficer', orgKey: 'leadership.departmentValue' },
  { nameKey: 'leadership.sanjayMeherName', roleKey: 'leadership.sanjayMeherRole' },
  { nameKey: 'leadership.subhashPawarName', roleKey: 'leadership.subhashPawarRole' }
];

const About = () => {
  const { t } = useLanguage();

  return (
    <div className="section">
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
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {educationalGuides.map((person) => <ProfileCard key={person.nameKey} person={person} t={t} />)}
          </div>

          <h2 className="section-title" style={{ marginTop: '3rem' }}>{t('pillars.title')}</h2>
          <div className="cards-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))' }}>
            {schoolPillars.map((person) => <ProfileCard key={person.nameKey} person={person} t={t} />)}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
