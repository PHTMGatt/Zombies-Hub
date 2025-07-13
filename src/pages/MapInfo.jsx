import React from 'react'
import { useParams, Link } from 'react-router-dom'
import mapInfo from '../data/mapInfo'
import mapData from '../data/mapData'
import '../styles/MapInfo.css'

export default function MapInfo() {
  const { slug } = useParams()
  const info = mapInfo[slug]

  // 1) Fallback if no lore
  if (!info) {
    return (
      <div className="map-info-container">
        <div className="map-info-card no-info">
          <h2>Map not found</h2>
          <Link to="/allmaps" className="back-link">
            ← Back to map list
          </Link>
        </div>
      </div>
    )
  }

  // 2) Find matching meta from mapData for banner + rows
  const meta = mapData.find((m) => m.name === info.name) || {}
  const banner = meta.coverImage

  return (
    <div className="map-info-container">
      <div className="map-info-card">
        {/* Banner + white overlay label */}
        {banner && (
          <div className="map-info-banner-container">
            <img
              src={banner}
              alt={info.name}
              className="map-info-banner"
            />
            <div className="map-info-banner-overlay">
              {info.name}
            </div>
          </div>
        )}

        <div className="map-info-details">
          {/* Game / DLC */}
          <div className="info-row">
            {meta.game && <span><strong>Game:</strong> {meta.game}</span>}
            {meta.dlc  && <span><strong>DLC:</strong> {meta.dlc}</span>}
          </div>

          {/* Released + Easter-Egg badge */}
          <div className="info-row">
            <span><strong>Released:</strong> {info.releasedIn}</span>
            {info.hasEasterEgg
              ? <Link to={`/ee/${slug}`} className="badge">🎁 Easter-Egg Inside</Link>
              : <span className="badge no-egg">No Easter-Egg</span>
            }
          </div>

          {/* Full description */}
          <p className="description">{info.description}</p>

          {/* Plain blue back-link */}
          <Link to="/allmaps" className="back-link">
            ← Back to map list
          </Link>
        </div>
      </div>
    </div>
  )
}
