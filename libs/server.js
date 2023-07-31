/**
* Archivo que tiene la configuracion del servidor
*
*/

// Dependencias
const express = require("express");
const morgan = require("morgan");
const config = require("../configuracion/config");
const routes = require("../routes/routes");
const cors = require('cors');

// Inicializar el objeto  principal
const server = {};
server.app = express();
server.app.use(cors());

server.init = function(){

  server.app.set("port",process.env.PORT || config.App.WebServer.port);
	server.app.set("json spaces",config.App.WebServer.json_spaces);
	server.app.use(morgan("dev"));
	// No interpreta archivos ni imagenes
	server.app.use(express.urlencoded({extended: false}));
	// Operación con archivos JSON
	server.app.use(express.json());
  // metodo para crear las rutas
  routes.createRoutes(server.app);

  server.app.listen(server.app.get("port"),()=>{
		console.log("App started in port " + server.app.get("port"));
	});
};

module.exports = server;
