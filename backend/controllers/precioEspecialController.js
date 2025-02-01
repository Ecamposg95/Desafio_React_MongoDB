const PrecioEspecial = require('../models/PrecioEspecial');

exports.getPreciosEspeciales = async (req, res) => {
  try {
    const preciosEspeciales = await PrecioEspecial.find();
    res.json(preciosEspeciales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.addPrecioEspecial = async (req, res) => {
  const { usuarioId, productoId, precioEspecial } = req.body;

  try {
    const nuevoPrecioEspecial = new PrecioEspecial({ usuarioId, productoId, precioEspecial });
    await nuevoPrecioEspecial.save();
    res.status(201).json(nuevoPrecioEspecial);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getPreciosEspecialesByUsuarioId = async (req, res) => {
  try {
    const preciosEspeciales = await PrecioEspecial.find({ usuarioId: req.params.usuarioId });
    res.json(preciosEspeciales);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};