import React from 'react';
import mapData from '../data/mapData';
import MapCard from '../components/MapCard';
import '../styles/Maps.css';

export default function AllMaps() {
  return (
    <div className="maps-wrapper">
      <h1 className="page-title">All Zombies Maps</h1>
      <p className="page-subtitle">
        Full list from BO1 – BO3 with DLC & Easter Egg status
      </p>

      {["Black Ops 1","Black Ops 2","Black Ops 3"].map((game) => {
        const section = mapData.filter(m => m.game === game);
        return (
          <section className="game-section" key={game}>
            <div className="game-header">
              <span className="game-title">{game}</span>
            </div>
            <div className="maps-grid">
              {section.map(m => (
                <MapCard
                  key={m.name}
                  name={m.name}
                  dlc={m.dlc}
                  coverImage={m.coverImage}
                  layoutImage={m.layoutImage}
                  hoverImage={m.hoverImage}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
