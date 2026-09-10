import React, { useState } from 'react';
import { Image as ImageIcon, X, Maximize2, Sparkles } from 'lucide-react';
import { galleryItems } from '../data/travelData';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Hill Stations', 'Vehicles', 'Coastal', 'Heritage'];

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  return (
    <section id="gallery" className="section-padding" style={{ background: 'rgba(15, 23, 42, 0.4)' }}>
      <div className="container">
        {/* Header */}
        <div className="section-header">
          <div className="section-badge">
            <ImageIcon size={14} />
            <span>Travel Gallery</span>
          </div>
          <h2 className="section-title">
            Glimpses of Beautiful <br />
            <span className="gold-highlight">Routes & Scenic Expeditions</span>
          </h2>
          <p className="section-subtitle">
            Explore authentic moments, scenic routes, and comfortable journeys captured across South India.
          </p>
        </div>

        {/* Categories Tabs */}
        <div className="filter-tabs-wrapper">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`tab-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="gallery-grid">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="gallery-card"
              onClick={() => setSelectedImage(item)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedImage(item)}
              aria-label={`View photo: ${item.title}`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="gallery-card-img"
                loading="lazy"
              />
              <div className="gallery-card-overlay">
                <div className="gallery-card-cat">{item.category}</div>
                <div className="gallery-card-title">{item.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="lightbox-backdrop" onClick={() => setSelectedImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setSelectedImage(null)}
              aria-label="Close Lightbox"
            >
              <X size={20} />
            </button>
            <img
              src={selectedImage.image}
              alt={selectedImage.title}
              className="lightbox-img"
            />
            <div className="lightbox-caption">
              <div>
                <h4 style={{ fontSize: '1.1rem', color: '#FFFFFF', marginBottom: '4px' }}>
                  {selectedImage.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#94A3B8', margin: 0 }}>
                  {selectedImage.caption}
                </p>
              </div>
              <span className="section-badge emerald" style={{ margin: 0 }}>
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
