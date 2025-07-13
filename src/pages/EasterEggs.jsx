// src/pages/EasterEggMaps.jsx
import React from 'react'
import mapData from '../data/mapData'
import MapCard from '../components/MapCard'
import '../styles/Maps.css'

export default function EasterEggMaps() {
  return (
    <div className="maps-wrapper">
      <h1 className="page-title">Easter Egg Maps</h1>
      <p className="page-subtitle">
        All Easter Eggs BO1–BO3
      </p>

      {["Black Ops 1", "Black Ops 2", "Black Ops 3"].map((game) => {
        const ee = mapData.filter(m => m.game === game && m.isEasterEgg)
        if (!ee.length) return null

        return (
          <section className="game-section" key={game}>
            <div className="game-header">
              <span className="game-title">{game}</span>
            </div>
            <div className="maps-grid">
              {ee.map(m => (
                <MapCard
                  key={m.slug || m.name}
                  map={m}
                />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
