const solicitudService = require("../service/solicitudService");  

// Tipos de peticiones
solicitudController = {};

solicitudController.registrarSolicitud = function(req,res){
    solicitudService.registrarSolicitud(req,res);
};

solicitudController.listarSolicitudes = function(req,res){
    solicitudService.listarSolicitudes(req,res);
};

module.exports = solicitudController;