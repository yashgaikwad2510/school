import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Link } from 'react-router-dom';
import { Megaphone, ArrowRight, GraduationCap, Calendar, Book, Users, Image as ImageIcon, Phone, BookOpen, HeartPulse, ShieldCheck, Palette, X } from 'lucide-react';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const [activeFacility, setActiveFacility] = useState(null);

  const facilitiesData = [
    {
      id: 'knowledge',
      title: 'ज्ञानाची समृद्धी',
      shortText: 'ग्रंथालय, डिजिटल शिक्षण आणि शैक्षणिक साहित्य',
      icon: <BookOpen size={24} color="var(--accent-gold)" />,
      img: '/fac_knowledge.jpeg',
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
      icon: <HeartPulse size={24} color="var(--accent-gold)" />,
      img: '/fac_sports.jpeg',
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
      icon: <ShieldCheck size={24} color="var(--accent-gold)" />,
      img: '/fac_environment.jpeg',
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
      icon: <Palette size={24} color="var(--accent-gold)" />,
      img: '/fac_activities.jpeg',
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
      {/* Hero Section */}
      <section 
        className="hero" 
        style={{
          position: 'relative',
          background: 'url("/bghero.png") no-repeat right center/cover',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          padding: '4rem 0'
        }}
      >

        
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: '650px' }}>
            <div className="eyebrow" style={{ color: 'var(--accent-gold)' }}>शिक्षण | संस्कार | उज्ज्वल भविष्य</div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>
              श्री छत्रपती शिवाजी महाराज महानगरपालिका प्राथमिक शाळा, <span style={{ color: 'var(--accent-gold)' }}>भुतकरवाडी</span>
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, lineHeight: 1.6 }}>
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

      {/* Notice Bar */}
      <div style={{ backgroundColor: 'var(--cream-bg)', borderBottom: '1px solid var(--border-color)', padding: '1rem 0' }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flex: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--accent-gold)', fontWeight: 700 }}>
              <Megaphone size={20} />
              महत्त्वाच्या सूचना
            </div>
            <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--border-color)' }}></div>
            <div style={{ color: 'var(--text-main)', fontSize: '0.9375rem', fontWeight: 500 }}>
              शाळा प्रवेश प्रक्रिया 2026-27 सुरू आहे. &nbsp;|&nbsp; शैक्षणिक दिनदर्शिका जाहीर झाली आहे.
            </div>
          </div>
          <Link to="/" style={{ color: 'var(--primary-navy)', fontSize: '0.875rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
            सर्व सूचना पहा <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      {/* Quick Access Cards */}
      <section style={{ padding: '3rem 0 1rem', backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
            gap: '1.5rem' 
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
                padding: '1.5rem', 
                display: 'flex', 
                alignItems: 'center', 
                gap: '1rem',
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
        </div>
      </section>

      {/* Educational Leadership Section */}
      <style>
        {`
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(20px); }
            to { opacity: 1; transform: translateY(0); }
          }
          
          .leadership-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            position: relative;
            z-index: 2;
          }
          
          @media (max-width: 1100px) {
            .leadership-grid {
              grid-template-columns: repeat(2, 1fr);
            }
          }
          
          @media (max-width: 768px) {
            .leadership-grid {
              grid-template-columns: 1fr;
            }
          }

          .leadership-card {
            background-color: white;
            border-radius: 20px;
            border: 1px solid #e5e7eb;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.03);
            display: flex;
            align-items: center;
            padding: 24px;
            gap: 24px;
            transition: transform 0.3s ease, box-shadow 0.3s ease;
          }
          
          .leadership-card:hover {
            transform: translateY(-6px);
            box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
          }
          
          .leadership-photo {
            flex: 0 0 180px;
            height: 240px;
            border-radius: 12px;
            overflow: hidden;
            background-color: #f3f4f6;
          }

          .leadership-info {
            flex: 1;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }
          
          @media (max-width: 480px) {
            .leadership-card {
              flex-direction: column;
              text-align: center;
              padding: 24px 20px;
              gap: 20px;
            }
            .leadership-photo {
              flex: 0 0 auto;
              width: 180px;
              height: 240px;
            }
            .leadership-info {
              text-align: center;
            }
          }

          .section-divider-line {
            display: flex;
            align-items: center;
            justify-content: center;
            gap: 1rem;
            margin-bottom: 0.75rem;
          }
          .section-divider-line::before, .section-divider-line::after {
            content: '';
            height: 2px;
            width: 40px;
            background-color: var(--accent-gold);
            opacity: 0.5;
          }
        `}
      </style>
      <section style={{ 
        padding: '4rem 0 5rem', 
        backgroundColor: '#fafafa'
      }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div style={{ color: 'var(--accent-gold)', marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>
              <Users size={36} />
            </div>
            <div className="section-divider-line">
              <h2 className="section-title" style={{ margin: 0, color: 'var(--dark-navy)' }}>शैक्षणिक नेतृत्व</h2>
            </div>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)' }}>
              शाळेच्या गुणवत्तापूर्ण शिक्षणासाठी मार्गदर्शन करणारे मान्यवर
            </p>
          </div>
          
          <div className="leadership-grid">
            {[
              {
                tag: "अहिल्यानगर मनपा",
                name: "श्री यशवंत भीमराव डांगे",
                role: "अहिल्यानगर मनपा आयुक्त",
                image: "/aukta.jpeg"
              },
              {
                tag: "शिक्षण विभाग",
                name: "श्री. जुबेर नुरमोहम्मद पठाण",
                role: "प्रशासन अधिकारी,\nअहमदनगर मनपा शिक्षण विभाग",
                image: "/zuber.jpeg"
              },
              {
                tag: "मुख्याध्यापक",
                name: "श्री अरुण मारुती पवार",
                role: "मुख्याध्यापक",
                image: "/teacher2.jpeg"
              }
            ].map((leader, idx) => (
              <div key={idx} className="leadership-card" style={{ animation: `fadeInUp 0.6s ease-out ${idx * 0.1}s both` }}>
                <div className="leadership-photo">
                  <img 
                    src={leader.image} 
                    alt={leader.name} 
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    onError={(e) => { e.target.style.display = 'none' }}
                  />
                </div>
                <div className="leadership-info">
                  <div style={{ 
                    color: 'var(--accent-gold)',
                    fontSize: '0.85rem',
                    fontWeight: 700,
                    marginBottom: '0.5rem',
                    letterSpacing: '0.5px'
                  }}>
                    {leader.tag}
                  </div>
                  <h3 style={{ 
                    fontSize: '1.25rem', 
                    color: 'var(--dark-navy)', 
                    marginBottom: '0.5rem', 
                    fontWeight: 800, 
                    lineHeight: 1.3 
                  }}>
                    {leader.name}
                  </h3>
                  <div style={{ 
                    fontSize: '0.95rem', 
                    color: 'var(--text-main)', 
                    whiteSpace: 'pre-line', 
                    lineHeight: 1.5,
                    fontWeight: 500
                  }}>
                    {leader.role}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities / About Section */}
      <style>{`
        .fac-section {
          padding: 6rem 0;
          background-color: #fbfbfc;
        }
        .fac-container {
          max-width: 1240px;
          margin: 0 auto;
          padding: 0 1.5rem;
        }
        
        /* Top Layout: Image + Intro */
        .fac-header-grid {
          display: grid;
          grid-template-columns: 55% 45%;
          gap: 4rem;
          align-items: center;
          margin-bottom: 4rem;
        }
        .fac-main-img {
          width: 100%;
          aspect-ratio: 16/9;
          object-fit: cover;
          border-radius: 22px;
          box-shadow: 0 15px 35px rgba(0,0,0,0.06);
          transition: transform 0.5s ease;
        }
        .fac-main-img:hover {
          transform: scale(1.02);
        }
        .fac-intro-panel {
          display: flex;
          flex-direction: column;
        }
        .fac-eyebrow {
          color: var(--accent-gold);
          font-weight: 700;
          font-size: 1rem;
          margin-bottom: 0.5rem;
          letter-spacing: 0.5px;
        }
        .fac-main-title {
          font-size: 2.5rem;
          font-weight: 800;
          color: var(--navy-dark);
          line-height: 1.2;
          margin-bottom: 1.5rem;
        }
        .fac-desc {
          font-size: 1.15rem;
          color: var(--text-main);
          line-height: 1.6;
          margin-bottom: 2rem;
        }
        .fac-quote-box {
          background: white;
          padding: 1.5rem;
          border-radius: 12px;
          border-left: 4px solid var(--accent-gold);
          box-shadow: 0 4px 15px rgba(0,0,0,0.03);
          margin-bottom: 2rem;
        }
        .fac-quote-text {
          font-size: 1.1rem;
          font-style: italic;
          color: var(--navy-dark);
          font-weight: 600;
          line-height: 1.5;
        }
        .fac-highlight-strip {
          display: inline-block;
          font-weight: 700;
          color: var(--accent-gold);
          font-size: 1.05rem;
          letter-spacing: 1px;
          padding-bottom: 0.5rem;
          border-bottom: 2px solid var(--accent-gold);
        }

        /* 4 Cards Grid */
        .fac-cards-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 2.5rem;
        }
        .fac-card {
          background: white;
          border-radius: 20px;
          padding: 2rem;
          box-shadow: 0 4px 20px rgba(0,0,0,0.04);
          border: 1px solid rgba(0,0,0,0.02);
          transition: all 0.3s ease;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 1.5rem;
        }
        .fac-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.08);
        }
        .fac-card-content {
          flex: 1;
        }
        .fac-card-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          background: rgba(212, 175, 55, 0.1);
          border-radius: 12px;
          margin-bottom: 1rem;
          color: var(--accent-gold);
          transition: transform 0.3s ease;
        }
        .fac-card:hover .fac-card-icon {
          transform: scale(1.1);
        }
        .fac-card-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: var(--navy-dark);
          margin-bottom: 0.5rem;
        }
        .fac-card-desc {
          font-size: 1rem;
          color: var(--text-muted);
          line-height: 1.5;
          margin-bottom: 1.25rem;
        }
        .fac-card-btn {
          color: var(--accent-gold);
          font-weight: 700;
          font-size: 0.95rem;
          display: flex;
          align-items: center;
          gap: 0.25rem;
          transition: gap 0.2s ease;
        }
        .fac-card:hover .fac-card-btn {
          gap: 0.5rem;
        }
        .fac-card-thumb {
          width: 100px;
          height: 100px;
          border-radius: 14px;
          object-fit: cover;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
        }

        /* Bottom Mission Strip */
        .fac-mission {
          margin-top: 4.5rem;
          background: linear-gradient(135deg, var(--navy-dark) 0%, #1a3673 100%);
          padding: 2rem 3rem;
          border-radius: 16px;
          text-align: center;
          box-shadow: 0 10px 30px rgba(10, 37, 88, 0.15);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
        }
        .fac-mission-title {
          color: var(--accent-gold);
          font-size: 1.15rem;
          font-weight: 800;
          letter-spacing: 1px;
        }
        .fac-mission-text {
          color: white;
          font-size: 1.25rem;
          font-weight: 600;
          line-height: 1.5;
          max-width: 800px;
        }

        /* Modal Styles */
        .fac-modal-overlay {
          position: fixed;
          inset: 0;
          background: rgba(10, 37, 88, 0.7);
          backdrop-filter: blur(5px);
          z-index: 1000;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 1.5rem;
        }
        .fac-modal {
          background: white;
          border-radius: 24px;
          width: 100%;
          max-width: 600px;
          overflow: hidden;
          box-shadow: 0 25px 50px rgba(0,0,0,0.3);
          position: relative;
          animation: modalFadeIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }
        @keyframes modalFadeIn {
          from { opacity: 0; transform: translateY(30px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .fac-modal-close {
          position: absolute;
          top: 1rem;
          right: 1rem;
          background: white;
          border: none;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          color: var(--navy-dark);
          box-shadow: 0 4px 15px rgba(0,0,0,0.1);
          z-index: 10;
          transition: transform 0.2s ease;
        }
        .fac-modal-close:hover {
          transform: scale(1.1);
        }
        .fac-modal-img {
          height: 260px;
          width: 100%;
          object-fit: cover;
        }
        .fac-modal-content {
          padding: 2.5rem;
        }
        .fac-modal-header {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 1.5rem;
        }
        .fac-modal-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: var(--navy-dark);
        }
        .fac-modal-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .fac-modal-list li {
          position: relative;
          padding-left: 1.75rem;
          margin-bottom: 1rem;
          color: var(--text-main);
          font-size: 1.1rem;
          line-height: 1.5;
        }
        .fac-modal-list li::before {
          content: "•";
          position: absolute;
          left: 0;
          color: var(--accent-gold);
          font-size: 1.75rem;
          line-height: 1;
          top: -3px;
        }

        /* Responsive Breakpoints */
        @media (max-width: 1100px) {
          .fac-header-grid {
            grid-template-columns: 1fr;
            gap: 2.5rem;
          }
          .fac-main-img {
            max-height: 400px;
          }
        }
        @media (max-width: 768px) {
          .fac-cards-grid {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .fac-main-title {
            font-size: 2rem;
          }
          .fac-mission {
            padding: 1.5rem;
          }
          .fac-mission-text {
            font-size: 1.1rem;
          }
        }
        @media (max-width: 480px) {
          .fac-section { padding: 4rem 0; }
          .fac-card {
            flex-direction: column;
            align-items: flex-start;
            gap: 1rem;
            padding: 1.5rem;
          }
          .fac-card-thumb {
            width: 100%;
            height: 140px;
          }
        }
      `}</style>
      
      <section className="fac-section">
        <div className="fac-container">
          
          {/* Top Feature Grid */}
          <div className="fac-header-grid">
            <div>
              <img src="/bghero.png" alt="School Environment" className="fac-main-img" loading="lazy" />
            </div>
            <div className="fac-intro-panel">
              <div className="fac-eyebrow">आमच्या शाळेबद्दल</div>
              <h2 className="fac-main-title">आमच्या शाळेतील सुविधा</h2>
              <p className="fac-desc">
                गुणवत्तापूर्ण शिक्षण, संस्कार आणि सर्वांगीण विकासासाठी विद्यार्थ्यांना आवश्यक सुविधा उपलब्ध करून दिल्या जातात.
              </p>
              
              <div className="fac-quote-box">
                <p className="fac-quote-text">
                  "शाळा म्हणजे केवळ वर्गखोली नाही, तर विद्यार्थ्यांच्या सर्वांगीण विकासाचे केंद्र आहे."
                </p>
              </div>
              
              <div>
                <span className="fac-highlight-strip">
                  शिक्षण • आरोग्य • सुरक्षितता • संस्कार
                </span>
              </div>
            </div>
          </div>

          {/* 4 Cards Grid */}
          <div className="fac-cards-grid">
            {facilitiesData.map((fac, idx) => (
              <div 
                key={fac.id} 
                className="fac-card" 
                onClick={() => setActiveFacility(fac)}
                style={{ animation: `fadeInUp 0.5s ease-out ${idx * 0.1}s both` }}
              >
                <div className="fac-card-content">
                  <div className="fac-card-icon">
                    {fac.icon}
                  </div>
                  <h3 className="fac-card-title">{fac.title}</h3>
                  <p className="fac-card-desc">{fac.shortText}</p>
                  <div className="fac-card-btn">
                    अधिक जाणून घ्या <ArrowRight size={16} />
                  </div>
                </div>
                <img src={fac.img} alt={fac.title} className="fac-card-thumb" loading="lazy" />
              </div>
            ))}
          </div>

          {/* Bottom Mission Strip */}
          <div className="fac-mission">
            <div className="fac-mission-title">🌟 आमचे ध्येय</div>
            <div className="fac-mission-text">
              "प्रत्येक विद्यार्थी शिकावा, घडावा, प्रगती करावा आणि आत्मविश्वासाने भविष्याकडे वाटचाल करावी!"
            </div>
          </div>
          
        </div>
      </section>

      {/* Facilities Modal */}
      {activeFacility && (
        <div className="fac-modal-overlay" onClick={() => setActiveFacility(null)}>
          <div className="fac-modal" onClick={e => e.stopPropagation()}>
            <button className="fac-modal-close" onClick={() => setActiveFacility(null)}>
              <X size={24} />
            </button>
            <img src={activeFacility.img} alt={activeFacility.title} className="fac-modal-img" />
            <div className="fac-modal-content">
              <div className="fac-modal-header">
                {activeFacility.icon}
                <h3 className="fac-modal-title">{activeFacility.title}</h3>
              </div>
              <ul className="fac-modal-list">
                {activeFacility.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}




    </div>
  );
};

export default Home;
