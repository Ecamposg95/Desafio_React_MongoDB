const mongoose = require('mongoose');

const precioEspecialSchema = new mongoose.Schema({
  usuarioId: String,
  productoId: String,
  precioEspecial: Number,
});

module.exports = mongoose.model('PrecioEspecial', precioEspecialSchema);