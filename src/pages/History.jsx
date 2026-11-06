import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router-dom';
import {
  Landmark, Clock, Hammer, Sparkles, Building2, GraduationCap,
  Heart, BookOpen, TreePine, Paintbrush, Monitor, Trophy, Bus,
  Bath, School, ChevronRight, Star, Calendar, Globe, Dumbbell,
  Library, Target
} from 'lucide-react';

const timelineData = [
  { yearKey: 'school_history.timeline.1940.year', titleKey: 'school_history.timeline.1940.title', descKey: 'school_history.timeline.1940.description', icon: Landmark },
  { yearKey: 'school_history.timeline.1950_51.year', titleKey: 'school_history.timeline.1950_51.title', descKey: 'school_history.timeline.1950_51.description', icon: Hammer },
  { yearKey: 'school_history.timeline.1981_82.year', titleKey: 'school_history.timeline.1981_82.title', descKey: 'school_history.timeline.1981_82.description', icon: Building2 },
  { yearKey: 'school_history.timeline.2001.year', titleKey: 'school_history.timeline.2001.title', descKey: 'school_history.timeline.2001.description', icon: School },
];

const transformationItems = [
  { key: 'school_history.transformation.item1', icon: Sparkles },
  { key: 'school_history.transformation.item2', icon: Dumbbell },
  { key: 'school_history.transformation.item3', icon: TreePine },
  { key: 'school_history.transformation.item4', icon: Heart },
  { key: 'school_history.transformation.item5', icon: Hammer },
  { key: 'school_history.transformation.item6', icon: Paintbrush },
  { key: 'school_history.transformation.item7', icon: BookOpen },
  { key: 'school_history.transformation.item8', icon: BookOpen },
  { key: 'school_history.transformation.item9', icon: GraduationCap },
  { key: 'school_history.transformation.item10', icon: Monitor },
  { key: 'school_history.transformation.item11', icon: Star },
  { key: 'school_history.transformation.item12', icon: Trophy },
  { key: 'school_history.transformation.item13', icon: Bus },
  { key: 'school_history.transformation.item14', icon: Bath },
];

const History = () => {
  const { t } = useLanguage();

  return (
    <div style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh' }}>
      <style>{`
        /* ─── History Page Styles ─── */
        .history-page { padding: 2.5rem 0 4rem; }

        .history-page-header {
          margin-bottom: 2rem;
          padding-left: 1rem;
          border-left: 4px solid var(--accent-gold);
        }
        .history-page-title {
          margin: 0;
          color: var(--dark-navy);
          font-size: clamp(1.8rem, 3vw, 2.5rem);
        }
        .history-page-subtitle {
          margin: 0.5rem 0 0;
          color: var(--text-muted);
          font-size: 1.1rem;
        }

        /* Breadcrumb */
        .history-breadcrumb {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
          font-size: 0.875rem;
          color: var(--text-muted);
        }
        .history-breadcrumb a {
          color: var(--primary-navy);
          font-weight: 500;
        }
        .history-breadcrumb a:hover { color: var(--accent-gold); }

        /* ─── School History Banner ─── */
        .school-history-banner-container {
          width: 100%;
          max-width: 100%;
          margin-bottom: 2rem;
          border-radius: 8px;
          overflow: hidden;
          background-color: #0b1d3a;
          border: 1px solid #8ab8d0;
          box-shadow: var(--shadow-subtle);
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .school-history-banner {
          width: 100%;
          max-width: 100%;
          height: auto;
          aspect-ratio: 15 / 6;
          object-fit: contain;
          object-position: center;
          display: block;
        }

        /* ─── Intro Section ─── */
        .history-intro-card {
          background: linear-gradient(135deg, var(--dark-navy) 0%, var(--primary-navy) 100%);
          color: #fff;
          border-radius: 8px;
          padding: 2.5rem;
          margin-bottom: 2rem;
          position: relative;
          overflow: hidden;
        }
        .history-intro-card::after {
          content: '';
          position: absolute;
          top: -50px;
          right: -50px;
          width: 200px;
          height: 200px;
          background: rgba(242, 160, 0, 0.1);
          border-radius: 50%;
          pointer-events: none;
        }
        .history-intro-name {
          font-size: 1.5rem;
          font-weight: 700;
          color: #fff;
          margin-bottom: 1rem;
          line-height: 1.35;
        }
        .history-intro-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 1.25rem;
          margin-bottom: 1.25rem;
        }
        .history-intro-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.15);
          padding: 0.4rem 1rem;
          border-radius: 20px;
          font-size: 0.875rem;
          font-weight: 500;
        }
        .history-intro-desc {
          font-size: 1rem;
          line-height: 1.75;
          opacity: 0.92;
        }

        /* ─── Section Block ─── */
        .history-section {
          margin-bottom: 2rem;
        }
        .history-section-header {
          background-color: #0c1a9c;
          color: #fff;
          padding: 12px 20px;
          display: flex;
          align-items: center;
          gap: 12px;
          font-size: 1.25rem;
          font-weight: 700;
          border-bottom: 2px solid var(--accent-gold);
        }
        .history-section-body {
          background: #fff;
          border: 1px solid #8ab8d0;
          border-top: none;
          padding: 1.5rem 1.5rem 1.75rem;
        }

        /* ─── Timeline ─── */
        .history-timeline {
          position: relative;
          padding-left: 2rem;
        }
        .history-timeline::before {
          content: '';
          position: absolute;
          left: 6px;
          top: 0;
          bottom: 0;
          width: 3px;
          background: linear-gradient(to bottom, var(--accent-gold), var(--primary-navy));
          border-radius: 2px;
        }
        .timeline-item {
          position: relative;
          margin-bottom: 2rem;
          padding-left: 1.5rem;
        }
        .timeline-item:last-child { margin-bottom: 0; }
        .timeline-dot {
          position: absolute;
          left: -2rem;
          top: 0.25rem;
          width: 16px;
          height: 16px;
          background: var(--accent-gold);
          border: 3px solid #fff;
          border-radius: 50%;
          box-shadow: 0 0 0 2px var(--accent-gold);
          z-index: 1;
        }
        .timeline-year {
          display: inline-block;
          background: var(--accent-gold);
          color: var(--dark-navy);
          padding: 0.2rem 0.75rem;
          border-radius: 4px;
          font-size: 0.85rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }
        .timeline-title {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary-navy);
          margin: 0.35rem 0 0.35rem;
        }
        .timeline-desc {
          font-size: 0.925rem;
          color: var(--text-main);
          line-height: 1.65;
        }

        /* ─── Challenge Banner ─── */
        .history-challenge-banner {
          background: #fffdf5;
          border: 1px solid #e8d78e;
          border-left: 4px solid var(--accent-gold);
          padding: 1.25rem 1.5rem;
          margin-top: 1.25rem;
          border-radius: 0 4px 4px 0;
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-main);
        }

        /* ─── Transformation Grid ─── */
        .transformation-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        .transformation-card {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          background: #f7fbff;
          border: 1px solid #d6eaf8;
          border-radius: 6px;
          font-size: 0.9rem;
          color: var(--text-main);
          line-height: 1.45;
          transition: background 0.2s, border-color 0.2s;
        }
        .transformation-card:hover {
          background: #d6eaf8;
          border-color: #8ab8d0;
        }
        .transformation-card-icon {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--dark-navy);
          color: var(--accent-gold);
          border-radius: 6px;
        }

        /* ─── New Building Section ─── */
        .history-text-block {
          font-size: 0.95rem;
          line-height: 1.75;
          color: var(--text-main);
        }
        .history-text-block p { margin-bottom: 1rem; }
        .history-text-block p:last-child { margin-bottom: 0; }

        .history-highlight-box {
          background: linear-gradient(135deg, #d6eaf8 0%, #f7fbff 100%);
          border: 1px solid #8ab8d0;
          border-radius: 8px;
          padding: 1.5rem;
          margin-top: 1.25rem;
          text-align: center;
        }
        .history-highlight-text {
          font-size: 1.1rem;
          font-weight: 600;
          color: var(--primary-navy);
          line-height: 1.6;
        }

        /* ─── Upcoming Grid ─── */
        .upcoming-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
          gap: 1rem;
          margin-top: 1rem;
        }
        .upcoming-card {
          background: #f7fbff;
          border: 1px solid #8ab8d0;
          border-radius: 8px;
          padding: 1.5rem;
          text-align: center;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .upcoming-card:hover {
          transform: translateY(-3px);
          box-shadow: var(--shadow-hover);
        }
        .upcoming-card-icon {
          width: 48px;
          height: 48px;
          margin: 0 auto 0.75rem;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--accent-gold);
          color: var(--dark-navy);
          border-radius: 50%;
        }
        .upcoming-card-label {
          font-weight: 600;
          color: var(--primary-navy);
          font-size: 0.95rem;
        }
        .upcoming-note {
          margin-top: 1rem;
          padding: 0.75rem 1rem;
          background: #fffdf5;
          border: 1px dashed var(--accent-gold);
          border-radius: 4px;
          font-size: 0.85rem;
          color: var(--text-muted);
          text-align: center;
          font-style: italic;
        }

        /* ─── Future Vision ─── */
        .schedule-list {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 1rem;
        }
        .schedule-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 0.85rem 1rem;
          background: #fff;
          border: 1px solid #d6eaf8;
          border-left: 3px solid var(--accent-gold);
          border-radius: 0 6px 6px 0;
          font-size: 0.9rem;
          color: var(--text-main);
        }
        .schedule-icon {
          flex-shrink: 0;
          color: var(--primary-navy);
        }

        /* ─── Community Appeal ─── */
        .community-appeal {
          text-align: center;
          padding: 2rem 1.5rem;
        }
        .community-appeal-text {
          font-size: 1rem;
          line-height: 1.8;
          color: var(--text-main);
          max-width: 700px;
          margin: 0 auto 1.5rem;
        }
        .community-appeal-divider {
          width: 60px;
          height: 3px;
          background: var(--accent-gold);
          margin: 0 auto 1.5rem;
          border-radius: 2px;
        }
        .community-appeal-name {
          font-size: 1.25rem;
          font-weight: 700;
          color: var(--primary-navy);
          margin-bottom: 0.25rem;
        }
        .community-appeal-role {
          font-size: 0.95rem;
          color: var(--text-muted);
          margin-bottom: 0.25rem;
        }
        .community-appeal-school {
          font-size: 0.85rem;
          color: var(--text-muted);
          max-width: 400px;
          margin: 0 auto;
          line-height: 1.5;
        }

        /* ─── Responsive ─── */
        @media (max-width: 768px) {
          .school-history-banner-container {
            margin-bottom: 1.25rem;
            border-radius: 6px;
          }
          .history-intro-card { padding: 1.5rem; }
          .history-intro-meta { flex-direction: column; gap: 0.75rem; }
          .transformation-grid { grid-template-columns: 1fr; }
          .upcoming-grid { grid-template-columns: 1fr; }
          .history-section-body { padding: 1.25rem; }
          .history-timeline { padding-left: 1.5rem; }
          .timeline-item { padding-left: 1rem; }
          .timeline-dot { left: -1.5rem; }
        }
      `}</style>

      <div className="container history-page">
        {/* Breadcrumb */}
        <nav className="history-breadcrumb" aria-label="breadcrumb">
          <Link to="/">{t('common.home')}</Link>
          <ChevronRight size={14} />
          <span>{t('school_history.breadcrumb')}</span>
        </nav>

        {/* Page Header */}
        <div className="history-page-header">
          <h1 className="history-page-title">{t('school_history.title')}</h1>
          <p className="history-page-subtitle">{t('school_history.subtitle')}</p>
        </div>

        {/* ─── SECTION 1: Introduction ─── */}
        <section className="history-intro-section">
          <div className="school-history-banner-container">
            <img
              src="/school-history-banner.jpg"
              alt={t('school_history.intro.heading')}
              className="school-history-banner"
              loading="eager"
            />
          </div>

          <div className="history-intro-card">
            <h2 className="history-intro-name">{t('school_history.intro.heading')}</h2>
            <div className="history-intro-meta">
              <span className="history-intro-badge">
                <Calendar size={16} /> {t('school_history.intro.established')}
              </span>
              <span className="history-intro-badge">
                <Landmark size={16} /> {t('school_history.intro.location')}
              </span>
            </div>
            <p className="history-intro-desc">{t('school_history.intro.description')}</p>
          </div>
        </section>

        {/* ─── SECTION 2: Historical Timeline ─── */}
        <section className="history-section">
          <div className="history-section-header">
            <Clock size={22} />
            {t('school_history.timeline.title')}
          </div>
          <div className="history-section-body">
            <div className="history-timeline">
              {timelineData.map((item, idx) => (
                <div className="timeline-item" key={idx}>
                  <div className="timeline-dot" />
                  <span className="timeline-year">{t(item.yearKey)}</span>
                  <h3 className="timeline-title">{t(item.titleKey)}</h3>
                  <p className="timeline-desc">{t(item.descKey)}</p>
                </div>
              ))}
            </div>
            <div className="history-challenge-banner">
              {t('school_history.challenges.text')}
            </div>
          </div>
        </section>

        {/* ─── SECTION 3: Educational Transformation Since 2018 ─── */}
        <section className="history-section">
          <div className="history-section-header">
            <Sparkles size={22} />
            {t('school_history.transformation.title')}
          </div>
          <div className="history-section-body">
            <p className="history-text-block">{t('school_history.transformation.description')}</p>
            <h4 style={{ color: 'var(--primary-navy)', margin: '1.25rem 0 0.5rem', fontSize: '1.05rem' }}>
              {t('school_history.transformation.initiatives_title')}
            </h4>
            <div className="transformation-grid">
              {transformationItems.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div className="transformation-card" key={idx}>
                    <div className="transformation-card-icon">
                      <Icon size={16} />
                    </div>
                    <span>{t(item.key)}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ─── SECTION 4: Journey Towards the New School Building ─── */}
        <section className="history-section">
          <div className="history-section-header">
            <Building2 size={22} />
            {t('school_history.new_building.title')}
          </div>
          <div className="history-section-body">
            <div className="history-text-block">
              <p>{t('school_history.new_building.challenge')}</p>
              <p>{t('school_history.new_building.resolution')}</p>
            </div>
          </div>
        </section>

        {/* ─── SECTION 5: New Era & Upcoming Infrastructure ─── */}
        <section className="history-section">
          <div className="history-section-header">
            <Star size={22} />
            {t('school_history.new_building.new_era_title')}
          </div>
          <div className="history-section-body">
            <div className="history-text-block">
              <p>{t('school_history.new_building.new_era_description')}</p>
            </div>
            <div className="history-highlight-box">
              <p className="history-highlight-text">{t('school_history.new_building.milestone')}</p>
              <p style={{ marginTop: '0.75rem', color: 'var(--text-main)', fontSize: '0.95rem' }}>
                {t('school_history.new_building.joy')}
              </p>
            </div>

            {/* Upcoming Infrastructure */}
            <h4 style={{ color: 'var(--primary-navy)', margin: '1.5rem 0 0.5rem', fontSize: '1.05rem' }}>
              {t('school_history.upcoming.title')}
            </h4>
            <div className="upcoming-grid">
              <div className="upcoming-card">
                <div className="upcoming-card-icon"><School size={24} /></div>
                <div className="upcoming-card-label">{t('school_history.upcoming.classrooms')}</div>
              </div>
              <div className="upcoming-card">
                <div className="upcoming-card-icon"><Library size={24} /></div>
                <div className="upcoming-card-label">{t('school_history.upcoming.library')}</div>
              </div>
              <div className="upcoming-card">
                <div className="upcoming-card-icon"><Monitor size={24} /></div>
                <div className="upcoming-card-label">{t('school_history.upcoming.facilities')}</div>
              </div>
            </div>
            <div className="upcoming-note">
              {t('school_history.upcoming.note')}
            </div>
          </div>
        </section>

        {/* ─── SECTION 6: Future Vision ─── */}
        <section className="history-section">
          <div className="history-section-header">
            <Target size={22} />
            {t('school_history.future_vision.title')}
          </div>
          <div className="history-section-body">
            <p className="history-text-block">{t('school_history.future_vision.description')}</p>

            <h4 style={{ color: 'var(--primary-navy)', margin: '1.25rem 0 0.5rem', fontSize: '1.05rem' }}>
              {t('school_history.future_vision.schedule_title')}
            </h4>
            <div className="schedule-list">
              <div className="schedule-item">
                <Calendar size={18} className="schedule-icon" />
                {t('school_history.future_vision.schedule1')}
              </div>
              <div className="schedule-item">
                <Dumbbell size={18} className="schedule-icon" />
                {t('school_history.future_vision.schedule2')}
              </div>
              <div className="schedule-item">
                <BookOpen size={18} className="schedule-icon" />
                {t('school_history.future_vision.schedule3')}
              </div>
              <div className="schedule-item">
                <Globe size={18} className="schedule-icon" />
                {t('school_history.future_vision.languages')}
              </div>
              <div className="schedule-item">
                <Monitor size={18} className="schedule-icon" />
                {t('school_history.future_vision.modern_facilities')}
              </div>
              <div className="schedule-item">
                <GraduationCap size={18} className="schedule-icon" />
                {t('school_history.future_vision.holistic')}
              </div>
            </div>

            <div className="history-challenge-banner" style={{ marginTop: '1.5rem' }}>
              {t('school_history.future_vision.campus_note')}
            </div>
          </div>
        </section>

        {/* ─── SECTION 7: Community Appeal ─── */}
        <section className="history-section">
          <div className="history-section-header">
            <Heart size={22} />
            {t('school_history.community_appeal.title')}
          </div>
          <div className="history-section-body">
            <div className="community-appeal">
              <p className="community-appeal-text">
                {t('school_history.community_appeal.description')}
              </p>
              <div className="community-appeal-divider" />
              <div className="community-appeal-name">{t('school_history.headmaster.name')}</div>
              <div className="community-appeal-role">{t('school_history.headmaster.designation')}</div>
              <div className="community-appeal-school">{t('school_history.headmaster.school')}</div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
};

export default History;

