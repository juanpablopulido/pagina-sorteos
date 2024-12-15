const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Crear la aplicación Express
const app = express();

// Middleware
app.use(cors({ origin: '*' }));  // Permite solicitudes de cualquier origen
app.use(bodyParser.json());

// Ruta POST para el registro
app.post('/register', (req, res) => {
  const { name, address, phone } = req.body;
  if (!name || !address || !phone) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }
  return res.status(200).json({ message: 'Registro exitoso.' });
});

// Esta exportación es lo que Vercel espera de una función serverless
module.exports = (req, res) => {
  // Redirige las solicitudes a la aplicación Express
  app(req, res);
};
