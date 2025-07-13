import React from 'react'
import mapData from '../data/mapData'
import mapInfo from '../data/mapInfo'
import MapCard from '../components/MapCard'
import '../styles/Maps.css'

export default function AllMaps() {
  return (
    <div className="maps-wrapper">
      <h1 className="page-title">All Zombies Maps</h1>
      <p className="page-subtitle">
        Full list from BO1 – BO3 with DLC & Easter Egg status
      </p>

      {["Black Ops 1", "Black Ops 2", "Black Ops 3"].map((game) => {
        const section = mapData
          .filter((m) => m.game === game)
          .map((m) => {
            // derive slug if it doesn’t already exist
            const slug = m.slug || m.name.toLowerCase().replace(/\s+/g, '-')
            return {
              ...m,
              slug,
              // bring in the Easter-egg flag (if you want to show that in map-details)
              hasEasterEgg: mapInfo[slug]?.hasEasterEgg || false,
            }
          })

        return (
          <section className="game-section" key={game}>
            <div className="game-header">
              <span className="game-title">{game}</span>
            </div>
            <div className="maps-grid">
              {section.map((m) => (
                // NO showLore prop: cards stay image-only
                <MapCard key={m.slug} map={m} />
              ))}
            </div>
          </section>
        )
      })}
    </div>
  )
}
