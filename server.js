const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Servir archivos estáticos desde la carpeta "public"
app.use(express.static('public'));

app.use(bodyParser.json());
app.use(cors());

// Ruta de la API
app.post('/register', (req, res) => {
    const { name, address, phone } = req.body;
    if (!name || !address || !phone) {
        return res.status(400).json({ error: 'Todos los campos son obligatorios.' });
    }
    return res.status(200).json({ message: 'Registro exitoso.' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
