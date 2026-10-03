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

const featuredId = 'स्वातंत्र्य दिन';
const activityDescriptions = {
  'स्वातंत्र्य दिन': 'विद्यार्थ्यांच्या सहभागातून साजरा झालेल्या स्वातंत्र्य दिनाच्या उपक्रमाची छायाचित्रे.',
  'वाचन कट्टा': 'वाचनाची आवड आणि शैक्षणिक सहभाग दर्शविणाऱ्या वाचन कट्ट्याच्या छायाचित्रांचा संग्रह.',
  'राखी': 'रक्षाबंधनाशी संबंधित सांस्कृतिक उपक्रमाची छायाचित्रे.',
  'Rakhi': 'रक्षाबंधनाशी संबंधित सांस्कृतिक उपक्रमाची छायाचित्रे.',
  'आरोग्य तपासणी': 'आरोग्य तपासणी उपक्रमातील शाळेचे काही क्षण.',
  'पाठ्यपुस्तक व गणवेश वाटप कार्यक्रम': 'पाठ्यपुस्तक व गणवेश वाटप कार्यक्रमाची छायाचित्रे.',
  'शिक्षक दिन': 'शिक्षक दिन उपक्रमातील शाळेचे काही क्षण.'
};

const getDate = () => 'दिनांक उपलब्ध नाही';
const getDescription = (event) => activityDescriptions[event.id] || `“${event.title}” या उपक्रमाची छायाचित्रे.`;
const getCategoryLabel = (event) => event.category === 'इतर' ? 'शालेय उपक्रम' : event.category;

const videoItems = [
  { id: 'independence-video', title: 'स्वातंत्र्य दिन', date: getDate(), thumbnail: allEvents.find((event) => event.id === featuredId)?.cover, videoUrl: null, category: 'राष्ट्रीय दिन' },
  { id: 'reading-video', title: 'वाचन कट्टा', date: getDate(), thumbnail: allEvents.find((event) => event.id === 'वाचन कट्टा')?.cover, videoUrl: null, category: 'शैक्षणिक' }
];

const Sidebar = ({ side }) => {
  if (side === 'left') {
    const items = [
      { icon: HomeIcon, text: 'मुख्य पृष्ठ', to: '/' },
      { icon: Users, text: 'शैक्षणिक नेतृत्व', to: '/teachers' },
      { icon: Users, text: 'शिक्षक आणि कर्मचारी', to: '/teachers' },
      { icon: GraduationCap, text: 'विद्यार्थी', to: '/students' },
      { icon: CalendarDays, text: 'उपक्रम', to: '/activities', active: true },
      { icon: ImageIcon, text: 'गॅलरी', to: '/gallery' },
      { icon: Phone, text: 'संपर्क', to: '/contact' },
      { icon: LinkIcon, text: 'महत्त्वाचे दुवे', to: '/contact' },
      { icon: Building2, text: 'शासकीय योजना', to: '/about-school' },
      { icon: FileText, text: 'प्रवेश माहिती', to: '/contact' },
      { icon: Bell, text: 'सूचना फलक', to: '/#notices' },
      { icon: HelpCircle, text: 'वारंवार विचारले जाणारे प्रश्न', to: '/contact' }
    ];
    return (
      <aside className="left-sidebar">
        <div className="activity-sidebar">
          <div className="activity-sidebar-header"><HomeIcon size={20} />त्वरित प्रवेश</div>
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
        <div className="activity-sidebar-header"><LinkIcon size={20} />महत्त्वाच्या लिंक्स</div>
        {[
          ['सूचना व परिपत्रके', '/#notices'],
          ['प्रवेश प्रक्रिया', '/contact'],
          ['शालेय अभ्यासक्रम', '/students'],
          ['शालेय दिनदर्शिका', '/#notices'],
          ['छायाचित्र संग्रह', '/gallery'],
          ['महत्त्वाचे दस्तऐवज', '/contact']
        ].map(([text, to]) => <Link key={text} to={to} className="activity-sidebar-item"><span><ChevronRight size={14} />{text}</span></Link>)}
      </div>
      <div className="activity-sidebar notice-sidebar">
        <div className="activity-sidebar-header"><Bell size={20} />सूचना फलक</div>
        <div className="activity-notice"><strong>नवीन (०१-०६-२०२६)</strong>शाळेत नवीन शैक्षणिक वर्ष २०२६-२७ ची प्रवेश प्रक्रिया सुरू झाली आहे.</div>
        <div className="activity-notice"><strong>महत्त्वाचे (२८-०५-२०२६)</strong>विद्यार्थ्यांसाठी गणवेश व पाठ्यपुस्तके वाटप शिबीर.</div>
        <div className="activity-notice"><strong>पालक सभा (२५-०५-२०२६)</strong>इयत्ता पहिली ते चौथीच्या पालकांसाठी विशेष सभा.</div>
        <Link to="/#notices" className="activity-notice-more">सर्व पहा →</Link>
      </div>
    </aside>
  );
};

const VideoCard = ({ video, onOpen }) => (
  <button type="button" className="activity-video-card" onClick={() => onOpen(video)}>
    <div className="activity-video-image">
      {video.thumbnail ? <img src={video.thumbnail} alt={video.title} loading="lazy" /> : <div className="activity-video-empty"><Info size={24} />थंबनेल उपलब्ध नाही</div>}
      <span className="activity-play-button">{video.videoUrl ? <Play size={23} fill="currentColor" /> : <Pause size={21} />}</span>
    </div>
    <div className="activity-video-copy">
      <h3>{video.title}</h3>
      <p>{video.date} <span>·</span> {video.category}</p>
      <small>{video.videoUrl ? 'व्हिडिओ पाहा' : 'व्हिडिओ लवकरच उपलब्ध होईल'}</small>
    </div>
  </button>
);

const Activities = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [activeCategory, setActiveCategory] = useState('सर्व');
  const categories = useMemo(() => ['सर्व', ...new Set(allEvents.map((event) => getCategoryLabel(event)))], []);
  const featured = allEvents.find((event) => event.id === featuredId) || allEvents[0];
  const visibleEvents = allEvents.filter((event) => event.id !== featured?.id && (activeCategory === 'सर्व' || getCategoryLabel(event) === activeCategory));

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
          <div className="activity-breadcrumb"><Link to="/"><HomeIcon size={14} /> मुख्य पृष्ठ</Link><ChevronRight size={14} /><span>उपक्रम</span></div>
          <section className="activity-page-header">
            <div className="activity-page-header-title"><CalendarDays size={31} /><div><h1>शालेय उपक्रम</h1><p>विद्यार्थ्यांच्या सर्वांगीण विकासासाठी विविध शैक्षणिक व सांस्कृतिक उपक्रम</p></div></div>
          </section>
          <div className="activity-intro"><Sparkles size={29} /><p>विद्यार्थ्यांच्या ज्ञान, कौशल्य, सर्जनशीलता, आत्मविश्वास आणि सामाजिक जाणीवा विकसित करण्यासाठी आमच्या शाळेत विविध शैक्षणिक, सांस्कृतिक, क्रीडा आणि सामाजिक उपक्रम नियमितपणे आयोजित केले जातात.</p></div>

          {featured && <section className="activity-featured">
            <div className="activity-featured-image"><img src={featured.cover} alt={featured.title} /></div>
            <div className="activity-featured-copy">
              <span className="activity-label">{getCategoryLabel(featured)}</span>
              <h2>{featured.title}</h2>
              <div className="activity-meta"><span><strong>दिनांक:</strong> {getDate(featured)}</span><span><strong>छायाचित्रे:</strong> {featured.images.length}</span></div>
              <p>{getDescription(featured)}</p>
              <button type="button" className="activity-more" onClick={() => setSelectedEvent(featured)}>अधिक माहिती →</button>
            </div>
          </section>}

          <section>
            <div className="activity-section-heading"><div><h2>व्हिडिओ</h2><p>आमच्या शाळेतील उपक्रमांचे काही क्षण</p></div><MessageCircle size={21} color="#1235b5" /></div>
            <div className="activity-video-grid" style={{ marginTop: 10 }}>{videoItems.map((video) => <VideoCard key={video.id} video={video} onOpen={setSelectedVideo} />)}</div>
          </section>

          <section>
            <div className="activity-section-heading"><div><h2>सर्व उपक्रम</h2><p>शाळेतील विविध उपक्रम आणि कार्यक्रम</p></div><BookOpen size={21} color="#1235b5" /></div>
            <div className="activity-filter-row" style={{ margin: '10px 0' }}>{categories.map((category) => <button type="button" key={category} className={`activity-filter${activeCategory === category ? ' active' : ''}`} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
            <div className="activity-grid">
              {visibleEvents.map((event) => <article className="activity-card" key={event.id}>
                <div className="activity-card-image"><img src={event.cover} alt={event.title} loading="lazy" /></div>
                <div className="activity-card-copy">
                  <span className="activity-label">{getCategoryLabel(event)}</span>
                  <h3>{event.title}</h3>
                  <p><strong>{getDate(event)}</strong> · {event.images.length} छायाचित्रे</p>
                  <p className="activity-description">{getDescription(event)}</p>
                  <button type="button" className="activity-card-link" onClick={() => setSelectedEvent(event)}>अधिक वाचा →</button>
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
            <span className="activity-label">{getCategoryLabel(selectedEvent)}</span>
            <h2 id="activity-modal-title">{selectedEvent.title}</h2>
            <p><strong>दिनांक:</strong> {getDate(selectedEvent)} · <strong>छायाचित्रे:</strong> {selectedEvent.images.length}</p>
            <p>{getDescription(selectedEvent)}</p>
            <div className="activity-related">{selectedEvent.images.slice(0, 4).map((image, index) => <img key={image} src={image} alt={`${selectedEvent.title} ${index + 1}`} loading="lazy" />)}</div>
          </div>
        </div>
      </div>}

      {selectedVideo && <div className="activity-modal-backdrop" role="presentation" onClick={() => setSelectedVideo(null)}>
        <div className="activity-modal activity-video-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}>
          <button type="button" className="activity-modal-close" onClick={() => setSelectedVideo(null)} aria-label="बंद करा"><X size={19} /></button>
          {selectedVideo.videoUrl ? <video controls preload="metadata" poster={selectedVideo.thumbnail} src={selectedVideo.videoUrl} style={{ width: '100%' }} /> : <><Info size={38} color="#1235b5" /><h2>{selectedVideo.title}</h2><p>या उपक्रमासाठी व्हिडिओ URL अद्याप उपलब्ध नाही. व्हिडिओ उपलब्ध झाल्यावर तो या विभागात जोडता येईल.</p></>}
        </div>
      </div>}
    </div>
  );
};

export default Activities;
