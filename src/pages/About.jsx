import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const About = () => {
  const { t } = useLanguage();
  return (
    <div className="section container">
      <h1 className="section-title">{t('about.title')}</h1>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem', boxShadow: 'var(--shadow-sm)' }}>
        <h2>{t('about.history')}</h2>
        <p>{t('about.historyText')}</p>
        <br/>
        <h2>{t('about.visionTitle')}</h2>
        <p>{t('about.vision')}</p>
        <p>{t('about.mission')}</p>
        <br/>
        <h2>{t('about.features')}</h2>
        <ul>
          <li>{t('about.experienced')}</li>
          <li>{t('about.methods')}</li>
          <li>{t('about.extracurricular')}</li>
        </ul>
      </div>
    </div>
  );
};

export default About;
