const usuarioDAO = require("../dao/usuarioDAO");

const usuarioService = {};

usuarioService.iniciarSesion =  function(req,res){
    usuarioDAO.iniciarSesion(req.body.usuario,req.body.password,function(result_sq){
        if(result_sq.Error){
          res.status(500).json({"Error":result_sq.Error});
        }else{
          res.status(200).json(result_sq);
        }
      });
  }
  
module.exports = usuarioService;
  