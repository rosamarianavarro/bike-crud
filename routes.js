//import web server app
let app = require('./app');

//import mysql db connection
let con = require('./mysqlcon');

con.connect( err => {
    if (err) throw err;
    console.log("Connected to DB");
  });

//root route:
app.get('/', (req, res) => {
    res.send("Hola")
})

app.post('/addUser', (req, res) => {
    
    let nuevoUsuario = req.body;

    let sql = `INSERT INTO user(
                userName, 
                userEmail, 
                userPass) 
                VALUES (
                    '${nuevoUsuario.userName}',
                    '${nuevoUsuario.userEmail}',
                    '${nuevoUsuario.userPass}'
                )`;

    con.query(sql, nuevoUsuario, (err, result) => {
        if(err){
            console.log("Error al insertar: " + err.code);
            } else {
            res.send(
                { "status": "OK"}
            );
        }
        
    });
    
});