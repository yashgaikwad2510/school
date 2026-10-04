import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Bell,
  Building2,
  CalendarDays,
  Camera,
  ChevronLeft,
  ChevronRight,
  FileText,
  GraduationCap,
  HelpCircle,
  Home as HomeIcon,
  Image as ImageIcon,
  Link as LinkIcon,
  MessageCircle,
  Phone,
  Play,
  Users,
  X
} from 'lucide-react';
import { allEvents } from '../data/events';
import { useLanguage } from '../context/LanguageContext';

const getDate = (t) => t('common.dateUnavailable');
const getCategory = (event, t) => event.category === 'इतर' ? t('activity.category.school') : event.category;

const videoFiles = import.meta.glob(
  '../assets/upakrm/videos/*.{mp4,webm,ogg,mov}',
  { eager: true, query: '?url', import: 'default' }
);

const titleAliases = {
  swatantra_din: 'स्वातंत्र्य दिन',
  independence_day: 'स्वातंत्र्य दिन',
  reading_corner: 'वाचन कट्टा',
  reading_centre: 'वाचन कट्टा',
  teacher_day: 'शिक्षक दिन',
  rakhi: 'रक्षाबंधन',
  raksha_bandhan: 'रक्षाबंधन'
};

const createVideoTitle = (path) => {
  const fileName = decodeURIComponent(path.split('/').pop() || '').replace(/\.[^.]+$/, '');
  const normalized = fileName
    .replace(/[_-]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const alias = titleAliases[fileName.toLowerCase().replace(/[\s-]+/g, '_')];
  if (alias) return alias;
  return normalized || 'शालेय उपक्रमाचा व्हिडिओ';
};

const getVideoCategory = (title) => {
  const normalized = title.toLowerCase();
  if (normalized.includes('स्वातंत्र्य') || normalized.includes('independence')) return 'राष्ट्रीय दिन';
  if (normalized.includes('वाचन') || normalized.includes('reading')) return 'शैक्षणिक';
  if (normalized.includes('रक्षाबंधन') || normalized.includes('rakhi')) return 'सांस्कृतिक';
  if (normalized.includes('शिक्षक') || normalized.includes('teacher')) return 'शालेय उपक्रम';
  return 'शालेय उपक्रम';
};

const createVideoData = (t) => Object.entries(videoFiles)
  .sort(([first], [second]) => first.localeCompare(second, undefined, { numeric: true }))
  .map(([path, url]) => {
    const title = createVideoTitle(path);
    return {
      id: path,
      title,
      date: getDate(t),
      category: getVideoCategory(title),
      videoUrl: url
    };
  });

const Sidebar = ({ right = false }) => {
  if (!right) {
    const items = [
      [HomeIcon, 'मुख्य पृष्ठ', '/'], [HomeIcon, 'शाळेबद्दल', '/about-school'], [Users, 'शैक्षणिक नेतृत्व', '/teachers'],
      [Building2, 'आमच्या सुविधा', '/facilities'], [Users, 'शिक्षक आणि कर्मचारी', '/teachers'], [GraduationCap, 'विद्यार्थी', '/students'],
      [CalendarDays, 'उपक्रम', '/activities'], [ImageIcon, 'गॅलरी', '/gallery', true], [Phone, 'संपर्क', '/contact'],
      [LinkIcon, 'महत्त्वाचे दुवे', '/contact'], [Building2, 'शासकीय योजना', '/about-school'], [FileText, 'प्रवेश माहिती', '/contact'],
      [Bell, 'सूचना फलक', '/#notices'], [HelpCircle, 'वारंवार विचारले जाणारे प्रश्न', '/contact']
    ];
    return <aside className="left-sidebar"><div className="gallery-sidebar"><div className="gallery-sidebar-header"><HomeIcon size={19} />त्वरित प्रवेश</div>{items.map(([Icon, text, to, active]) => <Link key={text} to={to} className={`gallery-sidebar-item${active ? ' active' : ''}`}><span><Icon size={15} />{text}</span><ChevronRight size={13} /></Link>)}</div></aside>;
  }
  const links = [['सूचना व परिपत्रके', '/#notices'], ['प्रवेश प्रक्रिया', '/contact'], ['शालेय अभ्यासक्रम', '/students'], ['शालेय दिनदर्शिका', '/#notices'], ['छायाचित्र संग्रह', '/gallery'], ['महत्त्वाचे दस्तऐवज', '/contact']];
  return <aside className="right-sidebar"><div className="gallery-sidebar"><div className="gallery-sidebar-header"><LinkIcon size={19} />महत्त्वाच्या लिंक्स</div>{links.map(([text, to]) => <Link key={text} to={to} className="gallery-sidebar-item"><span><ChevronRight size={13} />{text}</span></Link>)}</div><div className="gallery-sidebar gallery-notice-board"><div className="gallery-sidebar-header"><Bell size={19} />सूचना फलक</div><div className="gallery-notice"><strong>नवीन (०१-०६-२०२६)</strong>शाळेत नवीन शैक्षणिक वर्ष २०२६-२७ ची प्रवेश प्रक्रिया सुरू झाली आहे.</div><div className="gallery-notice"><strong>महत्त्वाचे (२८-०५-२०२६)</strong>विद्यार्थ्यांसाठी गणवेश व पाठ्यपुस्तके वाटप शिबीर.</div><div className="gallery-notice"><strong>पालक सभा (२५-०५-२०२६)</strong>इयत्ता पहिली ते चौथीच्या पालकांसाठी विशेष सभा.</div><Link className="gallery-notice-more" to="/#notices">सर्व पहा →</Link></div></aside>;
};

const VideoCard = ({ video, onOpen }) => (
  <article className="gallery-video-card" onClick={() => onOpen(video)}>
    <div className="gallery-video-image">
      <video
        src={video.videoUrl}
        preload="metadata"
        onClick={(event) => event.stopPropagation()}
        aria-label={video.title}
      />
      <span className="gallery-play"><Play size={21} fill="currentColor" /></span>
    </div>
    <div className="gallery-video-copy">
      <span className="gallery-badge">{video.category}</span>
      <h3>{video.title}</h3>
      <p>{video.date}</p>
    </div>
  </article>
);

const Gallery = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState('सर्व');
  const [lightbox, setLightbox] = useState(null);
  const [video, setVideo] = useState(null);
  const videoData = useMemo(() => createVideoData(t), [t]);
  const categories = useMemo(() => ['सर्व', 'शैक्षणिक', 'सांस्कृतिक', 'क्रीडा', 'राष्ट्रीय दिन', 'शालेय उपक्रम', 'इतर'], []);
  const filtered = activeCategory === 'सर्व' ? allEvents : allEvents.filter((event) => getCategory(event, t) === activeCategory);

  useEffect(() => {
    const onKey = (event) => {
      if (event.key === 'Escape') { setLightbox(null); setVideo(null); }
      if (!lightbox) return;
      if (event.key === 'ArrowRight') setLightbox((current) => ({ ...current, index: (current.index + 1) % current.images.length }));
      if (event.key === 'ArrowLeft') setLightbox((current) => ({ ...current, index: (current.index - 1 + current.images.length) % current.images.length }));
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox]);

  return <div className="gallery-redesign"><style>{`
    .gallery-redesign{background:#f0f4f8;padding:20px 0 40px}.gallery-sidebar{background:#fff;border:1px solid #8ab8d0;border-radius:2px;overflow:hidden}.gallery-sidebar-header{display:flex;align-items:center;gap:9px;padding:11px 14px;background:#0c1a9c;border-bottom:2px solid #ffb833;color:#fff;font-weight:700;font-size:1rem}.gallery-sidebar-item{display:flex;align-items:center;justify-content:space-between;gap:7px;padding:9px 13px;border-bottom:1px solid #e1e8ed;color:#081272;font-size:.83rem}.gallery-sidebar-item span{display:flex;align-items:center;gap:8px}.gallery-sidebar-item:hover,.gallery-sidebar-item.active{background:#ffefbc}.gallery-notice-board{margin-top:14px}.gallery-notice{padding:9px 11px;border-bottom:1px solid #e1e8ed;color:#303b4b;font-size:.75rem;line-height:1.45}.gallery-notice strong{display:block;color:#d9381e}.gallery-notice-more{display:block;padding:9px 12px;text-align:right;color:#1235b5;font-weight:700;font-size:.77rem}.gallery-center{display:flex;flex-direction:column;gap:14px;min-width:0}.gallery-breadcrumb{display:flex;align-items:center;gap:6px;color:#526176;font-size:.82rem}.gallery-breadcrumb a{display:flex;align-items:center;gap:5px;color:#1235b5;font-weight:600}.gallery-header{position:relative;display:flex;align-items:center;gap:12px;padding:13px 17px 17px;background:#0c1a9c;border-radius:3px;color:#fff}.gallery-header:after{content:'';position:absolute;left:57px;bottom:7px;width:33px;height:3px;background:#ffb000}.gallery-header h1{margin:0;color:#fff;font-size:clamp(1.35rem,2.5vw,1.8rem)}.gallery-header p{margin:2px 0 0;color:#e7efff;font-size:.82rem}.gallery-intro{display:flex;align-items:center;gap:13px;padding:13px 15px;background:#e6f5fc;border:1px solid #b5dff2;border-radius:4px;color:#26384d;font-size:.87rem}.gallery-intro svg{flex:0 0 auto;color:#1235b5}.gallery-filters{display:flex;justify-content:center;gap:7px;overflow-x:auto;padding:1px 0 3px}.gallery-filter{flex:0 0 auto;padding:6px 12px;border:1px solid #b9dff1;border-radius:20px;background:#fff;color:#1235b5;font:inherit;font-size:.76rem;cursor:pointer}.gallery-filter.active,.gallery-filter:hover{background:#0c1a9c;border-color:#0c1a9c;color:#fff}.gallery-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px}.gallery-card{overflow:hidden;border:1px solid #b9dff1;border-radius:10px;background:#fff;box-shadow:0 2px 7px rgba(16,42,114,.06);cursor:pointer;transition:box-shadow .2s,transform .2s}.gallery-card:hover{transform:translateY(-2px);box-shadow:0 5px 13px rgba(16,42,114,.12)}.gallery-cover{position:relative;height:148px;overflow:hidden;background:#dbeef6}.gallery-cover img{width:100%;height:100%;display:block;object-fit:cover;transition:transform .3s}.gallery-card:hover .gallery-cover img{transform:scale(1.03)}.gallery-counter{position:absolute;right:7px;bottom:7px;display:flex;align-items:center;gap:3px;padding:3px 6px;border-radius:3px;background:rgba(8,18,54,.78);color:#fff;font-size:.7rem}.gallery-card-copy{padding:10px 11px}.gallery-badge{display:inline-block;padding:3px 7px;border-radius:4px;background:#ffefbc;color:#6b4c00;font-size:.68rem;font-weight:700}.gallery-card-copy h2{margin:7px 0 4px;color:#102a72;font-size:.97rem;line-height:1.3}.gallery-card-copy p{margin:0;color:#526176;font-size:.74rem}.gallery-empty{padding:25px;text-align:center;background:#fff;border:1px solid #b9dff1;color:#526176}.gallery-section-title{display:flex;align-items:end;justify-content:space-between;gap:10px;padding:9px 13px;border-bottom:2px solid #ffb000;background:#e6f5fc}.gallery-section-title h2{margin:0;color:#102a72;font-size:1.14rem}.gallery-section-title p{margin:0;color:#526176;font-size:.78rem}.gallery-video-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:10px;margin-top:10px}.gallery-video-card{padding:0;overflow:hidden;border:1px solid #b9dff1;border-radius:9px;background:#fff;text-align:left;cursor:pointer;box-shadow:0 2px 7px rgba(16,42,114,.06)}.gallery-video-image{position:relative;height:145px;background:#dbeef6}    .gallery-video-image video{width:100%;height:100%;display:block;object-fit:cover}.gallery-video-empty{height:100%;display:flex;align-items:center;justify-content:center;gap:7px;color:#526176;font-size:.8rem}.gallery-play{position:absolute;top:50%;left:50%;display:grid;place-items:center;width:45px;height:45px;transform:translate(-50%,-50%);border:2px solid #fff;border-radius:50%;background:#0c1a9c;color:#fff;pointer-events:none}.gallery-video-copy{padding:10px 11px}.gallery-video-copy h3{margin:6px 0 3px;color:#102a72;font-size:.92rem}.gallery-video-copy p{margin:0;color:#526176;font-size:.73rem}.gallery-modal-backdrop{position:fixed;inset:0;z-index:100;display:grid;place-items:center;padding:18px;background:rgba(8,18,54,.76)}.gallery-modal{position:relative;width:min(850px,100%);max-height:92vh;overflow:auto;border:1px solid #b9dff1;border-radius:8px;background:#fff}.gallery-close{position:absolute;top:9px;right:9px;z-index:1;display:grid;place-items:center;width:34px;height:34px;border:0;border-radius:50%;background:#0c1a9c;color:#fff;cursor:pointer}.gallery-modal-image{width:100%;max-height:72vh;display:block;object-fit:contain;background:#07143a}.gallery-modal-footer{display:flex;align-items:center;justify-content:space-between;gap:12px;padding:12px 16px}.gallery-modal-footer h2{margin:0;color:#102a72;font-size:1.05rem}.gallery-modal-footer p{margin:3px 0 0;color:#526176;font-size:.75rem}.gallery-nav{position:absolute;top:50%;display:grid;place-items:center;width:38px;height:38px;transform:translateY(-50%);border:0;border-radius:50%;background:#0c1a9c;color:#fff;cursor:pointer}.gallery-nav.prev{left:10px}.gallery-nav.next{right:10px}.gallery-video-modal{padding:26px;text-align:center}.gallery-video-modal h2{color:#102a72}.gallery-video-modal p{color:#526176}.gallery-video-modal video{width:100%;max-height:65vh}.gallery-related-count{color:#1235b5;font-weight:700}@media(max-width:1000px){.gallery-grid{grid-template-columns:repeat(2,minmax(0,1fr))}.gallery-video-grid{grid-template-columns:repeat(2,minmax(0,1fr))}}@media(max-width:680px){.gallery-redesign{padding-top:10px}.gallery-grid,.gallery-video-grid{grid-template-columns:1fr}.gallery-header{align-items:flex-start}.gallery-header p{padding-left:39px}.gallery-section-title{align-items:flex-start;flex-direction:column}.gallery-cover{height:190px}.gallery-modal-footer{align-items:flex-start;flex-direction:column}.gallery-nav{width:34px;height:34px}}
  `}</style>
  <div className="page-layout"><Sidebar /><main className="gallery-center">
    <div className="gallery-breadcrumb"><Link to="/"><HomeIcon size={14}/>{t('common.home')}</Link><ChevronRight size={14}/><span>{t('gallery.breadcrumb')}</span></div>
    <section className="gallery-header"><ImageIcon size={31}/><div><h1>{t('gallery.title')}</h1><p>{t('gallery.subtitle')}</p></div></section>
    <div className="gallery-intro"><ImageIcon size={27}/><p>{t('gallery.intro')}</p></div>
    <div className="gallery-filters" aria-label={t('common.galleryCategories')}>{categories.map((category) => <button type="button" key={category} className={`gallery-filter${activeCategory === category ? ' active' : ''}`} onClick={() => setActiveCategory(category)}>{category}</button>)}</div>
    <section><div className="gallery-section-title"><div><h2>{t('gallery.activities')}</h2><p>{t('gallery.activitiesSubtitle')}</p></div><Camera size={21} color="#1235b5"/></div><div className="gallery-grid" style={{marginTop:10}}>{filtered.map((event) => <article key={event.id} className="gallery-card" onClick={() => setLightbox({images:event.images,index:0,event})}><div className="gallery-cover"><img src={event.cover} alt={event.title} loading="lazy"/><span className="gallery-counter"><Camera size={12}/>{event.images.length}</span></div><div className="gallery-card-copy"><span className="gallery-badge">{getCategory(event, t)}</span><h2>{event.title}</h2><p>{getDate(t)} · <span className="gallery-related-count">{t('activities.photoCount', { count: event.images.length })}</span></p></div></article>)}</div>{filtered.length === 0 && <div className="gallery-empty">या विभागासाठी सध्या छायाचित्रे उपलब्ध नाहीत.</div>}</section>
    <section><div className="gallery-section-title"><div><h2>{t('gallery.videos')}</h2><p>{t('gallery.videosSubtitle')}</p></div><MessageCircle size={21} color="#1235b5"/></div>{videoData.length > 0 ? <div className="gallery-video-grid">{videoData.map((item) => <VideoCard key={item.id} video={item} onOpen={setVideo}/>)}</div> : <div className="gallery-empty" style={{marginTop:10}}>{t('gallery.folderHint')}</div>}</section>
  </main><Sidebar right/></div>
  {lightbox && <div className="gallery-modal-backdrop" role="presentation" onClick={() => setLightbox(null)}><div className="gallery-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}><button type="button" className="gallery-close" onClick={() => setLightbox(null)} aria-label={t('common.close')}><X size={18}/></button><img className="gallery-modal-image" src={lightbox.images[lightbox.index]} alt={lightbox.event.title}/>{lightbox.images.length > 1 && <><button type="button" className="gallery-nav prev" onClick={() => setLightbox((current) => ({...current,index:(current.index-1+current.images.length)%current.images.length}))} aria-label={t('gallery.previousPhoto')}><ChevronLeft size={22}/></button><button type="button" className="gallery-nav next" onClick={() => setLightbox((current) => ({...current,index:(current.index+1)%current.images.length}))} aria-label={t('gallery.nextPhoto')}><ChevronRight size={22}/></button></>}<div className="gallery-modal-footer"><div><h2>{lightbox.event.title}</h2><p>{getCategory(lightbox.event, t)} · {getDate(t)}</p></div><p>{lightbox.index + 1} / {lightbox.images.length} {t('common.photos')}</p></div></div></div>}
  {video && <div className="gallery-modal-backdrop" role="presentation" onClick={() => setVideo(null)}><div className="gallery-modal gallery-video-modal" role="dialog" aria-modal="true" onClick={(event) => event.stopPropagation()}><button type="button" className="gallery-close" onClick={() => setVideo(null)} aria-label={t('common.close')}><X size={18}/></button><video controls preload="metadata" src={video.videoUrl} /><h2>{video.title}</h2><p>{video.category} · {video.date}</p></div></div>}
  </div>;
};

export default Gallery;
