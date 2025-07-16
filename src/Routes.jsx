// 'src/Routes.jsx'
import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Core Pages
import Home       from './pages/Home';
import AllMaps    from './pages/AllMaps';
import ComingSoon from './pages/ComingSoon';

// Map Details + Info
import MapDetails from './pages/MapDetails';
import MapInfo    from './pages/MapInfo';

// Main Easter Eggs
import EasterEggs     from './pages/EasterEggs';
import EasterEggGuide from './pages/EasterEggGuide';

// Side Easter Eggs
import SideEasterEggList from './pages/SideEasterEggList';
import SideEEInfo         from './pages/SideEEInfo';

export default function AppRoutes() {
  return (
    <Routes>
      {/* Note; Landing Pages */}
      <Route path="/"        element={<Home />} />
      <Route path="/allmaps" element={<AllMaps />} />

      {/* Note; Main Easter Eggs */}
      <Route path="/easter-eggs"       element={<EasterEggs />} />
      <Route path="/easter-eggs/:slug" element={<EasterEggGuide />} />

      {/* Note; Map Pages */}
      <Route path="/maps/:slug" element={<MapDetails />} />
      <Route path="/info/:slug" element={<MapInfo />} />

      {/* Note; Side Easter Eggs */}
      <Route path="/side-easter-eggs"         element={<SideEasterEggList />} />
      <Route path="/side-easter-eggs/:mapKey" element={<SideEEInfo />} />

      {/* Note; Fallback */}
      <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
  );
}
