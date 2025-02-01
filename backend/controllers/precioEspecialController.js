// controllers/precioEspecialController.js
const PrecioEspecial = require('../models/PrecioEspecial');

// Obtener todos los precios especiales
exports.getPreciosEspeciales = async (req, res) => {
  try {
    const preciosEspeciales = await PrecioEspecial.find();
    res.json(preciosEspeciales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Agregar un nuevo precio especial
exports.addPrecioEspecial = async (req, res) => {
  const { usuarioId, productoId, precioEspecial } = req.body;

  // Validar que los campos obligatorios estén presentes
  if (!usuarioId || !productoId || !precioEspecial) {
    return res.status(400).json({ message: 'Todos los campos son obligatorios' });
  }

  try {
    const nuevoPrecioEspecial = new PrecioEspecial({ usuarioId, productoId, precioEspecial });
    await nuevoPrecioEspecial.save();
    res.status(201).json(nuevoPrecioEspecial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Obtener precios especiales por usuarioId
exports.getPreciosEspecialesByUsuarioId = async (req, res) => {
  try {
    const preciosEspeciales = await PrecioEspecial.find({ usuarioId: req.params.usuarioId });
    res.json(preciosEspeciales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};