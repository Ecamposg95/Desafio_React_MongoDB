// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Tienda REAC_MongoDB</h2>
      <ul className="nav-links">
        <li><Link to="/dashboard">Dashboard</Link></li>
        <li><Link to="/articulos">Artículos</Link></li>
        <li><Link to="/subida">Subida</Link></li>
        <li><Link to="/calendar">Calendar</Link></li>

      </ul>
    </div>
  );
};

export default Navbar;
