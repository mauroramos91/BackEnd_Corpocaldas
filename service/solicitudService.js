const solicitudDAO = require("../dao/solicitudDAO");

const solicitudService = {};

solicitudService.registrarSolicitud =  function(req,res){
    solicitudDAO.registrarSolicitud(req.body,function(result_sq){
        if(result_sq.Error){
          res.status(500).json({"Error":result_sq.Error});
        }else{
          res.status(200).json(result_sq);
        }
      });
  }
  
  solicitudService.listarSolicitudes =  function(req,res){
    solicitudDAO.listarSolicitudes(function(result_sq){
        if(result_sq.Error){
          res.status(500).json({"Error":result_sq.Error});
        }else{
          res.status(200).json(result_sq);
        }
      });
  }
module.exports = solicitudService;
  