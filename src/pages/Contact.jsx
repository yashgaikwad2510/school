import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import {
  Bell,
  Building2,
  Calendar,
  ChevronRight,
  Clock3,
  FileText,
  GraduationCap,
  HelpCircle,
  Home as HomeIcon,
  Image as ImageIcon,
  Info,
  Link as LinkIcon,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  School,
  Send,
  Users
} from 'lucide-react';

const mapsSearchUrl = 'https://www.google.com/maps/search/?api=1&query=Shri+Chhatrapati+Shivaji+Maharaj+Mahanagarpalika+Primary+School+Bhutkarwadi+Ahilyanagar';
const mapsEmbedUrl = 'https://www.google.com/maps?q=Shri+Chhatrapati+Shivaji+Maharaj+Mahanagarpalika+Primary+School+Bhutkarwadi+Ahilyanagar&output=embed';

const initialForm = {
  name: '',
  email: '',
  subject: '',
  message: ''
};

const Contact = () => {
  const { t } = useLanguage();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState('');

  const updateField = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: '' }));
    setStatus('');
  };

  const validateForm = () => {
    const nextErrors = {};
    if (!form.name.trim()) nextErrors.name = t('contact.requiredName');
    if (!form.email.trim()) {
      nextErrors.email = t('contact.requiredEmail');
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      nextErrors.email = t('contact.invalidEmail');
    }
    if (!form.message.trim()) nextErrors.message = t('contact.requiredMessage');
    return nextErrors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validateForm();
    setErrors(nextErrors);
    setStatus('');
    if (Object.keys(nextErrors).length > 0) return;

    setSubmitting(true);
    window.setTimeout(() => {
      setSubmitting(false);
      setStatus(t('contact.serviceUnavailable'));
    }, 450);
  };

  return (
    <div className="contact-page-shell">
      <style>{`
        .contact-page-shell {
          background: #f0f4f8;
          padding: 20px 0 40px;
        }
        .contact-page-shell .gov-sidebar {
          background: #fff;
          border: 1px solid #8ab8d0;
          border-radius: 2px;
        }
        .contact-page-shell .gov-sidebar-header {
          background: #0c1a9c;
          color: #fff;
          padding: 12px 15px;
          font-size: 1.1rem;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 10px;
          border-bottom: 2px solid #ffb833;
        }
        .contact-page-shell .gov-sidebar-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .contact-page-shell .gov-sidebar-item {
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
        .contact-page-shell .gov-sidebar-item:last-child { border-bottom: 0; }
        .contact-page-shell .gov-sidebar-item:hover { background: #f7fbff; }
        .contact-page-shell .gov-sidebar-item-left {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #081272;
        }
        .contact-page-shell .gov-sidebar-item.active {
          background: #ffefbc;
          font-weight: 700;
        }
        .contact-page-shell .gov-notice-board {
          overflow: hidden;
        }
        .contact-page-shell .gov-notice-list { padding: 0 12px; }
        .contact-page-shell .gov-notice-item {
          padding: 11px 0;
          border-bottom: 1px solid #e1e8ed;
          color: #303b4b;
          font-size: 0.82rem;
          line-height: 1.5;
        }
        .contact-page-shell .gov-notice-date {
          display: block;
          color: #d9381e;
          font-weight: 700;
        }
        .contact-page-shell .gov-notice-more {
          display: block;
          padding: 10px 14px;
          color: #1235b5;
          text-align: right;
          font-weight: 700;
          font-size: 0.82rem;
        }
        .contact-main {
          display: flex;
          flex-direction: column;
          gap: 16px;
          min-width: 0;
        }
        .contact-breadcrumb {
          display: flex;
          align-items: center;
          gap: 7px;
          color: #526176;
          font-size: 0.86rem;
          padding: 0 2px;
        }
        .contact-breadcrumb a { color: #1235b5; font-weight: 600; }
        .contact-banner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          padding: 13px 18px;
          background: #0c1a9c;
          color: #fff;
          border-radius: 3px;
          border-bottom: 3px solid #ffb000;
        }
        .contact-banner-title {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .contact-banner h1 {
          color: #fff;
          font-size: clamp(1.35rem, 2.5vw, 1.8rem);
          line-height: 1.2;
          margin: 0;
        }
        .contact-banner p {
          margin: 0;
          color: #e7efff;
          font-size: 0.9rem;
        }
        .contact-intro {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 14px 16px;
          background: #e6f5fc;
          border: 1px solid #b5dff2;
          border-radius: 4px;
          color: #26384d;
          font-size: 0.95rem;
        }
        .contact-intro svg,
        .contact-card-icon { color: #1235b5; flex: 0 0 auto; }
        .contact-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .contact-card {
          display: flex;
          align-items: flex-start;
          gap: 13px;
          min-height: 112px;
          padding: 17px;
          background: #fff;
          border: 1px solid #b9dff1;
          border-radius: 10px;
          box-shadow: 0 2px 7px rgba(16, 42, 114, 0.07);
        }
        .contact-card h2 {
          margin: 0 0 8px;
          color: #102a72;
          font-size: 1.05rem;
        }
        .contact-card h2::after {
          content: '';
          display: block;
          width: 25px;
          height: 3px;
          margin-top: 6px;
          background: #ffb000;
        }
        .contact-card p {
          margin: 0;
          color: #34445a;
          font-size: 0.88rem;
          line-height: 1.55;
        }
        .contact-card a {
          color: #1235b5;
          font-weight: 700;
          overflow-wrap: anywhere;
        }
        .contact-actions {
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 10px;
        }
        .contact-action {
          display: grid;
          grid-template-columns: auto 1fr auto;
          align-items: center;
          gap: 10px;
          min-width: 0;
          padding: 10px 13px;
          background: #e8f5fc;
          border: 1px solid #b9dff1;
          border-radius: 5px;
          color: #102a72;
        }
        .contact-action svg { color: #1235b5; }
        .contact-action strong,
        .contact-action span {
          display: block;
          line-height: 1.35;
        }
        .contact-action strong { font-size: 0.9rem; }
        .contact-action span { color: #4b6078; font-size: 0.72rem; overflow-wrap: anywhere; }
        .contact-action > svg:last-child { color: #1235b5; }
        .contact-lower-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 12px;
        }
        .contact-panel {
          min-width: 0;
          background: #fff;
          border: 1px solid #b9dff1;
          border-radius: 5px;
          overflow: hidden;
        }
        .contact-panel-heading {
          display: flex;
          align-items: center;
          gap: 9px;
          padding: 9px 13px;
          background: #fff1bd;
          color: #102a72;
          font-size: 1.03rem;
          font-weight: 700;
        }
        .contact-panel-body { padding: 13px; }
        .contact-panel h2 {
          margin: 0 0 2px;
          color: #102a72;
          font-size: 1.1rem;
        }
        .contact-panel-subtitle {
          color: #617189;
          font-size: 0.85rem;
          margin-bottom: 10px;
        }
        .contact-map {
          width: 100%;
          height: 238px;
          display: block;
          border: 1px solid #d7e5ed;
          border-radius: 3px;
        }
        .map-link {
          display: block;
          margin-top: 8px;
          padding: 8px;
          background: #0c1a9c;
          color: #fff;
          border-radius: 3px;
          text-align: center;
          font-size: 0.82rem;
          font-weight: 700;
        }
        .contact-form {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .contact-form label {
          display: flex;
          flex-direction: column;
          gap: 4px;
          color: #27394f;
          font-size: 0.83rem;
          font-weight: 700;
        }
        .contact-form input,
        .contact-form textarea {
          width: 100%;
          padding: 9px 10px;
          border: 1px solid #c7d9e4;
          border-radius: 4px;
          background: #fff;
          color: #172033;
          font: inherit;
          font-size: 0.83rem;
        }
        .contact-form textarea { min-height: 82px; resize: vertical; }
        .contact-form input:focus,
        .contact-form textarea:focus {
          outline: 2px solid rgba(18, 53, 181, 0.18);
          border-color: #1235b5;
        }
        .contact-field-error {
          color: #b42318;
          font-size: 0.75rem;
          font-weight: 500;
        }
        .contact-submit {
          align-self: flex-start;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          padding: 9px 15px;
          border: 0;
          border-radius: 4px;
          background: #0c1a9c;
          color: #fff;
          font: inherit;
          font-size: 0.83rem;
          font-weight: 700;
          cursor: pointer;
        }
        .contact-submit:disabled { opacity: 0.65; cursor: wait; }
        .contact-status {
          margin: 0;
          padding: 8px 10px;
          background: #fff7e0;
          border: 1px solid #f0cf75;
          color: #6b4c00;
          border-radius: 4px;
          font-size: 0.78rem;
        }
        .contact-info-strip {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 15px;
          background: #e6f5fc;
          border: 1px solid #b5dff2;
          border-radius: 4px;
          color: #30445c;
          font-size: 0.85rem;
        }
        .contact-info-strip strong {
          display: block;
          color: #102a72;
          margin-bottom: 2px;
        }
        @media (max-width: 900px) {
          .contact-actions { grid-template-columns: 1fr; }
        }
        @media (max-width: 680px) {
          .contact-grid,
          .contact-lower-grid { grid-template-columns: 1fr; }
          .contact-page-shell { padding-top: 10px; }
          .contact-banner { align-items: flex-start; flex-direction: column; }
          .contact-banner p { padding-left: 44px; }
          .contact-map { height: 220px; }
        }
      `}</style>

      <div className="page-layout">
        <aside className="left-sidebar">
          <div className="gov-sidebar">
            <div className="gov-sidebar-header"><HomeIcon size={20} />{t('sidebar.quickAccess')}</div>
            <ul className="gov-sidebar-list">
              {[
                { icon: HomeIcon, text: t('common.home'), to: '/' },
                { icon: Users, text: t('sidebar.academicLeadership'), to: '/teachers' },
                { icon: Users, text: t('nav.teachers'), to: '/teachers' },
                { icon: GraduationCap, text: t('nav.students'), to: '/students' },
                { icon: Calendar, text: t('nav.activities'), to: '/activities' },
                { icon: ImageIcon, text: t('nav.gallery'), to: '/gallery' },
                { icon: Phone, text: t('nav.contact'), to: '/contact', active: true },
                { icon: LinkIcon, text: t('sidebar.importantLinks'), to: '/contact' },
                { icon: Building2, text: t('sidebar.governmentSchemes'), to: '/about-school' },
                { icon: FileText, text: t('sidebar.admission'), to: '/contact' },
                { icon: Bell, text: t('sidebar.noticeBoard'), to: '/#notices' },
                { icon: HelpCircle, text: t('sidebar.faq'), to: '/contact' }
              ].map((item) => (
                <Link key={item.text} to={item.to} className={`gov-sidebar-item${item.active ? ' active' : ''}`}>
                  <div className="gov-sidebar-item-left"><item.icon size={16} color="#081272" /><span>{item.text}</span></div>
                  <ChevronRight size={14} color="#8ab8d0" />
                </Link>
              ))}
            </ul>
          </div>
        </aside>

        <main className="contact-main">
          <div className="contact-breadcrumb">
            <Link to="/"><HomeIcon size={14} /> {t('common.home')}</Link>
            <ChevronRight size={14} />
            <span>{t('contact.title')}</span>
          </div>

          <section className="contact-banner">
            <div className="contact-banner-title">
              <Phone size={32} strokeWidth={1.8} />
              <div><h1>{t('contact.title')}</h1><p>{t('contact.subtitle')}</p></div>
            </div>
          </section>

          <div className="contact-intro">
            <School size={28} />
            <p>{t('contact.intro')}</p>
          </div>

          <section className="contact-grid" aria-label={t('common.contactInfo')}>
            <article className="contact-card">
              <Building2 className="contact-card-icon" size={29} strokeWidth={1.8} />
              <div><h2>{t('contact.addressTitle')}</h2><p>{t('school.address')}</p></div>
            </article>
            <article className="contact-card">
              <Phone className="contact-card-icon" size={29} strokeWidth={1.8} />
              <div><h2>{t('contact.phoneTitle')}</h2><p><a href={`tel:${t('school.phone')}`}>{t('school.phone')}</a></p></div>
            </article>
            <article className="contact-card">
              <Mail className="contact-card-icon" size={29} strokeWidth={1.8} />
              <div><h2>{t('contact.emailTitle')}</h2><p><a href={`mailto:${t('school.email')}`}>{t('school.email')}</a></p></div>
            </article>
            <article className="contact-card">
              <Clock3 className="contact-card-icon" size={29} strokeWidth={1.8} />
              <div><h2>{t('contact.hoursTitle')}</h2><p>{t('contact.hoursDays')}<br />{t('contact.hoursTime')}</p></div>
            </article>
          </section>

          <section className="contact-actions" aria-label={t('common.quickContactActions')}>
            <a className="contact-action" href={`tel:${t('school.phone')}`}><Phone size={25} /><div><strong>{t('contact.call')}</strong><span>{t('school.phone')}</span></div><ChevronRight size={17} /></a>
            <a className="contact-action" href={`mailto:${t('school.email')}`}><Mail size={25} /><div><strong>{t('contact.emailAction')}</strong><span>{t('school.email')}</span></div><ChevronRight size={17} /></a>
            <a className="contact-action" href={mapsSearchUrl} target="_blank" rel="noreferrer"><MapPin size={25} /><div><strong>{t('contact.directions')}</strong><span>{t('contact.viewMap')}</span></div><ChevronRight size={17} /></a>
          </section>

          <section className="contact-lower-grid">
            <article className="contact-panel">
              <div className="contact-panel-heading"><MapPin size={19} /> {t('contact.location')}</div>
              <div className="contact-panel-body">
                <h2>{t('contact.location')}</h2>
                <p className="contact-panel-subtitle">{t('contact.locationSubtitle')}</p>
                <iframe className="contact-map" title={t('common.schoolMap')} src={mapsEmbedUrl} loading="lazy" />
                <a className="map-link" href={mapsSearchUrl} target="_blank" rel="noreferrer">{t('contact.googleMaps')}</a>
              </div>
            </article>

            <article className="contact-panel">
              <div className="contact-panel-heading"><MessageSquare size={19} /> {t('contact.messageTitle')}</div>
              <div className="contact-panel-body">
                <p className="contact-panel-subtitle">{t('contact.messageIntro')}</p>
                <form className="contact-form" onSubmit={handleSubmit} noValidate>
                  <label htmlFor="contact-name">{t('contact.name')}<input id="contact-name" name="name" value={form.name} onChange={updateField} placeholder={t('contact.namePlaceholder')} aria-invalid={Boolean(errors.name)} />{errors.name && <span className="contact-field-error">{errors.name}</span>}</label>
                  <label htmlFor="contact-email">{t('contact.email')}<input id="contact-email" name="email" type="email" value={form.email} onChange={updateField} placeholder={t('contact.emailPlaceholder')} aria-invalid={Boolean(errors.email)} />{errors.email && <span className="contact-field-error">{errors.email}</span>}</label>
                  <label htmlFor="contact-subject">{t('contact.subject')}<input id="contact-subject" name="subject" value={form.subject} onChange={updateField} placeholder={t('contact.subjectPlaceholder')} /></label>
                  <label htmlFor="contact-message">{t('contact.message')}<textarea id="contact-message" name="message" value={form.message} onChange={updateField} placeholder={t('contact.messagePlaceholder')} aria-invalid={Boolean(errors.message)} />{errors.message && <span className="contact-field-error">{errors.message}</span>}</label>
                  <button className="contact-submit" type="submit" disabled={submitting}>{submitting ? t('contact.sending') : t('contact.send')} <Send size={15} /></button>
                  {status && <p className="contact-status" role="status">{status}</p>}
                </form>
              </div>
            </article>
          </section>

          <div className="contact-info-strip">
            <Info size={22} color="#1235b5" />
            <div><strong>{t('contact.important')}</strong><span>{t('contact.importantText')}</span></div>
          </div>
        </main>

        <aside className="right-sidebar">
          <div className="gov-sidebar">
            <div className="gov-sidebar-header"><LinkIcon size={20} />{t('sidebar.importantLinks')}</div>
            <ul className="gov-sidebar-list">
              {[
                { text: t('sidebar.circulars'), to: '/#notices' },
                { text: t('sidebar.admissionProcess'), to: '/contact' },
                { text: t('sidebar.curriculum'), to: '/students' },
                { text: t('sidebar.calendar'), to: '/#notices' },
                { text: t('sidebar.photoCollection'), to: '/gallery' },
                { text: t('sidebar.documents'), to: '/contact' }
              ].map((item) => <Link key={item.text} to={item.to} className="gov-sidebar-item"><div className="gov-sidebar-item-left"><ChevronRight size={14} color="#d9381e" /><span>{item.text}</span></div></Link>)}
            </ul>
          </div>
          <div className="gov-sidebar gov-notice-board">
            <div className="gov-sidebar-header"><Bell size={20} />{t('sidebar.noticeBoard')}</div>
            <div className="gov-notice-list">
              <div className="gov-notice-item"><span className="gov-notice-date">{t('notice.new')} ({t('notice.date.new')})</span>{t('notice.admission')}</div>
              <div className="gov-notice-item"><span className="gov-notice-date">{t('notice.important')} ({t('notice.date.important')})</span>{t('notice.uniformCamp')}</div>
              <div className="gov-notice-item"><span className="gov-notice-date">{t('notice.parentMeeting')} ({t('notice.date.parentMeeting')})</span>{t('notice.parentMeetingText')}</div>
            </div>
            <Link to="/#notices" className="gov-notice-more">{t('notice.viewAll')}</Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Contact;
