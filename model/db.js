const { Pool } = require('pg');

// Configuración de la conexión a PostgreSQL
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'series_db',
    password: 'ginno',
    port: 5432
});

// Exportar el pool para ser reutilizado
module.exports = pool;
