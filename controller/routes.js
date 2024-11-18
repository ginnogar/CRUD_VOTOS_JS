const express = require("express");
const router = express.Router();
const pool = require('../model/db'); // Importamos el pool desde el archivo db.js

//------Ruta de inicio para la página principal------//
router.get('/', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM series');
        const peliculas = result.rows;
        res.render('index', { peliculas });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('ERROR al obtener las series.');
    }
});

router.post('/serie', async (req, res) => {
    const { serie, enlace } = req.body;

    if (!serie || !enlace) {
        return res.status(400).json({ error: 'ERROR. Se deben ingresar todos los datos.' });
    }

    try {
        const result = await pool.query(
            'INSERT INTO series (serie, enlace) VALUES($1, $2) RETURNING *',
            [serie, enlace]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('ERROR. No se pudo agregar la película.');
    }
});

router.put('/voto', (req, res) => {});

router.delete('/delete', (req, res) => {});

router.put('/modificar', (req,res) => {}); //Para modificar los titulos 

module.exports = router;
