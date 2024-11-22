//------Archivo principal------//
const express = require('express');
const app = express();
const { Pool } = require('pg');
const puerto = 3000;

// ------ Configuración del motor de vistas ------ //
app.set('view engine', 'ejs'); //---Indica a Express que use EJS como motor de vistas
app.set('views', './views'); //---Establece la carpeta donde están LAS plantillas


//------Middleware para leer JSON------//
app.use(express.json()); // Permite manejar solicitudes con datos en formato JSON

//------Rutas Principales------//
app.use('', require('./controller/routes'))
// Aquí se importa las rutas definidas en './controller/routes'
// Esto indica que todas las rutas definidas en ese archivo estarán disponibles desde la raíz del servidor ('/').

//-----Servidor definido en el puerto correspondiente------//
app.listen(puerto, () => {
    console.log(`Servidor escuchando en http://localhost:${puerto}.`);
});
