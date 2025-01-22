const mysql = require('mysql2');
require('dotenv').config();

const host = process.env.DB_HOST || 'localhost';
const port = process.env.DB_PORT || '3306';
const user = process.env.DB_USER || 'appuser';
const password = process.env.DB_PASSWORD || 'appuser';
const database = process.env.DB_NAME || 'react_node_app';

const db = mysql.createConnection({
   host: 'localhost',
   port: '3306',
   user: 'appuser',
   password: 'appuser',
   database: 'react_node_app',
   waitForConnections: true,
   connectionLimit: 10,
   queueLimit: 0
});



module.exports = db;
