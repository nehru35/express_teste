// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'banco_teste',
  password: '',
  port: '3306'
});

module.exports = connection