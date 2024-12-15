const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.post('/register', (req, res) => {
    const { name, address, phone } = req.body;

    if (!name || !address || !phone) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }

    return res.status(200).json({ message: 'Registro exitoso.' });
});

module.exports.handler = serverless(app);
