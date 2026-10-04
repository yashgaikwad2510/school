import React from 'react';
import { useLanguage } from '../context/LanguageContext';

const staff = [
  {
    nameKey: 'teachers.principalName',
    roleKey: 'teachers.principal',
    image: '/teacher2.jpeg'
  },
  {
    nameKey: 'teachers.teacherName',
    roleKey: 'teachers.teacher',
    image: '/teacher.jpeg'
  }
];

const Teachers = () => (
  <TeachersContent />
);

const TeachersContent = () => {
  const { t } = useLanguage();
  return (
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
          {t('teachers.title')}
        </h1>
        <p style={{ margin: '0.5rem 0 0', color: 'var(--text-muted)' }}>
          {t('teachers.subtitle')}
        </p>
      </div>

      <div
        className="teachers-page-grid"
        style={{
        display: 'grid',
        gap: '1rem'
      }}>
        {staff.map((person) => (
          <article
            key={person.nameKey}
            className="teacher-profile-card"
          >
            <div className="teacher-profile-header" aria-hidden="true" />
            <div className="teacher-profile-content">
              <img
                src={person.image}
                alt={t(person.nameKey)}
                className="teacher-profile-photo"
              />
              <h2 className="teacher-profile-name">{t(person.nameKey)}</h2>
              <p className="teacher-profile-role">{t(person.roleKey)}</p>
              <div className="teacher-profile-accent" />
              <p className="teacher-profile-school">{t('teachers.schoolName')}</p>
            </div>
          </article>
        ))}
      </div>
    </div>

    <style>{`
      .teacher-profile-card {
        overflow: hidden;
        border: 1px solid #8ab8d0;
        background: #fff;
      }
      .teacher-profile-header {
        height: 14px;
        background: #ffefbc;
        border-bottom: 1px solid #8ab8d0;
      }
      .teacher-profile-content {
        display: flex;
        min-height: 360px;
        align-items: center;
        flex-direction: column;
        padding: 20px 18px 24px;
        background: #f7fbff;
        text-align: center;
      }
      .teacher-profile-photo {
        width: 150px;
        height: 185px;
        object-fit: cover;
        object-position: center top;
        border: 1px solid #8ab8d0;
        background: #fff;
        padding: 3px;
      }
      .teacher-profile-name {
        margin: 16px 0 5px;
        color: #0c1a9c;
        font-size: 1.35rem;
        line-height: 1.35;
      }
      .teacher-profile-role {
        margin: 0;
        color: #000;
        font-size: 0.95rem;
        line-height: 1.4;
      }
      .teacher-profile-accent {
        width: 34px;
        height: 3px;
        margin: 12px auto 14px;
        background: #ffb833;
      }
      .teacher-profile-school {
        max-width: 32ch;
        margin: 0;
        color: #333;
        line-height: 1.6;
      }
      @media (max-width: 680px) {
        .teachers-page-grid {
          grid-template-columns: 1fr;
        }
        .teacher-profile-content {
          min-height: 0;
        }
      }
    `}</style>
  </div>
  );
};

export default Teachers;
