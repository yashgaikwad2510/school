import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { allEvents, categories, featuredEvents, nonFeaturedEvents } from '../data/events';

const SLIDE_INTERVAL = 4500; // ms

const Activities = () => {
  const [activeCategory, setActiveCategory] = useState('सर्व');
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0, title: '' });

  // ─── Slideshow state for the large featured card ───
  const mainEvent = featuredEvents[0];
  const slideImages = mainEvent ? mainEvent.images : [];
  const [slideIdx, setSlideIdx] = useState(() =>
    slideImages.length > 0 ? Math.floor(Math.random() * slideImages.length) : 0
  );
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef(null);

  const goToSlide = useCallback((idx) => {
    setSlideIdx(idx);
  }, []);

  const nextSlide = useCallback(() => {
    setSlideIdx(prev => (prev + 1) % slideImages.length);
  }, [slideImages.length]);

  const prevSlide = useCallback(() => {
    setSlideIdx(prev => (prev - 1 + slideImages.length) % slideImages.length);
  }, [slideImages.length]);

  // Autoplay
  useEffect(() => {
    if (isPaused || slideImages.length <= 1) return;
    timerRef.current = setInterval(nextSlide, SLIDE_INTERVAL);
    return () => clearInterval(timerRef.current);
  }, [isPaused, nextSlide, slideImages.length]);

  // Reset timer on manual navigation
  const handleManualNav = useCallback((fn) => {
    clearInterval(timerRef.current);
    fn();
  }, []);

  // ─── Filtering ───
  const filtered = activeCategory === 'सर्व'
    ? nonFeaturedEvents
    : nonFeaturedEvents.filter(e => e.category === activeCategory);

  const recentEvents = filtered.slice(0, 4);
  const memoryEvents = filtered.slice(4);

  // ─── Lightbox controls ───
  const openLightbox = (event, idx = 0) => {
    setLightbox({ open: true, images: event.images, index: idx, title: event.title });
  };
  const closeLightbox = () => setLightbox(prev => ({ ...prev, open: false }));
  const nextImage = () => setLightbox(prev => ({ ...prev, index: (prev.index + 1) % prev.images.length }));
  const prevImage = () => setLightbox(prev => ({ ...prev, index: (prev.index - 1 + prev.images.length) % prev.images.length }));

  useEffect(() => {
    const onKey = (e) => {
      if (!lightbox.open) return;
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [lightbox.open]);

  return (
    <div className="activities-page">
      {/* ───── Hero (matches Home hero design system) ───── */}
      <section
        className="hero"
        style={{
          position: 'relative',
          background: 'url("/उपक्रमआणिकार्यक्रम.png") no-repeat center center/cover',
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          color: 'white',
          padding: '4rem 0'
        }}
      >
        <div className="container" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div style={{ maxWidth: '650px' }}>
            <div className="eyebrow" style={{ color: 'var(--accent-gold)' }}>मुख्य पृष्ठ / उपक्रम</div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>
              उपक्रम आणि कार्यक्रम
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, lineHeight: 1.6 }}>
              विद्यार्थ्यांच्या सर्वांगीण विकासासाठी शाळेमध्ये विविध शैक्षणिक, सांस्कृतिक, क्रीडा आणि सामाजिक उपक्रमांचे आयोजन केले जाते.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}>
        {/* ───── Category Filters ───── */}
        <div className="activities-filters">
          {categories.map(cat => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* ───── Featured Activities ───── */}
        {featuredEvents.length > 0 && (
          <section className="activities-section">
            <h2 className="section-title-m">⭐ ठळक उपक्रम</h2>
            <p className="section-subtitle">शाळेतील काही विशेष उपक्रमांची झलक</p>

            <div className="featured-layout">
              {/* Large card with slideshow */}
              {mainEvent && (
                <div className="featured-main-card" onClick={() => openLightbox(mainEvent)}>
                  <div
                    className="featured-img-wrapper slideshow-container"
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {/* All images stacked, only active one visible */}
                    {slideImages.map((img, i) => (
                      <img
                        key={i}
                        src={img}
                        alt={`${mainEvent.title} - ${i + 1}`}
                        className={`slideshow-img ${i === slideIdx ? 'active' : ''}`}
                        loading={i === slideIdx ? 'eager' : 'lazy'}
                      />
                    ))}

                    {/* Navigation arrows */}
                    {slideImages.length > 1 && (
                      <>
                        <button
                          className="slide-arrow slide-arrow-left"
                          onClick={() => handleManualNav(prevSlide)}
                          aria-label="Previous"
                        >
                          <ChevronLeft size={22} />
                        </button>
                        <button
                          className="slide-arrow slide-arrow-right"
                          onClick={() => handleManualNav(nextSlide)}
                          aria-label="Next"
                        >
                          <ChevronRight size={22} />
                        </button>

                        {/* Pagination dots */}
                        <div className="slide-dots">
                          {slideImages.map((_, i) => (
                            <button
                              key={i}
                              className={`slide-dot ${i === slideIdx ? 'active' : ''}`}
                              onClick={() => handleManualNav(() => goToSlide(i))}
                              aria-label={`Image ${i + 1}`}
                            />
                          ))}
                        </div>
                      </>
                    )}
                  </div>
                  <div className="featured-card-body" onClick={() => openLightbox(mainEvent)}>
                    <span className="category-pill">{mainEvent.category}</span>
                    <h3>{mainEvent.title}</h3>
                    <span className="photo-count-label">{mainEvent.images.length} छायाचित्रे</span>
                    <button className="view-more-navy">अधिक पहा →</button>
                  </div>
                </div>
              )}

              {/* Two small cards */}
              <div className="featured-side">
                {[1, 2].map(idx =>
                  featuredEvents[idx] && (
                    <div key={idx} className="featured-small-card" onClick={() => openLightbox(featuredEvents[idx])}>
                      <div className="featured-small-img">
                        <img src={featuredEvents[idx].cover} alt={featuredEvents[idx].title} loading="lazy" />
                      </div>
                      <div className="featured-card-body">
                        <span className="category-pill">{featuredEvents[idx].category}</span>
                        <h3>{featuredEvents[idx].title}</h3>
                        <span className="photo-count-label">{featuredEvents[idx].images.length} छायाचित्रे</span>
                        <button className="view-more-navy">अधिक पहा →</button>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
          </section>
        )}

        {/* ───── Recent Activities ───── */}
        {recentEvents.length > 0 && (
          <section className="activities-section">
            <h2 className="section-title-m">नुकतेच झालेले उपक्रम</h2>
            <p className="section-subtitle">शाळेतील विविध उपक्रम आणि कार्यक्रम</p>

            <div className="recent-grid">
              {recentEvents.map((event, idx) => (
                <div key={idx} className="recent-card" onClick={() => openLightbox(event)}>
                  <div className="card-img-wrapper">
                    <img src={event.cover} alt={event.title} loading="lazy" />
                    <span className="absolute-badge">{event.category}</span>
                  </div>
                  <div className="card-content-m">
                    <h4>{event.title}</h4>
                    <span className="photo-count-label">{event.images.length} छायाचित्रे</span>
                    <button className="view-more-text">अधिक पहा →</button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ───── Memory Gallery ───── */}
        {memoryEvents.length > 0 && (
          <section className="activities-section">
            <h2 className="section-title-m">आमच्या आठवणी</h2>
            <p className="section-subtitle">शाळेतील विविध क्षण आणि आठवणी</p>

            <div className="masonry-gallery">
              {memoryEvents.map((event, idx) => (
                <div key={idx} className={`masonry-item item-${idx % 5}`} onClick={() => openLightbox(event)}>
                  <img src={event.cover} alt={event.title} loading="lazy" />
                  <div className="masonry-overlay">
                    <span className="category-badge">{event.category}</span>
                    <h4>{event.title}</h4>
                    {event.images.length > 1 && (
                      <span className="photo-count">+{event.images.length - 1} आणखी फोटो</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* ───── Empty State ───── */}
        {allEvents.length === 0 && (
          <div className="empty-state">
            <p>या विभागातील उपक्रमांची माहिती लवकरच उपलब्ध होईल.</p>
          </div>
        )}
      </div>

      {/* ───── Lightbox ───── */}
      {lightbox.open && (
        <div className="lightbox-overlay" onClick={closeLightbox}>
          <div className="lightbox-content" onClick={e => e.stopPropagation()}>
            <button className="lightbox-close" onClick={closeLightbox}><X size={32} /></button>
            <button className="lightbox-nav nav-prev" onClick={prevImage}><ChevronLeft size={48} /></button>
            <div className="lightbox-image-container">
              <img src={lightbox.images[lightbox.index]} alt="Gallery view" />
            </div>
            <button className="lightbox-nav nav-next" onClick={nextImage}><ChevronRight size={48} /></button>
            <div className="lightbox-footer">
              <div className="lightbox-title">{lightbox.title}</div>
              <div className="lightbox-counter">{lightbox.index + 1} / {lightbox.images.length}</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activities;
