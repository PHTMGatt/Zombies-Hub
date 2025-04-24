// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import AllMaps from './pages/AllMaps';
import EasterEggs from './pages/EasterEggs';
import MapDetails from './pages/MapDetails';

import './styles/Global.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/allmaps" element={<AllMaps />} />
            <Route path="/eemaps" element={<EasterEggs />} />
            <Route path="/map/:id" element={<MapDetails />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
