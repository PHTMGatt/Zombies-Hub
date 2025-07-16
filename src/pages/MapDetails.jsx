// src/pages/MapDetails.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import MapsHubHeader from '../components/MapsHubHeader'
import featuredMaps from '../data/featuredMaps'
import guides from '../data/EasterEggGuides'
import ComingSoon from './ComingSoon'
import '../styles/pageStyles/MapDetails.css'

export default function MapDetails() {
  const { slug } = useParams()

  // 1) Try to find a featured map with a renderLink
  const map = featuredMaps.find(m => m.slug === slug)
  if (map?.renderLink) {
    return (
      <>
        <MapsHubHeader
          title={map.name}
          subtitle={`${map.name} Guide`}
        />
        <div className="iframe-container">
          <iframe
            src={map.renderLink}
            title={map.name}
            className="map-iframe"
            allowFullScreen
          />
        </div>
      </>
    )
  }

  // 2) Fallback to internal video guide (if available)
  const guide = guides.find(g => g.slug === slug)
  if (guide?.videoUrl) {
    return (
      <>
        <MapsHubHeader
          title={guide.title}
          subtitle={`${guide.title} Guide`}
        />
        <div className="iframe-container">
          <video
            src={guide.videoUrl}
            controls
            className="map-iframe"
          />
        </div>
        <Link to="/easter-eggs" className="back-link">
          ← Back to Easter Egg Maps
        </Link>
      </>
    )
  }

  // 3) No match → Coming Soon fallback
  return <ComingSoon />
}
