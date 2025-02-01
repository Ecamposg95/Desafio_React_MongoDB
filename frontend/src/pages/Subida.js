// src/pages/Subida.js
import React, { useState } from 'react';
import axios from 'axios';
import './Subida.css';

const Subida = () => {
  const [usuarioId, setUsuarioId] = useState('');
  const [productoId, setProductoId] = useState('');
  const [precioEspecial, setPrecioEspecial] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/api/precios-especiales', {
        usuarioId,
        productoId,
        precioEspecial: Number(precioEspecial),
      });
      alert('Precio especial agregado correctamente');
      console.log(response.data);
      setUsuarioId('');
      setProductoId('');
      setPrecioEspecial('');
    } catch (error) {
      console.error('Error agregando precio especial:', error);
      alert('Error al agregar el precio especial');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="subida-container">
      <h1>Subida de Precios Especiales</h1>
      <form onSubmit={handleSubmit} className="subida-form">
        <input
          type="text"
          placeholder="Usuario ID"
          value={usuarioId}
          onChange={(e) => setUsuarioId(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Producto ID"
          value={productoId}
          onChange={(e) => setProductoId(e.target.value)}
          required
        />
        <input
          type="number"
          placeholder="Precio Especial"
          value={precioEspecial}
          onChange={(e) => setPrecioEspecial(e.target.value)}
          required
        />
        <button type="submit" disabled={loading}>{loading ? 'Agregando...' : 'Agregar'}</button>
      </form>
    </div>
  );
};

export default Subida;