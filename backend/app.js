// app.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Importar rutas
const productoRoutes = require('./routes/productoRoutes');
const precioEspecialRoutes = require('./routes/precioEspecialRoutes');

// Crear una instancia de Express
const app = express();

// Middleware
app.use(cors()); // Permitir solicitudes desde el frontend
app.use(express.json()); // Parsear el cuerpo de las solicitudes como JSON

// Conexión a MongoDB
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://drenviochallenge:m1jWly3uw42cBwp6@drenviochallenge.2efc0.mongodb.net/tienda';
mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a MongoDB'))
  .catch(err => console.error('Error al conectar a MongoDB:', err));

// Registrar rutas
app.use('/api/productos', productoRoutes); // Rutas para productos
app.use('/api/precios-especiales', precioEspecialRoutes); // Rutas para precios especiales

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('¡Backend funcionando correctamente!');
});

// Manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Algo salió mal en el servidor' });
});

// Exportar la aplicación para su uso en server.js
module.exports = app;