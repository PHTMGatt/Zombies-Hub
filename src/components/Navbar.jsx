// src/components/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Zombies Hub</h1>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/allmaps">Map List</Link>
        <Link to="/eemaps">EE Maps</Link>
        <a
          href="https://one2-react-portfolio.onrender.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact
        </a>
      </div>

      <div className="toggle-wrapper">
        <ThemeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
