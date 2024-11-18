//------Archivo principal------//
const express = require('express');
const app = express();
const { Pool } = require('pg');
const puerto = 3000;

app.set('view engine', 'ejs'); //---Indica a Express que use EJS como motor de vistas
app.set('views', './views'); //---Establece la carpeta donde están LAS plantillas


//------Middleware para leer JSON------//
app.use(express.json());

app.use('', require('./controller/routes'))

//-----Servidor definido en el puerto correspondiente------//
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}.`);
});
