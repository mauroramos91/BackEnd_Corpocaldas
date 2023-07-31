const usuarioService = require("../service/usuarioService"); 

// Tipos de peticiones
usuarioController = {};

usuarioController.iniciarSesion = function(req,res){
    usuarioService.iniciarSesion(req,res);
};



module.exports = usuarioController;