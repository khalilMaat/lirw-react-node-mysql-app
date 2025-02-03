const mysql = require('mysql2');
require('dotenv').config();

const host = process.env.DB_HOST || 'primary-db-instance.c7q8kyusk6qi.us-east-1.rds.amazonaws.com';
const port = process.env.DB_PORT || '3306';
const user = process.env.DB_USER || 'appuser';
const password = process.env.DB_PASSWORD || 'appuser';
const database = process.env.DB_NAME || 'react_node_app';

const db = mysql.createConnection({
   host: host,
   port: port,
   user: user,
   password: password,
   database: database,
   waitForConnections: true,
   connectionLimit: 20,
   queueLimit: 0,
   connectTimeout: 10000 // 10 seconds
});



module.exports = db;
