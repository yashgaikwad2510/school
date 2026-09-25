import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Link } from 'react-router-dom';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>{t.hero.title}</h1>
          <p>{t.hero.subtitle}</p>
        </div>
      </section>

      {/* About Preview */}
      <section className="section bg-white">
        <div className="container">
          <h2 className="section-title">{t.nav.about}</h2>
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <p style={{ marginBottom: '2rem', fontSize: '1.1rem', color: 'var(--text-light)' }}>
              {t.about.previewText}
            </p>
            <Link to="/about-school" className="btn btn-primary">{t.about.readMore}</Link>
          </div>
        </div>
      </section>

      {/* Facilities Preview */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t.facilities.title}</h2>
          <p style={{ textAlign: 'center', marginBottom: '3rem', color: 'var(--text-light)' }}>{t.facilities.previewText}</p>
          <div className="grid-3">
            {[1, 2, 3].map(i => (
              <div key={i} className="card">
                <img src={`https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&q=80&w=400&h=300`} alt="Facility" className="card-img" />
                <div className="card-content">
                  <h3 className="card-title">Facility {i}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
