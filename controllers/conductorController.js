const conductorService = require("../service/conductorService");  

// Tipos de peticiones
conductorController = {};

conductorController.registrarConductor = function(req,res){
    conductorService.registrarConductor(req,res);
};

module.exports = conductorController;