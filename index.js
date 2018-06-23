//import web server app
let app = require('./app');

//import web server routes:
let routes = require('./routes');

//start server:
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server has been started: http://localhost:${PORT}/`);
})