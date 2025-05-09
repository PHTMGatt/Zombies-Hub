import React from 'react'
import { Link } from 'react-router-dom'
import featuredMaps from '../data/featuredMaps'
import '../styles/Home.css'

export default function Home() {
  return (
    <section className="home">
      <h1 className="home-title">The Multiverse Is Fractured</h1>
      <p className="home-subtitle">Choose your entry point.</p>

      <div className="home-grid">
        {featuredMaps.map(({ name, renderLink, image }) => {
          const isFeatured = name === 'All Maps'
          return (
            <Link
              key={name}
              to={renderLink}
              className={`card neon${isFeatured ? ' featured' : ''}`}
              style={{ backgroundImage: `url(${image})` }}
            >
              <div className="overlay" />
              <div className="card-title">{name}</div>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
