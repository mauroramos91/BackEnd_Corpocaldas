const conductorDAO = require("../dao/conductorDAO");

const conductorService = {};

conductorService.registrarConductor =  function(req,res){
    conductorDAO.registrarConductor(req.body,function(result_sq){
        if(result_sq.Error){
          res.status(500).json({"Error":result_sq.Error});
        }else{
          res.status(200).json(result_sq);
        }
      });
  }
  
module.exports = conductorService;
  