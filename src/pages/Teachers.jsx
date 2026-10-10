import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { School } from 'lucide-react';
import { teachers } from '../components/ProfileCard';

const Teachers = () => (
  <TeachersContent />
);

const TeachersContent = () => {
  const { t } = useLanguage();
  return (
  <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', padding: '3rem 0 5rem' }}>
    <style>{`
      .teachers-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 15px;
      }
      .teacher-block {
        border: 1px solid #8ab8d0;
        background: #fff;
      }
      .teacher-block-header {
        background-color: #ffefbc;
        color: #0c1a9c;
        font-size: 1.25rem;
        font-weight: bold;
        padding: 10px 15px;
        border-bottom: 1px solid #8ab8d0;
        display: flex;
        align-items: center;
        gap: 10px;
      }
      .teacher-block-content {
        padding: 15px;
        background-color: #f7fbff;
      }
      .teacher-block-top {
        display: flex;
        gap: 15px;
        margin-bottom: 15px;
      }
      .teacher-block-photo {
        width: 120px;
        height: 150px;
        object-fit: cover;
        border: 1px solid #8ab8d0;
        background-color: #fff;
        padding: 2px;
        flex-shrink: 0;
      }
      .teacher-block-details {
        flex: 1;
        padding-top: 5px;
      }
      .teacher-block-name {
        color: #0c1a9c;
        font-size: 1.25rem;
        font-weight: bold;
        margin: 0 0 5px 0;
      }
      .teacher-block-role {
        color: #000;
        font-size: 0.95rem;
        font-weight: normal;
        margin: 0;
        line-height: 1.4;
      }
      .teacher-table {
        width: 100%;
        border-collapse: collapse;
        font-size: 0.9rem;
        table-layout: fixed;
        word-wrap: break-word;
      }
      .teacher-table th, .teacher-table td {
        border: 1px solid #8ab8d0;
        padding: 8px 10px;
        text-align: left;
        color: #000;
        word-break: break-word;
      }
      .teacher-table th {
        background-color: #d6eaf8;
        width: 35%;
        font-weight: normal;
      }
      .teacher-table td {
        background-color: #fff;
      }
      @media (max-width: 860px) {
        .teachers-grid {
          grid-template-columns: 1fr;
        }
        .teacher-block-top {
          flex-direction: column;
          align-items: center;
          text-align: center;
        }
      }
    `}</style>

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

      <div className="teachers-grid">
        {teachers.map((person) => (
          <div className="teacher-block" key={person.nameKey}>
            <div className="teacher-block-header">
              <School size={22} color="#0c1a9c" />
              {t('teachers.title')}
            </div>
            <div className="teacher-block-content">
              <div className="teacher-block-top">
                <img src={person.image} alt={t(person.nameKey)} className="teacher-block-photo" />
                <div className="teacher-block-details">
                  <h3 className="teacher-block-name">{t(person.nameKey)}</h3>
                  <p className="teacher-block-role">{t(person.roleKey)}</p>
                  <div style={{ marginTop: '10px', width: '30px', height: '3px', backgroundColor: '#ffb833' }}></div>
                </div>
              </div>
              <table className="teacher-table">
                <tbody>
                  {person.instKey && (
                    <tr>
                      <th>{t('teachers.institutionLabel')}</th>
                      <td>{t(person.instKey)}</td>
                    </tr>
                  )}
                  {person.projectKey && (
                    <tr>
                      <th>{t('teachers.projectLabel')}</th>
                      <td>{t(person.projectKey)}</td>
                    </tr>
                  )}
                  <tr>
                    <th>{t('teachers.qualificationLabel')}</th>
                    <td>{t(person.qualKey)}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Teachers;
