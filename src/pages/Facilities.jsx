import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const Facilities = () => {
  const { t } = useLanguage();
  const facilities = [
    ['facilities.computer', 'facilities.computerDesc'],
    ['facilities.scienceLab', 'facilities.scienceLabDesc'],
    ['facilities.librarySimple', 'facilities.librarySimpleDesc'],
    ['facilities.smart', 'facilities.smartDesc'],
    ['facilities.playgroundSimple', 'facilities.playgroundSimpleDesc']
  ];
  return (
    <div className="section container">
      <h1 className="section-title">{t('facilities.simpleTitle')}</h1>
      <div className="grid-3">
        {facilities.map(([titleKey, descriptionKey], i) => (
          <div key={i} className="card">
            <div style={{ height: '200px', background: '#e5e7eb' }}></div>
            <div className="card-content">
              <h3 className="card-title">{t(titleKey)}</h3>
              <p className="card-desc">{t(descriptionKey)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Facilities;
