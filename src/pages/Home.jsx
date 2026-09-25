import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { translations } from '../data/translations';
import { Link } from 'react-router-dom';
import { Megaphone, ArrowRight, GraduationCap, Calendar, Book, Users, Image as ImageIcon, Phone } from 'lucide-react';

const Home = () => {
  const { language } = useLanguage();
  const t = translations[language];

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
        <div 
          style={{
            position: 'absolute',
            top: 0, left: 0, right: 0, bottom: 0,
            background: 'linear-gradient(90deg, var(--dark-navy) 0%, rgba(13, 43, 91, 0.9) 40%, rgba(13, 43, 91, 0.4) 100%)',
            zIndex: 1
          }}
        ></div>
        
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

      {/* About School Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-white)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <img 
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&q=80&w=800" 
              alt="School Building" 
              style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-hover)' }}
            />
          </div>
          <div>
            <div className="eyebrow">आमची शाळा</div>
            <h2 className="section-title" style={{ marginBottom: '1.5rem', textAlign: 'left' }}>शाळेबद्दल</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              आमची शाळा भुतकरवाडीतील प्राथमिक शिक्षणाचा एक महत्त्वाचा आधारस्तंभ आहे. आम्ही विद्यार्थ्यांच्या शैक्षणिक, मानसिक, सामाजिक आणि नैतिक विकासासाठी सतत प्रयत्नशील आहोत.
            </p>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              अनुभवी शिक्षकवृंद, आधुनिक शिक्षण पद्धती आणि सुरक्षित वातावरण यामुळे आमची शाळा विद्यार्थ्यांसाठी ज्ञान, संस्कार आणि प्रगतीचे केंद्र आहे.
            </p>
            <Link to="/about-school" className="btn btn-navy">
              अधिक जाणून घ्या <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section style={{ padding: '0 0 5rem', backgroundColor: 'var(--bg-white)' }}>
        <div className="container">
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '1.5rem' 
          }}>
            {[
              { number: '350+', label: 'विद्यार्थी', color: '#EBF3FF', iconColor: '#173F82' },
              { number: '18', label: 'शिक्षक', color: '#FFF4E5', iconColor: '#F2A000' },
              { number: '12', label: 'वर्ग', color: '#EAF7ED', iconColor: '#2E7D32' },
              { number: '25+', label: 'वर्षांचा अनुभव', color: '#FCECEC', iconColor: '#C62828' }
            ].map((stat, idx) => (
              <div key={idx} style={{ 
                backgroundColor: stat.color, 
                padding: '2rem', 
                borderRadius: '12px', 
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.5rem'
              }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 800, color: stat.iconColor, lineHeight: 1 }}>{stat.number}</div>
                <div style={{ fontSize: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
