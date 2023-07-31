//Dependencias
const db = require('../libs/database');

//inicializacion del objeto principal
const dbusuario = {};

dbusuario.iniciarSesion = function(usuario, password, callback){
    StrQuery = "select count(0) from funcionario where func_email = '" + usuario + "' and func_clave = '" + password + "'"; 
    db.query(StrQuery, (err, res) => {
        if (err) {
            callback({"Error":err});
        }else{
            callback(res.rows);
        }
      });
}

module.exports = dbusuario; 