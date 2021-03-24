const mysql = require('mysql');

const connection = mysql.createConnection({
    host:'localhost',
    user: 'root',
    password: '1234',
    database: 'comicbook',
    port: '3306',
});

connection.connect();

connection.query('select * from books', (error, results, feileds) => {
    if (error) throw error;
    console.log(results);
});

connection.query('select number, genre, name, writer, releasedate from books', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
})

connection.query('select * from books where genre = \'action\'', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
})

connection.query('select * from books where genre = \'action\' or genre = \'comedy\'', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
})

connection.query('select * from books where releasedate LIKE \'2017%\'', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
});

connection.query('select number, genre, name, writer, releasedate from books order by releasedate;', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
})

connection.query('select number, genre, name, writer, releasedate from books order by releasedate desc', (error, results, fields) => {
    if (error) throw error;
    console.log(results);
})

connection.end();