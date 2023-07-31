/**
* Archivo para manejar la creacion y validacion del token jwt
*
*/

//Dependencias
const jwt =  require("jsonwebtoken");
const config = require("../configuracion/config");

// instanciacion del objeto general
const tokenUtil = {};

tokenUtil.crearToken = function(data){
  var token = jwt.sign(data,config.tokenSecret, {expiresIn: 60 * 60 * 24});
  return token;
};

tokenUtil.validarToken =  function(token,callback){
  jwt.verify(token, config.tokenSecret,callback);
}

module.exports = tokenUtil;
