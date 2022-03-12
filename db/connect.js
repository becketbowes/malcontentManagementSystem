const mysql = require('mysql2');
const cTable = require('console.table');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'sql121!!',
    database: 'malcontentManagementSystem'
});

module.exports = db;

