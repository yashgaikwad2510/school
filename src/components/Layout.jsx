import React from 'react';
import { Outlet, Link, NavLink } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { MapPin, Phone, Mail, Search, Menu, Book } from 'lucide-react';

const Layout = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  return (
    <div className="app-container">
      {/* Marquee */}
      <div className="marquee-container">
        <div className="marquee-content">
          {Array(8).fill("श्री छत्रपती शिवाजी महाराज महानगरपालिका प्राथमिक शाळा, भुतकरवाडी").map((text, idx) => (
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
            <span style={{fontWeight: 600}}>अहिल्यानगर महानगरपालिका | शिक्षण विभाग</span>
          </div>
          <div className="utility-right">
            <span className="utility-item hide-mobile"><MapPin size={14} /> भुतकरवाडी, अहिल्यानगर</span>
            <span className="utility-item hide-mobile"><Phone size={14} /> 8793617304</span>
            <span className="utility-item hide-mobile"><Mail size={14} /> mnpschoolbhutkarwadi03@gmail.com</span>
            <div className="lang-switcher-top">
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
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="container header-container">
          <Link to="/" className="logo-section">
            <img src="/logo.png" alt="School Logo" className="school-logo" onError={(e) => { e.target.style.display='none' }} />
            <div>
              <div className="school-name">
                {language === 'mr' ? 'श्री छत्रपती शिवाजी महाराज\nमहानगरपालिका प्राथमिक शाळा, भुतकरवाडी' : 'Shri Chhatrapati Shivaji Maharaj\nMahanagarpalika Primary School, Bhutkarwadi'}
              </div>
              <div className="school-tagline">
                {language === 'mr' ? 'गुणवत्तापूर्ण प्राथमिक शिक्षणाद्वारे विद्यार्थ्यांचे सर्वांगीण विकास.' : 'Holistic development of students through quality primary education.'}
              </div>
            </div>
          </Link>
          
          <div className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu size={24} color="var(--primary-navy)" />
          </div>

          <nav className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
            <NavLink to="/" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.home}</NavLink>
            <NavLink to="/about-school" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.about}</NavLink>
            <NavLink to="/teachers" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.teachers}</NavLink>
            <NavLink to="/students" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.students}</NavLink>

            <NavLink to="/activities" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.activities}</NavLink>
            <NavLink to="/gallery" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.gallery}</NavLink>
            <NavLink to="/contact" onClick={() => setMobileMenuOpen(false)} className={({isActive}) => isActive ? "nav-link active" : "nav-link"}>{t.nav.contact}</NavLink>
            <Search size={18} className="search-icon" style={{ color: 'var(--text-muted)', cursor: 'pointer', marginLeft: '0.5rem' }} />
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-logo">
                <img src="/logo.png" alt="School Logo" onError={(e) => { e.target.style.display='none' }} />
                <div>
                  <h3 style={{color: 'white', fontSize: '1.1rem'}}>{language === 'mr' ? 'श्री छत्रपती शिवाजी महाराज महानगरपालिका प्राथमिक शाळा' : 'Shri Chhatrapati Shivaji Maharaj Mahanagarpalika Primary School'}</h3>
                  <p style={{fontSize: '0.875rem', color: 'rgba(255,255,255,0.7)', marginTop: '4px'}}>अहिल्यानगर महानगरपालिका</p>
                </div>
              </div>
              <p style={{color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', marginTop: '1rem'}}>
                {language === 'mr' ? 'गुणवत्तापूर्ण प्राथमिक शिक्षणाद्वारे विद्यार्थ्यांचे शैक्षणिक, मानसिक आणि सामाजिक विकास हे आमचे ध्येय.' : 'Our goal is the educational, mental, and social development of students through quality primary education.'}
              </p>
            </div>
            
            <div>
              <h4>{language === 'mr' ? 'महत्त्वाचे दुवे' : 'Quick Links'}</h4>
              <ul className="footer-links">
                <li><Link to="/">{t.nav.home}</Link></li>
                <li><Link to="/about-school">{t.nav.about}</Link></li>

                <li><Link to="/contact">{t.nav.contact}</Link></li>
              </ul>
            </div>
            
            <div>
              <h4>{language === 'mr' ? 'संपर्क माहिती' : 'Contact Info'}</h4>
              <ul className="footer-links" style={{ color: 'rgba(255,255,255,0.8)' }}>
                <li style={{ display: 'flex', gap: '0.5rem' }}><MapPin size={16} /> भुतकरवाडी, अहिल्यानगर</li>
                <li style={{ display: 'flex', gap: '0.5rem' }}><Phone size={16} /> 8793617304</li>
                <li style={{ display: 'flex', gap: '0.5rem' }}><Mail size={16} /> mnpschoolbhutkarwadi03@gmail.com</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>© 2026 श्री छत्रपती शिवाजी महाराज महानगरपालिका प्राथमिक शाळा, भुतकरवाडी. {language === 'mr' ? 'सर्व हक्क राखीव.' : 'All rights reserved.'}</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
