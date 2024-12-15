const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Crear la aplicación Express
const app = express();

// Configuración de CORS
const corsOptions = {
  origin: '*', // Permite cualquier origen (ajústalo si es necesario)
  methods: '*', // Métodos permitidos
  allowedHeaders: '*', // Encabezados permitidos
};

// Middleware
app.use(cors(corsOptions)); // Aplica CORS globalmente
app.use(bodyParser.json()); // Para parsear cuerpos JSON

// Ruta POST para el registro
app.post('/register', (req, res) => {
  const { name, address, phone } = req.body;
  if (!name || !address || !phone) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }
  return res.status(200).json({ message: 'Registro exitoso.' });
});

// Manejador explícito para las solicitudes OPTIONS (si es necesario para CORS)
app.options('/register', cors(corsOptions)); // Permite solicitudes OPTIONS para CORS

// Exporta la función de Express como un handler serverless
module.exports = (req, res) => {
  // Redirige las solicitudes a la aplicación Express
  app(req, res);
};
