import React, { useEffect } from 'react';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

import Navbar    from './components/Navbar';
import Footer    from './components/Footer';
import AppRoutes from './Routes';

function AppContent() {
  const { pathname } = useLocation();

  // Toggle body class for full-screen iframe maps
  const isMapPage = pathname.startsWith('/maps/');

  useEffect(() => {
    document.documentElement.classList.toggle('map-page', isMapPage);
  }, [isMapPage]);

  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <AppRoutes />
      </main>

      {/* Hide footer on full-map render pages */}
      {!isMapPage && <Footer />}
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
