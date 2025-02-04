const mysql = require('mysql2');
require('dotenv').config();

const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const user = process.env.DB_USER;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_NAME;

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
