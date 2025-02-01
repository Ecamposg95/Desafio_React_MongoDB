// routes/productoRoutes.js
const express = require('express');
const productoController = require('../controllers/productoController');

const router = express.Router();

// Definir rutas
router.get('/', productoController.getProductos); // Obtener todos los productos
router.get('/:id', productoController.getProductoById); // Obtener un producto por ID

module.exports = router;