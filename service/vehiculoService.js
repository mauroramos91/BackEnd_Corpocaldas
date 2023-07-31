const vehiculoDAO = require("../dao/vehiculoDAO");

const vehiculoService = {};

vehiculoService.registrarVehiculo =  function(req,res){
    vehiculoDAO.registrarVehiculo(req.body,function(result_sq){
        if(result_sq.Error){
          res.status(500).json({"Error":result_sq.Error});
        }else{
          res.status(200).json(result_sq);
        }
      });
  }
  
module.exports = vehiculoService;
  