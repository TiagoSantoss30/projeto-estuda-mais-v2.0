const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
});

// Agora exportamos um objeto com dois métodos:
// 'query' para consultas simples e 'connect' para iniciar transações.
module.exports = {
    query: (text, params) => pool.query(text, params),
    connect: () => pool.connect(),
};