// server.js
const app = require('./app'); // Importar la aplicación configurada en app.js
const PORT = process.env.PORT || 5000; // Definir el puerto del servidor

// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});