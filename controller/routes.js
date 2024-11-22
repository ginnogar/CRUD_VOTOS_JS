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

router.put('/voto/:id_serie', async (req, res) => { // Para incrementar los votos
    const { id_serie } = req.params;
    
    if (!id_serie){
        return res.status(400).json({ error: 'ERROR. Se deben ingresar un ID válido.'});
    }

    try {
        const result = await pool.query(
            'UPDATE series SET votos = votos + 1 WHERE id_serie = $1 RETURNING *',
            [id_serie]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'No se encontro la serie con ese id.'});
        }

        res.json(result.rows[0]); // Devuelve la serie actualizada
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Error al votar por la serie.');
    }
});

router.delete('/delete', async (req, res) => {
    const { id_serie } = req.body;

    if (!id_serie) {
        return res.status(400).json({ error: 'ERROR. Se deben ingresar todos los datos.'});
    }
    
    try {
        const result = await pool.query(
            'DELETE FROM series WHERE id_serie = $1 RETURNING *',
            [id_serie]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'No se encontro la serie con ese id.'});
        }

        res.json({ message: 'Serie eliminada exitosamente.', serie: result.rows[0] });
    } catch (err) {
        console.error('Error:', err);
        res.status(500).send('Hubo un error en el servidor al eliminar la serie.');
    }
});

router.put('/modificar', async (req,res) => { //Para modificar los titulos 
    console.log("Datos recibidos en /modificar:", req.body); // Log para depuración
    const { id_serie, serie } = req.body;

    if (!id_serie || !serie) {
        return res.status(400).json({ error: 'ERROR. Se deben proporcionar el id_serie y el nuevo título.'});
    }

    try {
        const result = await pool.query(
            'UPDATE series SET serie = $1 WHERE id_serie = $2 RETURNING *',
            [serie, id_serie]
        );

        if (result.rowCount === 0) {
            return res.status(404).json({ error: 'No se encontró la serie con ese id.' });
        }

        res.json({ message: 'Titulo actualizado exitosamente.', serie: result.rows[0] });
    } catch (err) {
        console.error('Error al actualizar el título:', err);
        res.status(500).send('Error del servidor al actualizar el título de la serie.');
    }
}); 

module.exports = router;
