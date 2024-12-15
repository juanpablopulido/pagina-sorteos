const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const corsOptions = {
  origin: '*', // Permite cualquier origen (ajústalo si es necesario)
  methods: ['GET', 'POST', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
};

app.use(cors(corsOptions));
// Crear la aplicación Express
const app = express();

// Middleware: Permitir solicitudes de cualquier origen
app.use(bodyParser.json());

// Manejador explícito para las solicitudes OPTIONS
app.options('/register', cors(corsOptions));  // Responde a la solicitud OPTIONS para la ruta /register

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
