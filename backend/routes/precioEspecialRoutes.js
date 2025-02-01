// routes/precioEspecialRoutes.js
const express = require('express');
const precioEspecialController = require('../controllers/precioEspecialController');

const router = express.Router();

// Definir rutas
router.get('/', precioEspecialController.getPreciosEspeciales); // Obtener todos los precios especiales
router.post('/', precioEspecialController.addPrecioEspecial); // Agregar un nuevo precio especial
router.get('/:usuarioId', precioEspecialController.getPreciosEspecialesByUsuarioId); // Obtener precios especiales por usuarioId

module.exports = router;