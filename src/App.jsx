// src/App.jsx
import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'

import Navbar     from './components/Navbar'
import Footer     from './components/Footer'
import Home       from './pages/Home'
import AllMaps    from './pages/AllMaps'
import EasterEggs from './pages/EasterEggs'
import MapDetails from './pages/MapDetails'
import MapInfo    from './pages/MapInfo' // ← add this!

import './styles/Global.css'

function AppContent() {
  const { pathname } = useLocation()

  const isMapPage  = pathname.startsWith('/maps/')
  const isInfoPage = pathname.startsWith('/info/')

  // enable scroll lock ONLY on <html> for map iframe pages
  useEffect(() => {
    document.documentElement.classList.toggle('map-page', isMapPage)
  }, [isMapPage])

  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <Routes>
          <Route path="/"             element={<Home />} />
          <Route path="/allmaps"      element={<AllMaps />} />
          <Route path="/eemaps"       element={<EasterEggs />} />
          <Route path="/maps/:slug"   element={<MapDetails />} />
          <Route path="/info/:slug"   element={<MapInfo />} /> {/* NEW */}
        </Routes>
      </main>

      {/* Hide footer only on iframe map pages, not lore pages */}
      {!isMapPage && <Footer />}
    </div>
  )
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  )
}
