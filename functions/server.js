const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(bodyParser.json());

// Definir las rutas de la API
app.post('/register', (req, res) => {
  const { name, address, phone } = req.body;
  if (!name || !address || !phone) {
    return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
  }
  return res.status(200).json({ message: 'Registro exitoso.' });
});

// Exportar como función serverless para Netlify
module.exports.handler = serverless(app);
