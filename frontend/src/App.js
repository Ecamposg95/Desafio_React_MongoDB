// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Articulos from './pages/Articulos';
import Subida from './pages/Subida';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/subida" element={<Subida />} />
      </Routes>
    </Router>
  );
}

export default App;