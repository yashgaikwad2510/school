import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, X, ArrowLeft, Camera } from 'lucide-react';
import { allEvents, categories } from '../data/events';

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState('सर्व');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [lightbox, setLightbox] = useState({ open: false, images: [], index: 0, title: '' });

  // ─── Filtering ───
  const filtered = activeCategory === 'सर्व'
    ? allEvents
    : allEvents.filter(e => e.category === activeCategory);

  // ─── Lightbox controls ───
  const openLightbox = (images, title, idx = 0) => {
    setLightbox({ open: true, images, index: idx, title });
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

  // Scroll to top when selecting/deselecting an event
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [selectedEvent]);

  return (
    <div className="gallery-page">
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
            <div className="eyebrow" style={{ color: 'var(--accent-gold)' }}>मुख्य पृष्ठ / गॅलरी</div>
            <h1 style={{ fontSize: '3.5rem', marginBottom: '1.5rem', color: 'white' }}>
              गॅलरी
            </h1>
            <p style={{ fontSize: '1.25rem', marginBottom: '2.5rem', opacity: 0.9, lineHeight: 1.6 }}>
              शाळेतील विविध उपक्रम, कार्यक्रम आणि अविस्मरणीय क्षणांची चित्रमय झलक.
            </p>
          </div>
        </div>
      </section>

      <div className="container" style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}>

        {/* ───── Album View (when no event selected) ───── */}
        {!selectedEvent && (
          <>
            {/* Filters */}
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

            <section className="activities-section">
              <h2 className="section-title-m">कार्यक्रम आणि उपक्रम</h2>
              <p className="section-subtitle">शाळेतील विविध उपक्रम आणि कार्यक्रमांचे छायाचित्र संग्रह</p>

              <div className="gallery-album-grid">
                {filtered.map((event, idx) => (
                  <div key={idx} className="gallery-album-card" onClick={() => setSelectedEvent(event)}>
                    <div className="album-cover">
                      <img src={event.cover} alt={event.title} loading="lazy" />
                      <div className="album-photo-count">
                        <Camera size={14} />
                        {event.images.length}
                      </div>
                    </div>
                    <div className="album-info">
                      <span className="category-pill">{event.category}</span>
                      <h3>{event.title}</h3>
                      <span className="photo-count-label">{event.images.length} छायाचित्रे</span>
                    </div>
                  </div>
                ))}
              </div>

              {filtered.length === 0 && (
                <div className="empty-state">
                  <p>या विभागातील छायाचित्रे लवकरच उपलब्ध होतील.</p>
                </div>
              )}
            </section>
          </>
        )}

        {/* ───── Event Detail View (when event selected) ───── */}
        {selectedEvent && (
          <section className="activities-section">
            <button className="gallery-back-btn" onClick={() => setSelectedEvent(null)}>
              <ArrowLeft size={18} /> परत गॅलरीकडे
            </button>

            <h2 className="section-title-m" style={{ marginTop: '1.5rem' }}>{selectedEvent.title}</h2>
            <p className="section-subtitle">
              <span className="category-pill">{selectedEvent.category}</span>
              &nbsp;&nbsp;{selectedEvent.images.length} छायाचित्रे
            </p>

            <div className="gallery-photo-grid">
              {selectedEvent.images.map((img, idx) => (
                <div
                  key={idx}
                  className="gallery-photo-item"
                  onClick={() => openLightbox(selectedEvent.images, selectedEvent.title, idx)}
                >
                  <img src={img} alt={`${selectedEvent.title} - ${idx + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </section>
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

export default Gallery;
