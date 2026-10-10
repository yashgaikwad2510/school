import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import ProfileCard, { educationalGuides, schoolPillars, teachers } from '../components/ProfileCard';
import { Link } from 'react-router-dom';
import { Megaphone, ArrowRight, GraduationCap, Calendar, Book, Users, Image as ImageIcon, Phone, Mail, BookOpen, HeartPulse, ShieldCheck, Palette, X, Target, School, Home as HomeIcon, Building, FileText, Link as LinkIcon, Bell, ChevronRight, HelpCircle } from 'lucide-react';

const rawFacilityImages = import.meta.glob('../assets/आमच्या शाळेतील सुविधा/*.{png,jpg,jpeg,webp}', { eager: true, import: 'default' });

const getFacilityImage = (keywords, defaultFallback = '/teacherbg.png') => {
  const paths = Object.keys(rawFacilityImages);
  if (!paths || paths.length === 0) return defaultFallback;
  for (const keyword of keywords) {
    const match = paths.find(p => p.toLowerCase().includes(keyword.toLowerCase()));
    if (match) return rawFacilityImages[match];
  }
  return rawFacilityImages[paths[0]]; // fallback to first image found
};

const Home = () => {
  const { t } = useLanguage();
  const [activeFacility, setActiveFacility] = useState(null);

  const facilitiesData = [
    {
      id: 'knowledge',
      title: t('facilities.knowledge'),
      shortText: t('facilities.knowledgeShort'),
      icon: <BookOpen size={20} color="var(--accent-gold)" />,
      img: getFacilityImage(['library', 'reading']),
      details: [
        t('facilities.library'),
        t('facilities.digital'),
        t('facilities.science'),
        t('facilities.creativity')
      ]
    },
    {
      id: 'sports',
      title: t('facilities.sports'),
      shortText: t('facilities.sportsShort'),
      icon: <HeartPulse size={20} color="var(--accent-gold)" />,
      img: getFacilityImage(['sports', 'health']),
      details: [
        t('facilities.playground'),
        t('facilities.nutrition'),
        t('facilities.health'),
        t('facilities.yoga')
      ]
    },
    {
      id: 'environment',
      title: t('facilities.safe'),
      shortText: t('facilities.safeShort'),
      icon: <ShieldCheck size={20} color="var(--accent-gold)" />,
      img: getFacilityImage(['safe', 'school', 'classroom']),
      details: [
        t('facilities.classrooms'),
        t('facilities.security'),
        t('facilities.restrooms'),
        t('facilities.environment')
      ]
    },
    {
      id: 'activities',
      title: t('facilities.development'),
      shortText: t('facilities.developmentShort'),
      icon: <Palette size={20} color="var(--accent-gold)" />,
      img: getFacilityImage(['overall', 'development']),
      details: [
        t('facilities.cultural'),
        t('facilities.art'),
        t('facilities.trees'),
        t('facilities.social')
      ]
    }
  ];

  return (
    <div>
      {/* === GOV PORTAL CONTENT STYLES (layout handled by global .page-layout) === */}
      <style>{`
        /* Sidebars */
        .gov-sidebar {
          background: #fff;
          border: 1px solid #8ab8d0;
          border-radius: 2px;
        }
        .gov-sidebar-header {
          background-color: #0c1a9c;
          color: #fff;
          padding: 12px 15px;
          font-size: 1.1rem;
          font-weight: bold;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 2px solid #ffb833;
        }
        .gov-sidebar-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .gov-sidebar-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 10px 15px;
          border-bottom: 1px solid #e1e8ed;
          color: #000;
          font-size: 0.95rem;
          cursor: pointer;
          transition: background-color 0.2s;
        }
        .gov-sidebar-item:last-child {
          border-bottom: none;
        }
        .gov-sidebar-item:hover {
          background-color: #f7fbff;
        }
        .school-pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
          margin-top: 1rem;
        }
        .school-pillars-featured {
          display: flex;
          justify-content: center;
          margin: 1rem 0;
        }
        .school-pillars-featured .pillar-profile-card {
          width: min(100%, 308px);
        }
        .school-guides-extra .tcard {
          display: flex;
          flex-direction: column;
          min-width: 0;
          overflow: hidden;
          border: 1px solid #8ab8d0;
          background: #fff;
          box-shadow: 0 2px 7px rgba(16, 42, 114, .06);
        }
        .school-guides-extra .tcard-photo {
          width: 100%;
          aspect-ratio: 4 / 3;
          overflow: hidden;
          background: #dbeef6;
          border-bottom: 1px solid #8ab8d0;
        }
        .school-guides-extra .tcard-photo img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center top;
        }
        .school-guides-extra .tcard > div:not(.tcard-photo) {
          flex: 1;
          padding: 14px 16px 18px;
          background: #f7fbff;
        }
        .school-guides-extra .tcard h3 {
          margin: 0 0 6px;
          color: #0c1a9c;
          font-size: 1.2rem;
          line-height: 1.35;
        }
        .school-guides-extra .tcard-role {
          display: block;
          margin: 0;
          color: #111;
          font-size: .95rem;
          line-height: 1.5;
        }
        .pillar-profile-card {
          overflow: hidden;
          border: 1px solid #8ab8d0;
          background: #fff;
          box-shadow: 0 2px 7px rgba(16, 42, 114, .06);
        }
        .pillar-profile-photo {
          width: 100%;
          aspect-ratio: 4 / 3;
          background: #dbeef6;
          border-bottom: 1px solid #8ab8d0;
        }
        .pillar-profile-photo img {
          width: 100%;
          height: 100%;
          display: block;
          object-fit: cover;
          object-position: center top;
        }
        .pillar-profile-content {
          min-height: 112px;
          padding: 14px 16px 18px;
          background: #f7fbff;
        }
        .pillar-profile-content h3 {
          margin: 0 0 6px;
          color: #0c1a9c;
          font-size: 1.2rem;
          line-height: 1.35;
        }
        .pillar-profile-content .tcard-role {
          margin-top: 0;
          color: #111;
          border: 0;
          border-radius: 0;
          padding: 0;
          font-family: inherit;
          font-size: .95rem;
          font-weight: 400;
          letter-spacing: normal;
          text-transform: none;
        }
        @media (max-width: 620px) {
          .school-pillars-grid {
            grid-template-columns: 1fr;
          }
        }
        .gov-sidebar-item-left {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #081272;
        }
        .gov-sidebar-item.active {
          background-color: #ffefbc;
          font-weight: bold;
          border-left: 3px solid #d9381e;
        }

        /* Center Main Content */
        .gov-center {
          display: flex;
          flex-direction: column;
          gap: 15px;
          min-width: 0;
        }
        .gov-center > .school-pillars-section {
        }
        .gov-center > .facilities-order {
        }
        .gov-center > .leadership-order {
        }

        /* Section Divider */
        .gov-section-divider {
          height: 20px;
        }

        /* Section Headers */
        .gov-header {
          background-color: #0c1a9c;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 20px;
          color: white;
          border: 1px solid #081272;
        }
        .gov-header-left {
          display: flex;
          align-items: center;
          gap: 15px;
        }
        .gov-header-title {
          font-size: 1.8rem;
          font-weight: bold;
          margin: 0;
        }
        .gov-header-subtitle {
          font-size: 0.95rem;
          color: #d6eaf8;
        }

        /* Info Strips */
        .gov-intro-strip {
          background-color: #d6eaf8;
          padding: 15px 20px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          border: 1px solid #8ab8d0;
          font-size: 1rem;
          line-height: 1.5;
          color: #000;
          gap: 15px;
        }

        /* Profile Blocks (Leadership) */
        .gov-profiles-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }
        .gov-profile-block {
          border: 1px solid #8ab8d0;
          background: #fff;
        }
        .gov-profile-header {
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
        .gov-profile-content {
          padding: 15px;
          background-color: #f7fbff;
        }
        .gov-profile-top {
          display: flex;
          gap: 15px;
          margin-bottom: 15px;
        }
        .gov-profile-photo {
          width: 120px;
          height: 150px;
          object-fit: cover;
          border: 1px solid #8ab8d0;
          background-color: #fff;
          padding: 2px;
        }
        .gov-profile-details {
          flex: 1;
          padding-top: 5px;
        }
        .gov-profile-name {
          color: #0c1a9c;
          font-size: 1.25rem;
          font-weight: bold;
          margin: 0 0 5px 0;
        }
        .gov-profile-role {
          color: #000;
          font-size: 0.95rem;
          font-weight: normal;
          margin: 0;
          line-height: 1.4;
        }

        /* Tables */
        .gov-table {
          width: 100%;
          border-collapse: collapse;
          font-size: 0.9rem;
          table-layout: fixed;
          word-wrap: break-word;
        }
        .gov-table th, .gov-table td {
          border: 1px solid #8ab8d0;
          padding: 8px 10px;
          text-align: left;
          color: #000;
          word-break: break-word;
        }
        .gov-table th {
          background-color: #d6eaf8;
          width: 35%;
          font-weight: normal;
        }
        .gov-table td {
          background-color: #fff;
        }

        /* Footer Strip */
        .gov-footer-strip {
          background-color: #d6eaf8;
          padding: 15px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #8ab8d0;
          position: relative;
        }
        .gov-footer-icon {
          position: absolute;
          left: 20px;
          color: #d9381e;
        }
        .gov-footer-icon-right {
          position: absolute;
          right: 20px;
          color: #0c1a9c;
        }
        .gov-footer-text {
          color: #0c1a9c;
          font-size: 1.15rem;
          font-weight: bold;
        }

        /* Facility Category Blocks */
        .gov-fac-block {
          border: 1px solid #8ab8d0;
          background: #fff;
        }
        .gov-fac-block-header {
          background-color: #ffefbc;
          color: #0c1a9c;
          font-size: 1.2rem;
          font-weight: bold;
          padding: 10px 15px;
          border-bottom: 1px solid #8ab8d0;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .gov-fac-block-body {
          display: flex;
          gap: 15px;
          padding: 15px;
          background-color: #f7fbff;
        }
        .gov-fac-block-img {
          width: 200px;
          height: 160px;
          object-fit: cover;
          border: 1px solid #8ab8d0;
          flex-shrink: 0;
          background: #fff;
          padding: 2px;
        }
        .gov-fac-block-content {
          flex: 1;
        }
        .gov-fac-block-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .gov-fac-block-list li {
          padding: 5px 0;
          font-size: 0.9rem;
          color: #333;
          line-height: 1.5;
          border-bottom: 1px dotted #d6eaf8;
          display: flex;
          align-items: flex-start;
          gap: 8px;
        }
        .gov-fac-block-list li:last-child {
          border-bottom: none;
        }
        .gov-fac-bullet {
          color: #d9381e;
          font-weight: bold;
          flex-shrink: 0;
          margin-top: 2px;
        }
        .staff-section {
          padding: 10px 0 5px;
        }
        .staff-section-header {
          margin-bottom: 24px;
          padding-left: 14px;
          border-left: 4px solid #ffb833;
        }
        .staff-section-title {
          margin: 0;
          color: #0c1a9c;
          font-size: 2rem;
          line-height: 1.25;
        }
        .staff-section-subtitle {
          margin: 8px 0 0;
          color: #667085;
          font-size: 1rem;
        }
        .staff-card-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 20px;
        }
        .staff-card {
          overflow: hidden;
          background: #fff;
          border: 1px solid #e5eaf0;
          border-radius: 13px;
          box-shadow: 0 4px 14px rgba(13, 43, 91, 0.08);
        }
        .staff-card-photo {
          display: block;
          width: 100%;
          aspect-ratio: 4 / 3;
          object-fit: cover;
          object-position: center top;
        }
        .staff-card-content {
          padding: 20px;
        }
        .staff-card-name {
          margin: 0 0 10px;
          color: #0d2b5b;
          font-size: 1.3rem;
          line-height: 1.35;
        }
        .staff-card-badge {
          display: inline-block;
          margin-bottom: 12px;
          padding: 5px 11px;
          border-radius: 5px;
          background: #f2a000;
          color: #0d2b5b;
          font-size: 0.85rem;
          font-weight: 700;
        }
        .staff-card-school {
          min-height: 48px;
          margin: 0;
          color: #667085;
          font-size: 0.9rem;
          line-height: 1.55;
        }
        .staff-card-divider {
          height: 1px;
          margin: 18px 0 14px;
          background: #e5eaf0;
        }
        .staff-card-detail {
          display: flex;
          align-items: flex-start;
          gap: 9px;
          margin-top: 12px;
          color: #172033;
          font-size: 0.9rem;
          line-height: 1.45;
        }
        .staff-card-detail svg {
          flex-shrink: 0;
          margin-top: 2px;
          color: #173f82;
        }
        .staff-card-detail-label {
          display: block;
          color: #667085;
          font-size: 0.78rem;
        }
        .gov-fac-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 15px;
        }

        /* Mission Block */
        .gov-fac-mission {
          border: 1px solid #8ab8d0;
          background: #fff;
        }
        .gov-fac-mission-header {
          background-color: #0c1a9c;
          color: #fff;
          font-size: 1.1rem;
          font-weight: bold;
          padding: 10px 15px;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 2px solid #ffb833;
        }
        .gov-fac-mission-body {
          padding: 20px;
          background: #fffdf5;
          text-align: center;
          font-size: 1.05rem;
          color: #0c1a9c;
          font-weight: 600;
          line-height: 1.7;
        }

        /* Notice Board */
        .gov-notice-board {
          margin-top: 0;
        }
        .gov-notice-item {
          padding: 10px 15px;
          border-bottom: 1px dotted #8ab8d0;
          font-size: 0.85rem;
          color: #333;
          line-height: 1.4;
        }
        .gov-notice-item:last-child {
          border-bottom: none;
        }
        .gov-notice-date {
          color: #d9381e;
          font-weight: bold;
          font-size: 0.75rem;
          display: block;
          margin-bottom: 3px;
        }
        .gov-notice-more {
          display: block;
          text-align: right;
          padding: 8px 15px;
          font-size: 0.85rem;
          color: #0c1a9c;
          font-weight: bold;
          background: #f7fbff;
          text-decoration: none;
        }

        /* Responsive */
        @media (max-width: 860px) {
          .gov-profiles-grid,
          .gov-fac-grid {
            grid-template-columns: 1fr;
          }
          .gov-header {
            flex-direction: column;
            text-align: center;
            gap: 8px;
          }
          .gov-fac-block-body {
            flex-direction: column;
          }
          .gov-fac-block-img {
            width: 100%;
            height: 180px;
          }
          .gov-footer-icon, .gov-footer-icon-right {
            position: static;
            margin: 0 10px;
          }
          .gov-footer-strip {
            flex-direction: column;
            gap: 10px;
            text-align: center;
          }
          .gov-profile-top {
            flex-direction: column;
            align-items: center;
            text-align: center;
          }
          .gov-intro-strip {
            flex-direction: column;
            text-align: center;
          }
          .staff-card-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      {/* ======================================================================
           UNIFIED 3-COLUMN PAGE LAYOUT
           LEFT SIDEBAR | CENTER CONTENT | RIGHT SIDEBAR
         ====================================================================== */}
      <div style={{ backgroundColor: '#f0f4f8', padding: '20px 0 40px' }}>
        <div className="page-layout">

          {/* ======= LEFT SIDEBAR ======= */}
          <aside className="left-sidebar">
            <div className="gov-sidebar">
              <div className="gov-sidebar-header">
                <HomeIcon size={20} />
                {t('sidebar.quickAccess')}
              </div>
              <ul className="gov-sidebar-list">
                {[
                  { icon: HomeIcon, text: t('common.home'), to: "/" },
                  { icon: Users, text: t('sidebar.academicLeadership'), to: "/teachers" },
                  { icon: Users, text: t('nav.teachers'), to: "/teachers" },
                  { icon: GraduationCap, text: t('nav.students'), to: "/students" },
                  { icon: Calendar, text: t('nav.activities'), to: "/activities" },
                  { icon: ImageIcon, text: t('nav.gallery'), to: "/gallery" },
                  { icon: Phone, text: t('nav.contact'), to: "/contact" },
                  { icon: LinkIcon, text: t('sidebar.importantLinks'), to: "/contact" },
                  { icon: Building, text: t('sidebar.governmentSchemes'), to: "/about-school" },
                  { icon: FileText, text: t('sidebar.admission'), to: "/contact" },
                  { icon: Bell, text: t('sidebar.noticeBoard'), to: "/#notices" },
                  { icon: HelpCircle, text: t('sidebar.faq'), to: "/contact" },
                ].map((item, idx) => (
                  <Link key={idx} to={item.to} className="gov-sidebar-item">
                    <div className="gov-sidebar-item-left">
                      <item.icon size={16} color="#081272" />
                      <span>{item.text}</span>
                    </div>
                    <ChevronRight size={14} color="#8ab8d0" />
                  </Link>
                ))}
              </ul>
            </div>
          </aside>

          {/* ======= CENTER CONTENT ======= */}
          <main className="main-content">

            {/* ─── HERO SECTION (RESTORED ORIGINAL) ─── */}
            <section
              className="hero"
              style={{
                position: 'relative',
                background: 'url("/bghero.png") no-repeat right center/cover',
                minHeight: '50vh',
                display: 'flex',
                alignItems: 'center',
                color: 'white',
                padding: '3rem 0',
                borderRadius: '4px',
                overflow: 'hidden'
              }}
            >
            <div
              style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(90deg, rgba(0, 0, 0, 0.42) 0%, rgba(0, 0, 0, 0.22) 38%, rgba(0, 0, 0, 0) 68%)',
                zIndex: 1,
                pointerEvents: 'none'
              }}
            ></div>

            <div style={{ position: 'relative', zIndex: 2, width: '100%', padding: '0 20px' }}>
                <div style={{ maxWidth: '650px' }}>
                  <div className="eyebrow" style={{ color: 'var(--accent-gold)' }}>{t('home.eyebrow')}</div>
                  <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', marginBottom: '1.5rem', color: 'white', lineHeight: 1.2 }}>
                    {t('home.heroTitle')}
                  </h1>
                  <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', marginBottom: '2rem', opacity: 0.9, lineHeight: 1.6 }}>
                    {t('home.heroMission')}
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link to="/about-school" className="btn btn-primary">
                      {t('home.learnAbout')} <ArrowRight size={18} />
                    </Link>
                    <Link to="/contact" className="btn btn-outline">
                      {t('home.admissionInfo')} <ArrowRight size={18} />
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* ─── NOTICE BAR ─── */}
            <div style={{ backgroundColor: 'var(--cream-bg)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '1rem 1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1, flexWrap: 'wrap' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontWeight: 700, whiteSpace: 'nowrap' }}>
                    <Megaphone size={20} />
                    {t('home.importantNotices')}
                  </div>
                  <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-color)' }} className="hide-mobile"></div>
                  <div style={{ color: 'var(--text-main)', fontSize: 'clamp(0.8rem, 2.5vw, 0.9375rem)', fontWeight: 500, flex: 1, minWidth: '200px' }}>
                    {t('home.admissionOpen')} <span className="hide-mobile">&nbsp;|&nbsp; {t('home.calendarPublished')}</span>
                  </div>
                </div>
                <Link to="/" style={{ color: 'var(--primary-navy)', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem', whiteSpace: 'nowrap' }}>
                  {t('home.viewAllNotices')} <ArrowRight size={14} />
                </Link>
              </div>
            </div>

            {/* ─── QUICK ACCESS CARDS ─── */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))',
              gap: '1rem'
            }}>
              {[
                { icon: GraduationCap, title: t('home.admission'), desc: t('home.admissionDesc') },
                { icon: Calendar, title: t('home.calendarTitle'), desc: t('home.calendarDesc') },
                { icon: Book, title: t('home.curriculum'), desc: t('home.curriculumDesc') },
                { icon: Users, title: t('home.team'), desc: t('home.teamDesc') },
                { icon: ImageIcon, title: t('home.photos'), desc: t('home.photosDesc') },
                { icon: Phone, title: t('home.contact'), desc: t('home.contactDesc') },
              ].map((card, idx) => (
                <div key={idx} style={{
                  border: '1px solid var(--border-color)',
                  borderRadius: '8px',
                  padding: '1.25rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  backgroundColor: 'var(--bg-white)',
                  boxShadow: 'var(--shadow-subtle)',
                  transition: 'transform 0.2s, box-shadow 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = 'var(--shadow-hover)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'var(--shadow-subtle)'; }}
                >
                  <div style={{ color: 'var(--primary-navy)' }}>
                    <card.icon size={28} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', color: 'var(--dark-navy)' }}>{card.title}</h4>
                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* ─── SECTION 1: शालेय आधारस्तंभ (School Pillars) ─── */}
            <section className="school-pillars-section" aria-labelledby="school-pillars-title">
              <div className="gov-header">
                <div className="gov-header-left">
                  <Users size={32} />
                  <h2 id="school-pillars-title" className="gov-header-title" style={{ color: '#fff' }}>{t('pillars.title')}</h2>
                </div>
                <div className="gov-header-subtitle">
                  {t('pillars.subtitle')}
                </div>
              </div>
              <div className="gov-intro-strip">
                <div>
                  {t('pillars.intro')}<br />
                  {t('pillars.intro2')}
                </div>
                <div style={{ color: '#081272', paddingLeft: '15px', flexShrink: 0 }}>
                  <Megaphone size={40} fill="#c4ecfa" color="#081272" strokeWidth={1} />
                </div>
              </div>
              <div className="school-pillars-featured">
                <ProfileCard person={schoolPillars[0]} t={t} variant="pillar" />
              </div>
              <div className="school-pillars-grid">
                {schoolPillars.slice(1, 3).map((person) => <ProfileCard key={person.nameKey} person={person} t={t} variant="pillar" />)}
                {schoolPillars.slice(3).map((person) => <ProfileCard key={person.nameKey} person={person} t={t} variant="pillar" />)}
              </div>
            </section>

            {/* ─── SECTION 2: शैक्षणिक मार्गदर्शक (Educational Guides) ─── */}
            <div className="gov-header leadership-order">
              <div className="gov-header-left">
                <Users size={32} />
                <h2 className="gov-header-title" style={{ color: '#fff' }}>{t('leadership.title')}</h2>
              </div>
              <div className="gov-header-subtitle">
                {t('leadership.subtitle')}
              </div>
            </div>

            <div className="gov-intro-strip leadership-order">
              <div>
                {t('leadership.intro')}<br/>
                {t('leadership.intro2')}
              </div>
              <div style={{color: '#081272', paddingLeft: '15px', flexShrink: 0}}>
                <Megaphone size={40} fill="#c4ecfa" color="#081272" strokeWidth={1} />
              </div>
            </div>

            <div className="gov-profiles-grid leadership-order">
              <div className="gov-profile-block">
                <div className="gov-profile-header">
                  <Building size={22} color="#0c1a9c" />
                  {t('leadership.municipality')}
                </div>
                <div className="gov-profile-content">
                  <div className="gov-profile-top">
                    <img src="/aukta.jpeg" alt={t('leadership.commissionerName')} className="gov-profile-photo" />
                    <div className="gov-profile-details">
                      <h3 className="gov-profile-name">{t('leadership.commissionerName')}</h3>
                      <p className="gov-profile-role">{t('leadership.commissioner')}</p>
                      <div style={{ marginTop: '10px', width: '30px', height: '3px', backgroundColor: '#ffb833' }}></div>
                    </div>
                  </div>
                  <table className="gov-table">
                    <tbody>
                      <tr><th>{t('leadership.position')}</th><td>{t('leadership.commissionerRole')}</td></tr>
                      <tr><th>{t('leadership.organization')}</th><td>{t('leadership.organizationValue')}</td></tr>
                      <tr><th>{t('leadership.scope')}</th><td>{t('leadership.scopeValue')}</td></tr>
                      <tr><th>{t('leadership.guidance')}</th><td>{t('leadership.guidanceValue')}</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="gov-profile-block">
                <div className="gov-profile-header">
                  <Target size={22} color="#0c1a9c" />
                  {t('leadership.educationDepartment')}
                </div>
                <div className="gov-profile-content">
                  <div className="gov-profile-top">
                    <img src="/zuber.jpeg" alt={t('leadership.administrationOfficerName')} className="gov-profile-photo" />
                    <div className="gov-profile-details">
                      <h3 className="gov-profile-name">{t('leadership.administrationOfficerName')}</h3>
                      <p className="gov-profile-role">{t('leadership.administrationOfficer')}<br/>{t('leadership.departmentValue')}</p>
                      <div style={{ marginTop: '10px', width: '30px', height: '3px', backgroundColor: '#ffb833' }}></div>
                    </div>
                  </div>
                  <table className="gov-table">
                    <tbody>
                      <tr><th>{t('leadership.position')}</th><td>{t('leadership.administrationOfficer')}</td></tr>
                      <tr><th>{t('leadership.department')}</th><td>{t('leadership.departmentValue')}</td></tr>
                      <tr><th>{t('leadership.scope')}</th><td>{t('leadership.planningScope')}</td></tr>
                      <tr><th>{t('leadership.guidance')}</th><td>{t('leadership.futureGuidance')}</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
              {educationalGuides.slice(2).map((person) => (
                <div className="gov-profile-block" key={person.nameKey}>
                  <div className="gov-profile-header">
                    <Building size={22} color="#0c1a9c" />
                    {t('leadership.municipality')}
                  </div>
                  <div className="gov-profile-content">
                    <div className="gov-profile-top">
                      <img src={person.image} alt={t(person.nameKey)} className="gov-profile-photo" />
                      <div className="gov-profile-details">
                        <h3 className="gov-profile-name">{t(person.nameKey)}</h3>
                        <p className="gov-profile-role">{t(person.roleKey)}</p>
                        <div style={{ marginTop: '10px', width: '30px', height: '3px', backgroundColor: '#ffb833' }}></div>
                      </div>
                    </div>
                    <table className="gov-table">
                      <tbody>
                        <tr><th>{t('leadership.position')}</th><td>{t(person.roleKey)}</td></tr>
                        <tr><th>{t('leadership.organization')}</th><td>{t(person.organizationKey)}</td></tr>
                        <tr><th>{t('leadership.scope')}</th><td>{t(person.scopeKey)}</td></tr>
                        <tr><th>{t('leadership.guidance')}</th><td>{t(person.guidanceKey)}</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              ))}
            </div>

            <div className="gov-footer-strip leadership-order">
              <Building size={32} className="gov-footer-icon" fill="#ffefbc" color="#000" strokeWidth={1} />
              <div className="gov-footer-text">
                {t('shared.footerStrip')}
              </div>
              <BookOpen size={32} className="gov-footer-icon-right" fill="#0c1a9c" color="#fff" strokeWidth={1} />
            </div>

            {/* ─── SECTION: शिक्षक आणि कर्मचारी (Teachers) ─── */}
            <div className="gov-header teachers-order">
              <div className="gov-header-left">
                <Users size={32} />
                <h2 className="gov-header-title" style={{ color: '#fff' }}>{t('teachers.title')}</h2>
              </div>
            </div>
            <div className="gov-intro-strip teachers-order">
              <div>
                <ul style={{ listStyleType: 'disc', paddingLeft: '20px', margin: 0, lineHeight: '1.6' }}>
                  <li>{t('teachers.slogan1')}</li>
                  <li>{t('teachers.slogan2')}</li>
                  <li>{t('teachers.slogan3')}</li>
                  <li>{t('teachers.slogan4')}</li>
                  <li>{t('teachers.slogan5')}</li>
                </ul>
              </div>
              <div style={{ color: '#081272', paddingLeft: '15px', flexShrink: 0, display: 'flex', alignItems: 'center' }}>
                <Megaphone size={40} fill="#c4ecfa" color="#081272" strokeWidth={1} />
              </div>
            </div>
            <div className="gov-profiles-grid teachers-order">
              {teachers.map((person) => (
                <div className="gov-profile-block" key={person.nameKey}>
                  <div className="gov-profile-header">
                    <School size={22} color="#0c1a9c" />
                    {t('teachers.title')}
                  </div>
                  <div className="gov-profile-content">
                    <div className="gov-profile-top">
                      <img src={person.image} alt={t(person.nameKey)} className="gov-profile-photo" />
                      <div className="gov-profile-details">
                        <h3 className="gov-profile-name">{t(person.nameKey)}</h3>
                        <p className="gov-profile-role">{t(person.roleKey)}</p>
                        <div style={{ marginTop: '10px', width: '30px', height: '3px', backgroundColor: '#ffb833' }}></div>
                      </div>
                    </div>
                    <table className="gov-table">
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

            {/* ─── SPACER ─── */}
            <div className="gov-section-divider facilities-order"></div>

            {/* ─── SECTION 2: आमच्या शाळेतील सुविधा ─── */}
            <div className="gov-header facilities-order">
              <div className="gov-header-left">
                <School size={32} />
                <h2 className="gov-header-title" style={{ color: '#fff' }}>{t('facilities.title')}</h2>
              </div>
              <div className="gov-header-subtitle">
                {t('facilities.subtitle')}
              </div>
            </div>

            <div className="gov-intro-strip facilities-order">
              <BookOpen size={40} color="#081272" style={{flexShrink: 0}} />
              <div>
                {t('facilities.intro')} {t('facilities.intro2')}
              </div>
            </div>

            <div className="gov-fac-grid facilities-order">
              {facilitiesData.map((fac) => (
                <div key={fac.id} className="gov-fac-block">
                  <div className="gov-fac-block-header">
                    {fac.icon}
                    {fac.title}
                  </div>
                  <div className="gov-fac-block-body">
                    <img src={fac.img} alt={fac.title} className="gov-fac-block-img" loading="lazy" />
                    <div className="gov-fac-block-content">
                      <ul className="gov-fac-block-list">
                        {fac.details.map((detail, idx) => (
                          <li key={idx}>
                            <span className="gov-fac-bullet">•</span>
                            <span>{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="gov-fac-mission facilities-order">
              <div className="gov-fac-mission-header">
                <Target size={20} />
                {t('facilities.mission')}
              </div>
              <div className="gov-fac-mission-body">
                "{t('facilities.missionText')}"
              </div>
            </div>

            <div className="gov-footer-strip facilities-order">
              <School size={28} className="gov-footer-icon" color="#0c1a9c" />
              <div className="gov-footer-text">
                {t('shared.footerStrip')}
              </div>
              <BookOpen size={28} className="gov-footer-icon-right" color="#0c1a9c" />
            </div>

          </main>

          {/* ======= RIGHT SIDEBAR ======= */}
          <aside className="right-sidebar">
            <div className="gov-sidebar">
              <div className="gov-sidebar-header">
                <LinkIcon size={20} />
                {t('sidebar.importantLinks')}
              </div>
              <ul className="gov-sidebar-list">
                {[
                  { text: t('sidebar.circulars'), to: "/#notices" },
                  { text: t('sidebar.admissionProcess'), to: "/contact" },
                  { text: t('sidebar.curriculum'), to: "/students" },
                  { text: t('sidebar.calendar'), to: "/#notices" },
                  { text: t('sidebar.photoCollection'), to: "/gallery" },
                  { text: t('sidebar.documents'), to: "/contact" }
                ].map((text, idx) => (
                  <Link key={idx} to={text.to} className="gov-sidebar-item">
                    <div className="gov-sidebar-item-left">
                      <ChevronRight size={14} color="#d9381e" />
                      <span>{text.text}</span>
                    </div>
                  </Link>
                ))}
              </ul>
            </div>

            <div id="notices" className="gov-sidebar gov-notice-board">
              <div className="gov-sidebar-header">
                <Bell size={20} />
                {t('sidebar.noticeBoard')}
              </div>
              <div className="gov-notice-list">
                <div className="gov-notice-item">
                  <span className="gov-notice-date">{t('notice.new')} ({t('notice.date.new')})</span>
                  {t('notice.admission')}
                </div>
                <div className="gov-notice-item">
                  <span className="gov-notice-date">{t('notice.important')} ({t('notice.date.important')})</span>
                  {t('notice.uniformCamp')}
                </div>
                <div className="gov-notice-item">
                  <span className="gov-notice-date">{t('notice.parentMeeting')} ({t('notice.date.parentMeeting')})</span>
                  {t('notice.parentMeetingText')}
                </div>
              </div>
              <Link to="/#notices" className="gov-notice-more">{t('notice.viewAll')}</Link>
            </div>
          </aside>

        </div>
      </div>

    </div>
  );
};

export default Home;
