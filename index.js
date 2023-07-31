/**
* Archivo para iniciar la aplicacion
*
*/

// Dependencias
const server = require("./libs/server");
// Incializar el objeto principal

var app = {};

app.init = function(){
  server.init();
}
 
app.init();

module.exports = app;
