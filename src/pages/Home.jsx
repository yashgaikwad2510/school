import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Link } from 'react-router-dom';
import { Megaphone, ArrowRight, GraduationCap, Calendar, Book, Users, Image as ImageIcon, Phone, BookOpen, HeartPulse, ShieldCheck, Palette, X, Target, School, Home as HomeIcon, Building, FileText, Link as LinkIcon, Bell, ChevronRight, HelpCircle } from 'lucide-react';

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
  const { language } = useLanguage();
  const t = translations[language];
  const [activeFacility, setActiveFacility] = useState(null);

  const facilitiesData = [
    {
      id: 'knowledge',
      title: 'ज्ञानाची समृद्धी',
      shortText: 'ग्रंथालय, डिजिटल शिक्षण आणि शैक्षणिक साहित्य',
      icon: <BookOpen size={20} color="var(--accent-gold)" />,
      img: getFacilityImage(['library', 'reading']),
      details: [
        'सुसज्ज ग्रंथालय व वाचन साहित्य',
        'डिजिटल शिक्षणासाठी संगणक व स्मार्ट साधने',
        'विज्ञान व गणित विषयासाठी शैक्षणिक साहित्य',
        'विद्यार्थ्यांच्या कल्पकतेला आणि सर्जनशीलतेला चालना देणारे उपक्रम'
      ]
    },
    {
      id: 'sports',
      title: 'खेळ आणि आरोग्य',
      shortText: 'क्रीडा, पोषण, स्वच्छता आणि आरोग्यविषयक सुविधा',
      icon: <HeartPulse size={20} color="var(--accent-gold)" />,
      img: getFacilityImage(['sports', 'health']),
      details: [
        'विस्तीर्ण मैदान व विविध खेळांचे साहित्य',
        'शालेय पोषण आहार आणि स्वच्छ पिण्याचे पाणी',
        'नियमित आरोग्य तपासणी व वैद्यकीय मार्गदर्शन',
        'शारीरिक आणि मानसिक स्वास्थ्यासाठी योग आणि व्यायाम'
      ]
    },
    {
      id: 'environment',
      title: 'सुरक्षित शालेय वातावरण',
      shortText: 'हवेशीर वर्गखोल्या, स्वच्छता आणि सुरक्षित परिसर',
      icon: <ShieldCheck size={20} color="var(--accent-gold)" />,
      img: getFacilityImage(['safe', 'school', 'classroom']),
      details: [
        'प्रशस्त व हवेशीर वर्गखोल्या',
        'शालेय परिसरात सुरक्षिततेसाठी योग्य व्यवस्था',
        'मुले व मुलींसाठी स्वतंत्र आणि स्वच्छ स्वच्छतागृहे',
        'निसर्गरम्य आणि आनंददायी शालेय परिसर'
      ]
    },
    {
      id: 'activities',
      title: 'सर्वांगीण विकास',
      shortText: 'कला, संस्कृती, पर्यावरण आणि विविध शैक्षणिक उपक्रम',
      icon: <Palette size={20} color="var(--accent-gold)" />,
      img: getFacilityImage(['overall', 'development']),
      details: [
        'विविध सांस्कृतिक कार्यक्रम आणि स्नेहसंमेलने',
        'कला, हस्तकला आणि चित्रकला स्पर्धा',
        'वृक्षारोपण आणि पर्यावरणपूरक उपक्रम',
        'सामाजिक जाणीव व नेतृत्वगुण विकसित करणारे कार्यक्रम'
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
                त्वरित प्रवेश
              </div>
              <ul className="gov-sidebar-list">
                {[
                  { icon: HomeIcon, text: "मुख्य पृष्ठ", to: "/" },
                  { icon: Users, text: "शैक्षणिक नेतृत्व", to: "/teachers" },
                  { icon: Users, text: "शिक्षक आणि कर्मचारी", to: "/teachers" },
                  { icon: GraduationCap, text: "विद्यार्थी", to: "/students" },
                  { icon: Calendar, text: "उपक्रम", to: "/activities" },
                  { icon: ImageIcon, text: "गॅलरी", to: "/gallery" },
                  { icon: Phone, text: "संपर्क", to: "/contact" },
                  { icon: LinkIcon, text: "महत्त्वाचे दुवे", to: "/contact" },
                  { icon: Building, text: "शासकीय योजना", to: "/about-school" },
                  { icon: FileText, text: "प्रवेश माहिती", to: "/contact" },
                  { icon: Bell, text: "सूचना फलक", to: "/#notices" },
                  { icon: HelpCircle, text: "वारंवार विचारले जाणारे प्रश्न", to: "/contact" },
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
                  <div className="eyebrow" style={{ color: 'var(--accent-gold)' }}>शिक्षण | संस्कार | उज्ज्वल भविष्य</div>
                  <h1 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', marginBottom: '1.5rem', color: 'white', lineHeight: 1.2 }}>
                    श्री छत्रपती शिवाजी महाराज महानगरपालिका प्राथमिक शाळा, <span style={{ color: 'var(--accent-gold)' }}>भुतकरवाडी</span>
                  </h1>
                  <p style={{ fontSize: 'clamp(0.95rem, 2vw, 1.15rem)', marginBottom: '2rem', opacity: 0.9, lineHeight: 1.6 }}>
                    गुणवत्तापूर्ण प्राथमिक शिक्षणाद्वारे विद्यार्थ्यांचे शैक्षणिक, मानसिक आणि सामाजिक विकास हेच आमचे ध्येय.
                  </p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <Link to="/about-school" className="btn btn-primary">
                      शाळेबद्दल जाणून घ्या <ArrowRight size={18} />
                    </Link>
                    <Link to="/contact" className="btn btn-outline">
                      प्रवेश माहिती <ArrowRight size={18} />
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
                    महत्त्वाच्या सूचना
                  </div>
                  <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-color)' }} className="hide-mobile"></div>
                  <div style={{ color: 'var(--text-main)', fontSize: 'clamp(0.8rem, 2.5vw, 0.9375rem)', fontWeight: 500, flex: 1, minWidth: '200px' }}>
                    शाळा प्रवेश प्रक्रिया 2026-27 सुरू आहे. <span className="hide-mobile">&nbsp;|&nbsp; शैक्षणिक दिनदर्शिका जाहीर झाली आहे.</span>
                  </div>
                </div>
                <Link to="/" style={{ color: 'var(--primary-navy)', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem', whiteSpace: 'nowrap' }}>
                  सर्व सूचना पहा <ArrowRight size={14} />
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
                { icon: GraduationCap, title: 'प्रवेश प्रक्रिया', desc: '2026-27 माहिती' },
                { icon: Calendar, title: 'शैक्षणिक दिनदर्शिका', desc: 'महत्त्वाच्या तारखा' },
                { icon: Book, title: 'अभ्यासक्रम', desc: 'वर्गानुसार माहिती' },
                { icon: Users, title: 'शिक्षक व कर्मचारी', desc: 'आमची टीम' },
                { icon: ImageIcon, title: 'छायाचित्रे', desc: 'शाळेतील उपक्रम' },
                { icon: Phone, title: 'संपर्क', desc: 'पत्ता व संपर्क माहिती' },
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

            {/* ─── SECTION 1: शैक्षणिक नेतृत्व ─── */}
            <div className="gov-header">
              <div className="gov-header-left">
                <Users size={32} />
                <h2 className="gov-header-title" style={{ color: '#fff' }}>शैक्षणिक नेतृत्व</h2>
              </div>
              <div className="gov-header-subtitle">
                शाळेच्या गुणवत्तापूर्ण शिक्षणासाठी मार्गदर्शन करणारे मान्यवर
              </div>
            </div>

            <div className="gov-intro-strip">
              <div>
                आमच्या शाळेच्या प्रगतीत मार्गदर्शन, प्रशासन, शैक्षणिक नियोजन आणि सर्वांगीण विकासासाठी हे मान्यवर सतत कार्यरत आहेत.<br/>
                त्यांचा अनुभव, नेतृत्व आणि प्रेरणेमुळे विद्यार्थ्यांना गुणवत्तापूर्ण शिक्षणाची संधी उपलब्ध होत आहे.
              </div>
              <div style={{color: '#081272', paddingLeft: '15px', flexShrink: 0}}>
                <Megaphone size={40} fill="#c4ecfa" color="#081272" strokeWidth={1} />
              </div>
            </div>

            <div className="gov-profiles-grid">
              {/* अहिल्यानगर मनपा */}
              <div className="gov-profile-block">
                <div className="gov-profile-header">
                  <Building size={22} color="#0c1a9c" />
                  अहिल्यानगर मनपा
                </div>
                <div className="gov-profile-content">
                  <div className="gov-profile-top">
                    <img src="/aukta.jpeg" alt="श्री यशवंत भीमराव डांगे" className="gov-profile-photo" />
                    <div className="gov-profile-details">
                      <h3 className="gov-profile-name">श्री यशवंत भीमराव डांगे</h3>
                      <p className="gov-profile-role">अहिल्यानगर मनपा आयुक्त</p>
                      <div style={{ marginTop: '10px', width: '30px', height: '3px', backgroundColor: '#ffb833' }}></div>
                    </div>
                  </div>
                  <table className="gov-table">
                    <tbody>
                      <tr><th>पद</th><td>आयुक्त</td></tr>
                      <tr><th>संस्था</th><td>अहिल्यानगर महानगरपालिका</td></tr>
                      <tr><th>कार्यक्षेत्र</th><td>शिक्षण, प्रशासन व सर्वांगीण विकास</td></tr>
                      <tr><th>मार्गदर्शन</th><td>शाळेच्या गुणवत्तापूर्ण शिक्षणासाठी सतत मार्गदर्शन</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* शिक्षण विभाग */}
              <div className="gov-profile-block">
                <div className="gov-profile-header">
                  <Target size={22} color="#0c1a9c" />
                  शिक्षण विभाग
                </div>
                <div className="gov-profile-content">
                  <div className="gov-profile-top">
                    <img src="/zuber.jpeg" alt="श्री. जुबेर नुरमोहम्मद पठाण" className="gov-profile-photo" />
                    <div className="gov-profile-details">
                      <h3 className="gov-profile-name">श्री. जुबेर नुरमोहम्मद पठाण</h3>
                      <p className="gov-profile-role">प्रशासन अधिकारी<br/>अहिल्यानगर मनपा शिक्षण विभाग</p>
                      <div style={{ marginTop: '10px', width: '30px', height: '3px', backgroundColor: '#ffb833' }}></div>
                    </div>
                  </div>
                  <table className="gov-table">
                    <tbody>
                      <tr><th>पद</th><td>प्रशासन अधिकारी</td></tr>
                      <tr><th>विभाग</th><td>अहिल्यानगर मनपा शिक्षण विभाग</td></tr>
                      <tr><th>कार्यक्षेत्र</th><td>शैक्षणिक नियोजन, प्रशासन व शाळा विकास</td></tr>
                      <tr><th>मार्गदर्शन</th><td>विद्यार्थ्यांच्या उज्ज्वल भविष्यासाठी कटिबद्ध</td></tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="gov-footer-strip">
              <Building size={32} className="gov-footer-icon" fill="#ffefbc" color="#000" strokeWidth={1} />
              <div className="gov-footer-text">
                गुणवत्तापूर्ण शिक्षण &nbsp;|&nbsp; सक्षम प्रशासन &nbsp;|&nbsp; उज्ज्वल भविष्य
              </div>
              <BookOpen size={32} className="gov-footer-icon-right" fill="#0c1a9c" color="#fff" strokeWidth={1} />
            </div>

            {/* ─── SPACER ─── */}
            <div className="gov-section-divider"></div>

            {/* ─── SECTION 2: आमच्या शाळेतील सुविधा ─── */}
            <div className="gov-header">
              <div className="gov-header-left">
                <School size={32} />
                <h2 className="gov-header-title" style={{ color: '#fff' }}>आमच्या शाळेतील सुविधा</h2>
              </div>
              <div className="gov-header-subtitle">
                गुणवत्तापूर्ण शिक्षण, संस्कार आणि सर्वांगीण विकासासाठी उपलब्ध सुविधा
              </div>
            </div>

            <div className="gov-intro-strip">
              <BookOpen size={40} color="#081272" style={{flexShrink: 0}} />
              <div>
                विद्यार्थ्यांना आनंददायी, सुरक्षित आणि गुणवत्तापूर्ण शिक्षण मिळावे यासाठी अनेक विविध शैक्षणिक, शारीरिक, आरोग्यविषयक व
                भौतिक सुविधा उपलब्ध करून देत आहोत. या सुविधांच्या माध्यमातून प्रत्येक विद्यार्थ्यांचा संपूर्ण विकास घडावा, हे आमचे ध्येय आहे.
              </div>
            </div>

            <div className="gov-fac-grid">
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

            <div className="gov-fac-mission">
              <div className="gov-fac-mission-header">
                <Target size={20} />
                आमचे ध्येय
              </div>
              <div className="gov-fac-mission-body">
                "प्रत्येक विद्यार्थी शिकावा, घडावा, प्रगती करावा<br/>
                आणि आत्मविश्वासाने भविष्याकडे वाटचाल करावी!"
              </div>
            </div>

            <div className="gov-footer-strip">
              <School size={28} className="gov-footer-icon" color="#0c1a9c" />
              <div className="gov-footer-text">
                गुणवत्तापूर्ण शिक्षण &nbsp;|&nbsp; सक्षम प्रशासन &nbsp;|&nbsp; उज्ज्वल भविष्य
              </div>
              <BookOpen size={28} className="gov-footer-icon-right" color="#0c1a9c" />
            </div>

          </main>

          {/* ======= RIGHT SIDEBAR ======= */}
          <aside className="right-sidebar">
            <div className="gov-sidebar">
              <div className="gov-sidebar-header">
                <LinkIcon size={20} />
                महत्त्वाच्या लिंक्स
              </div>
              <ul className="gov-sidebar-list">
                {[
                  { text: "सूचना व परिपत्रके", to: "/#notices" },
                  { text: "प्रवेश प्रक्रिया", to: "/contact" },
                  { text: "शालेय अभ्यासक्रम", to: "/students" },
                  { text: "शालेय दिनदर्शिका", to: "/#notices" },
                  { text: "छायाचित्र संग्रह", to: "/gallery" },
                  { text: "महत्त्वाचे दस्तऐवज", to: "/contact" }
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
                सूचना फलक
              </div>
              <div className="gov-notice-list">
                <div className="gov-notice-item">
                  <span className="gov-notice-date">नवीन (०१-०६-२०२६)</span>
                  शाळेत नवीन शैक्षणिक वर्ष २०२६-२७ ची प्रवेश प्रक्रिया सुरू झाली आहे.
                </div>
                <div className="gov-notice-item">
                  <span className="gov-notice-date">महत्त्वाचे (२८-०५-२०२६)</span>
                  विद्यार्थ्यांसाठी गणवेश व पाठ्यपुस्तके वाटप शिबीर.
                </div>
                <div className="gov-notice-item">
                  <span className="gov-notice-date">पालक सभा (२५-०५-२०२६)</span>
                  इयत्ता पहिली ते चौथीच्या पालकांसाठी विशेष सभा.
                </div>
              </div>
              <Link to="/#notices" className="gov-notice-more">सर्व पहा &rarr;</Link>
            </div>
          </aside>

        </div>
      </div>

    </div>
  );
};

export default Home;
