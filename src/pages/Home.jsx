// src/pages/Home.jsx
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import featuredMaps from '../data/featuredMaps'
import mapData      from '../data/mapData'
import '../styles/Home.css'

export default function Home() {
  useEffect(() => {
    // combine both sets
    const allMaps = [
      ...featuredMaps,
      ...mapData.map((m) => ({
        // mapData entries may use renderUrl instead of renderLink
        renderLink: m.renderUrl || m.renderLink || null,
        slug:       m.slug,
      })),
    ]

    allMaps.forEach(({ slug, renderLink }) => {
      // only ping external URLs
      if (slug && renderLink && renderLink.startsWith('http')) {
        fetch(renderLink, { mode: 'no-cors' }).catch(() => {
          // ignore errors
        })
      }
    })
  }, [])

  return (
    <section className="home">
      <h1 className="home-title">The Multiverse Is Fractured</h1>
      <p className="home-subtitle">Choose your entry point.</p>

      <div className="home-grid">
        {featuredMaps.map(({ name, slug, renderLink, image }) => {
          const to = slug ? `/maps/${slug}` : renderLink
          const isFeatured = name === 'All Maps'

          return (
            <Link
              key={name}
              to={to}
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
