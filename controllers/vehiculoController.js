const vehiculoService = require("../service/vehiculoService");  

// Tipos de peticiones
vehiculoController = {};

vehiculoController.registrarVehiculo = function(req,res){
    vehiculoService.registrarVehiculo(req,res);
};

module.exports = vehiculoController;