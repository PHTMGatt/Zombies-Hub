// src/pages/MapDetails.jsx
import React from 'react'
import { useParams } from 'react-router-dom'
import featuredMaps from '../data/featuredMaps'
import '../styles/MapDetails.css'

export default function MapDetails() {
  const { slug } = useParams()
  const map = featuredMaps.find((m) => m.slug === slug)
  if (!map) return null

  return (
    <div className="iframe-container">
      <iframe
        src={map.renderLink}
        title={map.name}
        className="map-iframe"
      />
    </div>
  )
}
