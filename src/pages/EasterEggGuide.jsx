// src/pages/EasterEggGuide.jsx
import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import guides from '../data/EasterEggGuides';
import ComingSoon from './ComingSoon';
import '../styles/compStyles/EggGuideCard.css';

export default function EasterEggGuide() {
  const { slug } = useParams();
  const guide = guides.find(g => g.slug === slug);

  // If no matching guide, redirect to "Coming Soon"
  if (!guide) return <Navigate to="/coming-soon" replace />;

  // Helper: Extract embeddable YouTube link
  const extractEmbedUrl = (url) => {
    const match = url.match(/(?:\?v=|\/embed\/|\.be\/)([a-zA-Z0-9_-]{11})/);
    return match ? `https://www.youtube.com/embed/${match[1]}` : null;
  };

  const embedUrl = guide.videoUrl ? extractEmbedUrl(guide.videoUrl) : null;

  // Main guide content (video + metadata)
  if (embedUrl) {
    return (
      <div className="egg-card guide-page">
        <div className="egg-card__media">
          <iframe
            src={embedUrl}
            title={guide.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            frameBorder="0"
            width="100%"
            height="400"
            style={{ borderRadius: '8px' }}
          />
        </div>

        <div className="egg-card__body">
          <h1>{guide.title}</h1>
          <div className="egg-card__meta">
            <span><strong>Game:</strong> {guide.game}</span>
            <span><strong>DLC:</strong> {guide.dlc}</span>
            <span><strong>Released:</strong> {guide.released}</span>
          </div>
          <p>{guide.description}</p>

          <Link to="/easter-eggs" className="egg-card__link">
            ← Back to Easter Egg Maps
          </Link>
        </div>
      </div>
    );
  }

  // If no video URL available, fallback
  return <ComingSoon />;
}
