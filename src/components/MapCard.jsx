import React, { useState } from 'react';
import '../styles/MapCard.css';

export default function MapCard({
  name,
  dlc,
  coverImage,
  layoutImage,
  hoverImage,
}) {
  const [cardHover, setCardHover] = useState(false);
  const [dlcHover, setDlcHover]   = useState(false);

  // pick which URL to use
  let bg = coverImage;
  if (cardHover && layoutImage) bg = layoutImage;
  if (dlcHover  && hoverImage)  bg = hoverImage;

  return (
    <div
      className="map-card"
      onMouseEnter={() => setCardHover(true)}
      onMouseLeave={() => {
        setCardHover(false);
        setDlcHover(false);
      }}
    >
      {/* 1️⃣ Blurred background layer */}
      <div
        className="bg-blur"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* 2️⃣ Main image layer */}
      <div
        className="bg-main"
        style={{ backgroundImage: `url(${bg})` }}
      />

      {/* 3️⃣ Text & DLC */}
      <div className="map-info">
        <h3>{name}</h3>
        <p
          className="map-dlc"
          onMouseEnter={() => setDlcHover(true)}
          onMouseLeave={() => setDlcHover(false)}
        >
          {dlc}
        </p>
      </div>

      {/* 4️⃣ Link icon */}
      <div className="map-icon">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M14 3h7v7h-2V6.41l-9.29 9.3..." />
          <path d="M5 5h5V3H5c-1.1 0-2 .9-2 2v5h2V5z" />
          <path d="M19 19h-5v2h5c1.1 0 2-.9 2-2v-5h-2v5z" />
          <path d="M5 19v-5H3v5c0 1.1.9 2 2 2h5v-2H5z" />
        </svg>
      </div>
    </div>
  );
}
