import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../styles/MapCard.css'

export default function MapCard({ map, isPreview = true }) {
  const {
    name,
    dlc,
    coverImage,
    layoutImage,
    hoverImage,
    slug,
  } = map

  const [cardHover, setCardHover] = useState(false)
  const [dlcHover,  setDlcHover]  = useState(false)

  // decide which background image to show
  let bg = coverImage
  if (cardHover && layoutImage) bg = layoutImage
  if (dlcHover  && hoverImage ) bg = hoverImage

  // always link to the detail page
  const to = `/info/${slug}`

  return (
    <Link
      to={to}
      className={`map-card ${isPreview ? 'preview-card' : 'lore-card'}`}
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => {
        setCardHover(false)
        setDlcHover(false)
      }}
    >
      <div className="bg-blur" style={{ backgroundImage: `url(${bg})` }} />
      <div className="bg-main" style={{ backgroundImage: `url(${bg})` }} />

      <div className="map-info">
        <h3>{name}</h3>
        <p
          className="map-dlc"
          onMouseEnter={e => { e.stopPropagation(); setDlcHover(true) }}
          onMouseLeave={e => { e.stopPropagation(); setDlcHover(false) }}
        >
          {dlc}
        </p>
      </div>
    </Link>
  )
}
