//Dependencias
const db = require('../libs/database');

//inicializacion del objeto principal
const dbconductor = {};

dbconductor.registrarConductor = function(conductor, callback){


        StrQuery = "INSERT INTO public.conductor("
        + "cond_id, cond_tipo_doc, cond_nombre, cond_apellidos, cond_condicion, "
        + "cond_eps, cond_arl, cond_nivel_academico, cond_lic_id, cond_lic_categoria, cond_lic_vigencia,"
        + "cond_jefe_inmediato, carga, vehiculo_id, column2)"
        + "VALUES ((select max(cond_id) + 1 from public.conductor ), '" + 
        conductor.tipoDocumento + "', '" + 
        conductor.nombre + "', '" + 
        conductor.apellido + "', '" + 
        conductor.condicion + "', '" + 
        conductor.eps + "', '" + 
        conductor.arl + "', '" + 
        "Nivel académico" + "', '" + 
        conductor.condicion + "', '" + 
        conductor.categoriaLicencia + "', " + 
        "CURRENT_DATE" + ", " + 
        1 + ", '" + 
        "1" + "', '" + 
        "1" + "', " + 
        "1" + "" + 
        ");";

        //console.log(StrQuery);
        db.query(StrQuery, (err, res) => {
        if (err) {
            callback({"Error":err});
        }else{
            callback({"Resultado":"OK"});
        }
        });

}

module.exports = dbconductor; 