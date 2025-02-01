// src/pages/Articulos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Articulos = () => {
  const [productos, setProductos] = useState([]);
  const [preciosEspeciales, setPreciosEspeciales] = useState([]);

  // Obtener productos y precios especiales
  useEffect(() => {
    const fetchData = async () => {
      try {
        const productosResponse = await axios.get('http://localhost:5000/api/productos');
        const preciosEspecialesResponse = await axios.get('http://localhost:5000/api/precios-especiales');
        setProductos(productosResponse.data);
        setPreciosEspeciales(preciosEspecialesResponse.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  // Función para obtener el precio especial de un producto para un usuario específico
  const obtenerPrecioEspecial = (productoId) => {
    const precioEspecial = preciosEspeciales.find((precio) => precio.productoId === productoId);
    return precioEspecial ? precioEspecial.precioEspecial : null;
  };

  return (
    <div>
      <h1>Artículos</h1>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Precio Especial</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto._id}>
              <td>{producto.name}</td>
              <td>{producto.price}</td>
              <td>{obtenerPrecioEspecial(producto._id) || 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articulos;