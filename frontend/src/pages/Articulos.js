// src/pages/Articulos.js 
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './Articulos.css';

const Articulos = () => {
  const [productos, setProductos] = useState([]);
  const [preciosEspeciales, setPreciosEspeciales] = useState([]);

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

  const obtenerPrecioEspecial = (productoId) => {
    const precioEspecial = preciosEspeciales.find((precio) => precio.productoId === productoId);
    return precioEspecial ? precioEspecial.precioEspecial : 'N/A';
  };

  return (
    <div className="articulos-container">
      <h1>Artículos</h1>
      <table className="articulos-table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Precio Especial</th>
            <th>Categoría</th>
            <th>Stock</th>
            <th>Descripción</th>
            <th>Marca</th>
            <th>SKU</th>
            <th>Etiquetas</th>
            <th>Creado en</th>
            <th>Actualizado en</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => (
            <tr key={producto._id}>
              <td>{producto.name}</td>
              <td>${producto.price.toFixed(2)}</td>
              <td>${obtenerPrecioEspecial(producto._id)}</td>
              <td>{producto.category}</td>
              <td>{producto.stock}</td>
              <td>{producto.description}</td>
              <td>{producto.brand}</td>
              <td>{producto.sku}</td>
              <td>{producto.tags.join(', ')}</td>
              <td>{new Date(producto.createdAt).toLocaleDateString()}</td>
              <td>{new Date(producto.updatedAt).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Articulos;
