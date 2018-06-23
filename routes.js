//import web server app
let app = require('./app');

//import mysql db connection
let con = require('./mysqlcon');

/* Before connecting to a DB, make sure to check mysqlcon.js */
/*
con.connect( err => {
    if (err) throw err;
    console.log("Connected to DB");
  });
*/

//root route:
app.get('/', (req, res) => {
    res.send("Hola")
})

app.post('/addUser', (req, res) => {
    console.log("Soy el servidor y me siento obligado a guardar en la DB:");
    console.log(req.body);
});