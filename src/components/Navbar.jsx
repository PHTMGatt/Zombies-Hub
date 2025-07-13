// src/components/Navbar.jsx
import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1 className="navbar-title">Zombies Hub</h1>

      <div className="nav-links">
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/allmaps"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Map List
        </NavLink>
        <NavLink
          to="/eemaps"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          EE Maps
        </NavLink>
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
  )
}
