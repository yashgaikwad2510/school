import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Students = () => {
  const { t } = useLanguage();
  return (
    <div className="section container">
      <h1 className="section-title">{t('students.title')}</h1>
      <div style={{ background: 'white', padding: '2rem', borderRadius: '0.5rem' }}>
        <p>{t('students.total')}</p>
        <p>{t('students.classes')}</p>
        <p>{t('students.info')}</p>
        <br/>
        <p style={{ color: 'var(--text-light)', fontSize: '0.875rem' }}>
          {t('students.privacy')}
        </p>
      </div>
    </div>
  );
};

export default Students;
