const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Crear la aplicación Express
const app = express();

// Configuración de CORS
const corsOptions = {
  origin: 'https://pagina-sorteos.vercel.app', // Permitir solo este origen (tu frontend)
  methods: ['GET', 'POST', 'OPTIONS'], // Métodos permitidos
  allowedHeaders: ['Content-Type', 'Authorization'], // Encabezados permitidos
};

// Aplicar CORS a todas las rutas
app.use(cors(corsOptions));

// Middleware
app.use(bodyParser.json());

// Manejador explícito para las solicitudes OPTIONS
app.options('/register', cors(corsOptions));  // Responde a la solicitud OPTIONS

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
