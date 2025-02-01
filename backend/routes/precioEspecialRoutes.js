const express = require('express');
const precioEspecialController = require('../controllers/precioEspecialController');

const router = express.Router();

router.get('/precios-especiales', precioEspecialController.getPreciosEspeciales);
router.post('/precios-especiales', precioEspecialController.addPrecioEspecial);
router.get('/precios-especiales/:usuarioId', precioEspecialController.getPreciosEspecialesByUsuarioId);

module.exports = router;