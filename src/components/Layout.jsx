import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { MapPin, Phone, Mail, Search, Menu, Book } from 'lucide-react';

const SocialIcon = ({ type }) => {
  if (type === 'instagram') {
    return (
      <svg className="footer-social-icon" viewBox="0 0 24 24" aria-hidden="true">
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" className="footer-social-dot" />
      </svg>
    );
  }

  if (type === 'facebook') {
    return (
      <svg className="footer-social-icon footer-facebook-icon" viewBox="0 0 24 24" aria-hidden="true">
        <circle cx="12" cy="12" r="9" />
        <path d="M13.5 20v-7h2.4l.4-2.7h-2.8V8.6c0-.8.2-1.4 1.4-1.4h1.5V4.8c-.3 0-.9-.1-1.9-.1-2.6 0-4.3 1.6-4.3 4.4v1.2H7.8V13h2.4v7h3.3Z" />
      </svg>
    );
  }

  return (
    <svg className="footer-social-icon footer-youtube-icon" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M21 7.2a2.8 2.8 0 0 0-2-2C17.2 4.7 12 4.7 12 4.7s-5.2 0-7 .5a2.8 2.8 0 0 0-2 2A29 29 0 0 0 2.5 12 29 29 0 0 0 3 16.8a2.8 2.8 0 0 0 2 2c1.8.5 7 .5 7 .5s5.2 0 7-.5a2.8 2.8 0 0 0 2-2 29 29 0 0 0 .5-4.8 29 29 0 0 0-.5-4.8Z" />
      <path className="footer-youtube-play" d="m10 15.5 5-3.5-5-3.5v7Z" />
    </svg>
  );
};

const Layout = () => {
  const { language, toggleLanguage } = useLanguage();
  const { t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="app-container">
      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          {Array(8).fill(t('school.name')).map((text, idx) => (
            <div key={idx} className="marquee-item">
              {text} <Book size={14} className="marquee-icon" />
            </div>
          ))}
        </div>
      </div>

      {/* Utility Bar */}
      <div className="utility-bar">
        <div className="container utility-container">
          <div className="utility-left">
            <span style={{fontWeight: 600}}>{t('school.department')}</span>
          </div>
          <div className="utility-right">
            <span className="utility-item hide-mobile"><MapPin size={14} /> {t('school.location')}</span>
            <span className="utility-item hide-mobile"><Phone size={14} /> {t('school.phone')}</span>
            <span className="utility-item hide-mobile"><Mail size={14} /> {t('school.email')}</span>
            <div className="lang-switcher-top">
              <button 
                onClick={() => toggleLanguage('mr')} 
                className={`lang-btn ${language === 'mr' ? 'active' : ''}`}
              >
                {t('language.marathi')}
              </button>
              <button 
                onClick={() => toggleLanguage('en')} 
                className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              >
                {t('language.english')}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="container header-container">
          <Link to="/" className="logo-section">
            <img src="/logo.png" alt={t('image.schoolLogo')} className="school-logo" onError={(e) => { e.target.style.display='none' }} />
            <div>
              <div className="school-name">
                {t('school.name')}
              </div>
              <div className="school-tagline">
                {t('school.tagline')}
              </div>
            </div>
          </Link>
          
          <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} color="var(--primary-navy)" />
          </div>

          <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('nav.home')}</NavLink>
            <NavLink to="/teachers" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('nav.teachers')}</NavLink>
            <NavLink to="/activities" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('nav.activities')}</NavLink>
            <NavLink to="/gallery" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('nav.gallery')}</NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t('nav.contact')}</NavLink>
            <Search size={18} className="search-icon" style={{ color: 'var(--text-muted)', cursor: 'pointer', marginLeft: '0.5rem' }} />
          </nav>
        </div>
      </header>

      <div className="layout-body">
        <Outlet />
      </div>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <img src="/logo.png" alt={t('image.schoolLogo')} onError={(e) => { e.target.style.display='none' }} />
                <div>
                  <h3 style={{color: 'white', fontSize: '1.1rem'}}>{t('school.name.short')}</h3>
                  <p style={{fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px'}}>{t('leadership.organizationValue')}</p>
                </div>
              </div>
              <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '1rem'}}>
                {t('school.footerMission')}
              </p>
            </div>
            
            <div>
              <h4>{t('school.quickLinks')}</h4>
              <ul className="footer-links">
                <li><Link to="/">{t('nav.home')}</Link></li>
                <li><Link to="/about-school">{t('nav.about')}</Link></li>

                <li><Link to="/contact">{t('nav.contact')}</Link></li>
              </ul>
            </div>
            
            <div>
              <h4>{t('school.contact')}</h4>
              <ul className="footer-links" style={{ color: 'rgba(255,255,255,0.8)' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}><MapPin size={16} /> {t('school.location')}</li>
                <li style={{ display: 'flex', gap: '0.5rem' }}><Phone size={16} /> {t('school.phone')}</li>
                <li style={{ display: 'flex', gap: '0.5rem' }}><Mail size={16} /> {t('school.email')}</li>
              </ul>
              <h4 style={{ marginTop: '1.5rem', marginBottom: '0.9rem' }}>{t('school.follow')}</h4>
              <ul className="footer-links footer-social-links">
                <li>
                  <a href="https://www.instagram.com/mnpschoolbhutkarwadi/" target="_blank" rel="noreferrer">
                    <SocialIcon type="instagram" />                     {t('social.instagram')}
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/search/pages/?q=MNP%20School%20Bhutkarwadi" target="_blank" rel="noreferrer">
                    <SocialIcon type="facebook" />                     {t('social.facebook')}
                  </a>
                </li>
                <li>
                  <a href="https://www.youtube.com/results?search_query=MNP+School+Bhutkarwadi" target="_blank" rel="noreferrer">
                    <SocialIcon type="youtube" />                     {t('social.youtube')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 {t('school.name')}. {t('school.footerRights')}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
