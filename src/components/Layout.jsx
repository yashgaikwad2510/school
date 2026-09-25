import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { BookOpen } from 'lucide-react';

const Layout = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];

  return (
    <div className="app-container">
      <header className="header">
        <div className="container header-container">
          <Link to="/" className="logo-section">
            <img src="/logo.png" alt="School Logo" className="school-logo" />
            <div className="school-name">
              {language === 'mr' ? 'महानगरपालिका प्राथमिक शाळा' : 'Mahanagarpalika Primary School'}
            </div>
          </Link>
          
          <nav className="nav-links">
            <NavLink to="/" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.home}</NavLink>
            <NavLink to="/about-school" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.about}</NavLink>
            <NavLink to="/teachers" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.teachers}</NavLink>
            <NavLink to="/students" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.students}</NavLink>
            <NavLink to="/facilities" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.facilities}</NavLink>
            <NavLink to="/activities" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.activities}</NavLink>
            <NavLink to="/gallery" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.gallery}</NavLink>
            <NavLink to="/contact" className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.contact}</NavLink>
          </nav>

          <div className="lang-switcher">
            <button 
              onClick={() => toggleLanguage('mr')} 
              className={`lang-btn ${language === 'mr' ? 'active' : ''}`}
            >
              मराठी
            </button>
            <button 
              onClick={() => toggleLanguage('en')} 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
            >
              English
            </button>
          </div>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <p>{t.footer.copyright}</p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
