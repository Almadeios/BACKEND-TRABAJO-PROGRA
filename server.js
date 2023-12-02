// server.js
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const morgan = require('morgan');
const seleccionarCategorias = require('./api/seleccionarCategorias');

const app = express();
const port = 3080;


app.use(morgan('dev'));
app.use(morgan('combined'));

app.use(cors({
  origin: 'http://tufrontend.com',  // Reemplaza con la URL de tu frontend
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,  // Habilita el intercambio de cookies a través de dominios
}));

app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());

// Monta la nueva ruta
app.use('/api/seleccionarCategorias', seleccionarCategorias);


app.listen(port, () => {
  console.log(`Server escuchando en el puerto: ${port}`);
});
