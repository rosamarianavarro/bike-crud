let mysql = require('mysql');

let con = mysql.createConnection( 
    {
    host: 'localhost',
    user: 'root',
    password: '12345678', //en Windows: contrasena vacia
    database: 'bikedb'
    } 
);

module.exports = con;