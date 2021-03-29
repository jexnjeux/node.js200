const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '1234',
    database: 'comicbook',
    port: '3306'
});

connection.connect();

connection.query('SELECT * from books', (error, result, fields) => {
    if (error) throw error;
    console.log(result)
});

connection.end();