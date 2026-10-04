import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  BookOpen,
  Building2,
  CalendarDays,
  ChevronRight,
  FileText,
  GraduationCap,
  HelpCircle,
  Home as HomeIcon,
  Image as ImageIcon,
  Info,
  Link as LinkIcon,
  MessageCircle,
  Pause,
  Phone,
  Play,
  Sparkles,
  Users,
  X
} from 'lucide-react';
import { allEvents } from '../data/events';
import { useLanguage } from '../context/LanguageContext';

const featuredId = 'स्वातंत्र्य दिन';
const activityDescriptionKeys = {
  'स्वातंत्र्य दिन': 'activity.description.independence',
  'वाचन कट्टा': 'activity.description.reading',
  'राखी': 'activity.description.rakhi',
  'Rakhi': 'activity.description.rakhi',
  'आरोग्य तपासणी': 'activity.description.health',
  'पाठ्यपुस्तक व गणवेश वाटप कार्यक्रम': 'activity.description.uniform',
  'शिक्षक दिन': 'activity.description.teacherDay'
};

const getDate = (t) => t('common.dateUnavailable');
const getDescription = (event, t) => t(activityDescriptionKeys[event.id] || 'activity.description.generic', { title: event.title });
const getCategoryLabel = (event, t) => event.category === 'इतर' ? t('activity.category.school') : event.category;

const videoItems = [
  { id: 'independence-video', titleKey: 'activity.title.independence', title: 'स्वातंत्र्य दिन', thumbnail: allEvents.find((event) => event.id === featuredId)?.cover, videoUrl: null, categoryKey: 'video.category.national' },
  { id: 'reading-video', titleKey: 'activity.title.reading', title: 'वाचन कट्टा', thumbnail: allEvents.find((event) => event.id === 'वाचन कट्टा')?.cover, videoUrl: null, categoryKey: 'video.category.educational' }
];

const Sidebar = ({ side }) => {
  const { t } = useLanguage();
  if (side === 'left') {
    const items = [
      { icon: HomeIcon, text: t('nav.home'), to: '/' },
      { icon: Users, text: t('sidebar.academicLeadership'), to: '/teachers' },
      { icon: Users, text: t('nav.teachers'), to: '/teachers' },
      { icon: GraduationCap, text: t('nav.students'), to: '/students' },
      { icon: CalendarDays, text: t('nav.activities'), to: '/activities', active: true },
      { icon: ImageIcon, text: t('nav.gallery'), to: '/gallery' },
      { icon: Phone, text: t('nav.contact'), to: '/contact' },
      { icon: LinkIcon, text: t('school.quickLinks'), to: '/contact' },
      { icon: Building2, text: t('sidebar.governmentSchemes'), to: '/about-school' },
      { icon: FileText, text: t('sidebar.admission'), to: '/contact' },
      { icon: Bell, text: t('sidebar.noticeBoard'), to: '/#notices' },
      { icon: HelpCircle, text: t('sidebar.faq'), to: '/contact' }
    ];
    return (
      <aside className="left-sidebar">
        <div className="activity-sidebar">
          <div className="activity-sidebar-header"><HomeIcon size={20} />{t('sidebar.quickAccess')}</div>
          {items.map((item) => (
            <Link key={item.text} to={item.to} className={`activity-sidebar-item${item.active ? ' active' : ''}`}>
              <span><item.icon size={16} />{item.text}</span><ChevronRight size={14} />
            </Link>
          ))}
        </div>
      </aside>
    );
  }

  return (
    <aside className="right-sidebar">
      <div className="activity-sidebar">
        <div className="activity-sidebar-header"><LinkIcon size={20} />{t('sidebar.importantLinks')}</div>
        {[
          [t('sidebar.circulars'), '/#notices'],
          [t('home.admission'), '/contact'],
          [t('sidebar.curriculum'), '/students'],
          [t('sidebar.calendar'), '/#notices'],
          [t('sidebar.photoCollection'), '/gallery'],
          [t('sidebar.documents'), '/contact']
        ].map(([text, to]) => <Link key={text} to={to} className="activity-sidebar-item"><span><ChevronRight size={14} />{text}</span></Link>)}
      </div>
      <div className="activity-sidebar notice-sidebar">
      <div className="activity-sidebar-header"><Bell size={20} />{t('sidebar.noticeBoard')}</div>
      <div className="activity-notice"><strong>{t('notice.new')} (०१-०६-२०२६)</strong>{t('notice.admission')}</div>
      <div className="activity-notice"><strong>{t('notice.important')} (२८-०५-२०२६)</strong>{t('notice.uniformCamp')}</div>
      <div className="activity-notice"><strong>{t('notice.parentMeeting')} (२५-०५-२०२६)</strong>{t('notice.parentMeetingText')}</div>
      <Link to="/#notices" className="activity-notice-more">{t('notice.viewAll')}</Link>
      </div>
    </aside>
  );
};

const VideoCard = ({ video, onOpen }) => (
  <VideoCardContent video={video} onOpen={onOpen} />
);

const VideoCardContent = ({ video, onOpen }) => {
  const { t } = useLanguage();
  const localizedVideo = { ...video, title: t(video.titleKey), category: t(video.categoryKey), date: getDate(t) };
  return (
  <button type="button" className="activity-video-card" onClick={() => onOpen(localizedVideo)}>
    <div className="activity-video-image">
      {video.thumbnail ? <img src={video.thumbnail} alt={localizedVideo.title} loading="lazy" /> : <div className="activity-video-empty"><Info size={24} />{t('video.noThumbnail')}</div>}
      <span className="activity-play-button">{video.videoUrl ? <Play size={23} fill="currentColor" /> : <Pause size={21} />}</span>
    </div>
    <div className="activity-video-copy">
      <h3>{localizedVideo.title}</h3>
      <p>{localizedVideo.date} <span>·</span> {localizedVideo.category}</p>
      <small>{video.videoUrl ? t('video.watch') : t('video.soon')}</small>
    </div>
  </button>
  );
};

const Activities = () => {
  const { t } = useLanguage();
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('सर्व');
  const categories = useMemo(() => ['सर्व', ...new Set(allEvents.map((event) => event.category === 'इतर' ? 'शालेय उपक्रम' : event.category))], []);
  const featured = allEvents.find((event) => event.id === featuredId) || allEvents[0];
  const visibleEvents = allEvents.filter((event) => event.id !== featured?.id && (activeCategory === 'सर्व' || getCategoryLabel(event, t) === activeCategory));

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setSelectedEvent(null);
        setSelectedVideo(null);
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  return (
    <div className="activities-redesign">
      <style>{`
        .activities-redesign { background: #f0f4f8; padding: 20px 0 40px; }
        .activities-redesign .page-layout { align-items: start; }
        .activity-sidebar { background: #fff; border: 1px solid #8ab8d0; border-radius: 2px; overflow: hidden; }
        .activity-sidebar-header { display: flex; align-items: center; gap: 10px; padding: 12px 15px; background: #0c1a9c; border-bottom: 2px solid #ffb833; color: #fff; font-size: 1.05rem; font-weight: 700; }
        .activity-sidebar-item { display: flex; align-items: center; justify-content: space-between; gap: 8px; padding: 10px 15px; border-bottom: 1px solid #e1e8ed; color: #081272; font-size: .88rem; }
        .activity-sidebar-item:hover, .activity-sidebar-item.active { background: #ffefbc; }
        .activity-sidebar-item span { display: flex; align-items: center; gap: 9px; }
        .activity-sidebar-item svg { flex: 0 0 auto; }
        .notice-sidebar { margin-top: 15px; }
        .activity-notice { padding: 10px 12px; border-bottom: 1px solid #e1e8ed; color: #303b4b; font-size: .78rem; line-height: 1.45; }
        .activity-notice strong { display: block; color: #d9381e; }
        .activity-notice-more { display: block; padding: 9px 13px; text-align: right; color: #1235b5; font-size: .8rem; font-weight: 700; }
        .activities-center { display: flex; flex-direction: column; gap: 15px; min-width: 0; }
        .activity-breadcrumb { display: flex; align-items: center; gap: 7px; padding: 0 2px; color: #526176; font-size: .84rem; }
        .activity-breadcrumb a { display: flex; align-items: center; gap: 5px; color: #1235b5; font-weight: 600; }
        .activity-page-header { position: relative; display: flex; align-items: center; justify-content: space-between; gap: 15px; padding: 13px 18px 16px; background: #0c1a9c; border-radius: 3px; color: #fff; }
        .activity-page-header::after { content: ''; position: absolute; left: 62px; bottom: 7px; width: 34px; height: 3px; background: #ffb000; }
        .activity-page-header-title { display: flex; align-items: center; gap: 12px; }
        .activity-page-header h1 { margin: 0; color: #fff; font-size: clamp(1.35rem, 2.5vw, 1.8rem); }
        .activity-page-header p { margin: 0; color: #e7efff; font-size: .86rem; }
        .activity-intro { display: flex; align-items: center; gap: 14px; padding: 13px 16px; border: 1px solid #b5dff2; border-radius: 4px; background: #e6f5fc; color: #26384d; font-size: .9rem; }
        .activity-intro svg { color: #1235b5; flex: 0 0 auto; }
        .activity-featured { display: grid; grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr); border: 1px solid #b9dff1; border-radius: 8px; overflow: hidden; background: #fff; box-shadow: 0 2px 7px rgba(16, 42, 114, .07); }
        .activity-featured-image { min-height: 250px; }
        .activity-featured-image img { width: 100%; height: 100%; display: block; object-fit: cover; }
        .activity-featured-copy { padding: 22px; display: flex; flex-direction: column; justify-content: center; }
        .activity-label { display: inline-block; width: fit-content; padding: 4px 9px; border-radius: 4px; background: #ffefbc; color: #6b4c00; font-size: .75rem; font-weight: 700; }
        .activity-featured-copy h2 { margin: 12px 0 8px; color: #102a72; font-size: clamp(1.35rem, 3vw, 1.8rem); }
        .activity-meta { display: flex; flex-wrap: wrap; gap: 8px 16px; color: #526176; font-size: .8rem; }
        .activity-meta strong { color: #1235b5; }
        .activity-featured-copy p { margin: 13px 0 18px; color: #34445a; font-size: .87rem; line-height: 1.65; }
        .activity-more { align-self: flex-start; padding: 8px 13px; border: 0; border-radius: 4px; background: #0c1a9c; color: #fff; font: inherit; font-size: .8rem; font-weight: 700; cursor: pointer; }
        .activity-section-heading { display: flex; align-items: end; justify-content: space-between; gap: 12px; padding: 9px 14px; border-bottom: 2px solid #ffb000; background: #e6f5fc; color: #102a72; }
        .activity-section-heading h2 { margin: 0; color: #102a72; font-size: 1.18rem; }
        .activity-section-heading p { margin: 0; color: #526176; font-size: .8rem; }
        .activity-filter-row { display: flex; gap: 7px; flex-wrap: wrap; }
        .activity-filter { padding: 6px 11px; border: 1px solid #b9dff1; border-radius: 4px; background: #fff; color: #1235b5; font: inherit; font-size: .76rem; cursor: pointer; }
        .activity-filter.active, .activity-filter:hover { background: #0c1a9c; border-color: #0c1a9c; color: #fff; }
        .activity-video-grid, .activity-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 10px; }
        .activity-video-card, .activity-card { min-width: 0; overflow: hidden; border: 1px solid #b9dff1; border-radius: 8px; background: #fff; box-shadow: 0 2px 7px rgba(16, 42, 114, .06); text-align: left; }
        .activity-video-card { padding: 0; color: inherit; cursor: pointer; }
        .activity-video-image { position: relative; height: 170px; background: #dbeef6; }
        .activity-video-image img { width: 100%; height: 100%; display: block; object-fit: cover; }
        .activity-video-empty { height: 100%; display: flex; align-items: center; justify-content: center; gap: 8px; color: #526176; font-size: .82rem; }
        .activity-play-button { position: absolute; top: 50%; left: 50%; display: grid; place-items: center; width: 48px; height: 48px; transform: translate(-50%, -50%); border: 2px solid #fff; border-radius: 50%; background: #0c1a9c; color: #fff; box-shadow: 0 2px 8px rgba(0,0,0,.18); }
        .activity-video-copy, .activity-card-copy { padding: 12px 14px; }
        .activity-video-copy h3, .activity-card-copy h3 { margin: 0 0 5px; color: #102a72; font-size: 1rem; }
        .activity-video-copy p, .activity-card-copy p { margin: 0; color: #526176; font-size: .76rem; }
        .activity-video-copy small { display: block; margin-top: 8px; color: #1235b5; font-size: .76rem; font-weight: 700; }
        .activity-card-image { height: 170px; background: #dbeef6; }
        .activity-card-image img { width: 100%; height: 100%; display: block; object-fit: cover; }
        .activity-card-copy h3 { margin-top: 9px; font-size: 1.02rem; }
        .activity-card-copy .activity-description { margin: 8px 0 11px; color: #34445a; line-height: 1.5; }
        .activity-card-link { padding: 0; border: 0; background: none; color: #1235b5; font: inherit; font-size: .78rem; font-weight: 700; cursor: pointer; }
        .activity-modal-backdrop { position: fixed; inset: 0; z-index: 100; display: grid; place-items: center; padding: 18px; background: rgba(8, 18, 54, .72); }
        .activity-modal { position: relative; width: min(760px, 100%); max-height: 92vh; overflow: auto; border: 1px solid #b9dff1; border-radius: 8px; background: #fff; }
        .activity-modal-close { position: absolute; top: 9px; right: 9px; z-index: 1; display: grid; place-items: center; width: 34px; height: 34px; border: 0; border-radius: 50%; background: #0c1a9c; color: #fff; cursor: pointer; }
        .activity-modal-image { width: 100%; max-height: 420px; display: block; object-fit: cover; }
        .activity-modal-copy { padding: 18px; }
        .activity-modal-copy h2 { margin: 10px 0 6px; color: #102a72; }
        .activity-modal-copy p { color: #34445a; line-height: 1.65; }
        .activity-related { display: grid; grid-template-columns: repeat(4, 1fr); gap: 7px; margin-top: 14px; }
        .activity-related img { width: 100%; height: 72px; object-fit: cover; border-radius: 4px; }
        .activity-video-modal { padding: 25px; text-align: center; }
        .activity-video-modal h2 { color: #102a72; }
        .activity-video-modal p { color: #526176; }
        @media (max-width: 900px) { .activity-featured { grid-template-columns: 1fr; } }
        @media (max-width: 680px) {
          .activities-redesign { padding-top: 10px; }
          .activity-page-header { align-items: flex-start; flex-direction: column; }
          .activity-page-header p { padding-left: 44px; }
          .activity-grid, .activity-video-grid { grid-template-columns: 1fr; }
          .activity-section-heading { align-items: flex-start; flex-direction: column; }
          .activity-related { grid-template-columns: repeat(3, 1fr); }
        }
      `}</style>

      <div className="page-layout">
        <Sidebar side="left" />
        <main className="activities-center">
          <div className="activity-breadcrumb"><Link to="/"><HomeIcon size={14} /> {t('common.home')}</Link><ChevronRight size={14} /><span>{t('activities.breadcrumb')}</span></div>
          <section className="activity-page-header">
            <div className="activity-page-header-title"><CalendarDays size={31} /><div><h1>{t('activities.title')}</h1><p>{t('activities.subtitle')}</p></div></div>
          </section>
          <div className="activity-intro"><Sparkles size={29} /><p>{t('activities.intro')}</p></div>

          {featured && <section className="activity-featured">
            <div className="activity-featured-image"><img src={featured.cover} alt={featured.title} /></div>
            <div className="activity-featured-copy">
              <span className="activity-label">{getCategoryLabel(featured, t)}</span>
              <h2>{featured.title}</h2>
              <div className="activity-meta"><span><strong>दिनांक:</strong> {getDate(featured)}</span><span><strong>छायाचित्रे:</strong> {featured.images.length}</span></div>
              <p>{getDescription(featured, t)}</p>
              <button type="button" className="activity-more" onClick={() => setSelectedEvent(featured)}>{t('common.details')} →</button>
            </div>
          </section>}

          <section>
            <div className="activity-section-heading"><div><h2>{t('activities.video')}</h2><p>{t('activities.videoSubtitle')}</p></div><MessageCircle size={21} color="#1235b5" /></div>
            <div className="activity-video-grid" style={{ marginTop: 10 }}>{videoItems.map((video) => <VideoCard key={video.id} video={video} onOpen={setSelectedVideo} />)}</div>
          </section>

          <section>
            <div className="activity-section-heading"><div><h2>{t('activities.all')}</h2><p>{t('activities.allSubtitle')}</p></div><BookOpen size={21} color="#1235b5" /></div>
            <div className="activity-filter-row" style={{ margin: '10px 0' }}>{categories.map((category) => <button type="button" key={category} className={`activity-filter${activeCategory === category ? ' active' : ''}`} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
            <div className="activity-grid">
              {visibleEvents.map((event) => <article className="activity-card" key={event.id}>
                <div className="activity-card-image"><img src={event.cover} alt={event.title} loading="lazy" /></div>
                <div className="activity-card-copy">
                  <span className="activity-label">{getCategoryLabel(event, t)}</span>
                  <h3>{event.title}</h3>
                  <p><strong>{getDate(event)}</strong> · {t('activities.photoCount', { count: event.images.length })}</p>
                  <p className="activity-description">{getDescription(event, t)}</p>
                  <button type="button" className="activity-card-link" onClick={() => setSelectedEvent(event)}>{t('common.more')} →</button>
                </div>
              </article>)}
            </div>
          </section>
        </main>
        <Sidebar side="right" />
      </div>

      {selectedEvent && <div className="activity-modal-backdrop" role="presentation" onClick={() => setSelectedEvent(null)}>
        <div className="activity-modal" role="dialog" aria-modal="true" aria-labelledby="activity-modal-title" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="activity-modal-close" onClick={() => setSelectedEvent(null)} aria-label="बंद करा"><X size={19} /></button>
          <img className="activity-modal-image" src={selectedEvent.cover} alt={selectedEvent.title} />
          <div className="activity-modal-copy">
            <span className="activity-label">{getCategoryLabel(selectedEvent, t)}</span>
            <h2 id="activity-modal-title">{selectedEvent.title}</h2>
            <p><strong>दिनांक:</strong> {getDate(selectedEvent)} · <strong>छायाचित्रे:</strong> {selectedEvent.images.length}</p>
            <p>{getDescription(selectedEvent, t)}</p>
            <div className="activity-related">{selectedEvent.images.slice(0, 4).map((image, index) => <img key={image} src={image} alt={`${selectedEvent.title} ${index + 1}`} loading="lazy" />)}</div>
          </div>
        </div>
      </div>}

      {selectedVideo && <div className="activity-modal-backdrop" role="presentation" onClick={() => setSelectedVideo(null)}>
        <div className="activity-modal activity-video-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="activity-modal-close" onClick={() => setSelectedVideo(null)} aria-label="बंद करा"><X size={19} /></button>
          {selectedVideo.videoUrl ? <video controls preload="metadata" poster={selectedVideo.thumbnail} src={selectedVideo.videoUrl} style={{ width: '100%' }} /> : <><Info size={38} color="#1235b5" /><h2>{selectedVideo.title}</h2><p>{t('video.urlUnavailable')}</p></>}
        </div>
      </div>}
    </div>
  );
};

export default Activities;
