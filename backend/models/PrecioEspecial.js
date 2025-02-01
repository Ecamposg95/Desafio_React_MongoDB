const mongoose = require('mongoose');

const precioEspecialSchema = new mongoose.Schema({
  usuarioId: { type: String, required: true }, // ID del usuario con precio especial
  productoId: { type: String, required: true }, // ID del producto
  precioEspecial: { type: Number, required: true }, // Precio especial para el usuario
  createdAt: { type: Date, default: Date.now }, // Fecha de creación
  updatedAt: { type: Date, default: Date.now }, // Fecha de actualización
});

module.exports = mongoose.model('PrecioEspecial', precioEspecialSchema, 'preciosEspecialesCampos7');