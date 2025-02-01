// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Tienda</h1>
        <ul className="nav-links">
          <li>
            <Link to="/articulos" className="nav-item">Artículos</Link>
          </li>
          <li>
            <Link to="/subida" className="nav-item">Subida</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
