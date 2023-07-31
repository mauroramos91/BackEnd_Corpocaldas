//Dependencias
const db = require('../libs/database');

//inicializacion del objeto principal
const dbsolicitud = {};

dbsolicitud.listarSolicitudes = function(callback){


    StrQuery = "SELECT * FROM SOLICITUD"; 
    db.query(StrQuery, (err, res) => {
        if (err) {
            callback({"Error":err});
        }else{
            callback(res.rows);
        }
      });

}



dbsolicitud.registrarSolicitud = function(solicitud, callback){


    StrQuery = "INSERT INTO public.solicitud (" +
        "id, cedula_id, fecha_registro, fecha_solic, fecha_inicio, fecha_fin, hora_salida, hora_regreso, destino, " +
        "objeto, zona_id, estado, vehiculo_id, conductor_id, fecha_retorno, hora_salida2, id_estado, fecha_asig_estado" +
        ") VALUES ((select (max(id) + 1 ) from public.solicitud)" +", "
        +solicitud.cedula_id + ", '"
        +solicitud.fecha_registro + "', '"
        +solicitud.fecha_solic + "', '"
        +solicitud.fecha_inicio + "', '"
        +solicitud.fecha_fin + "', "
        +solicitud.hora_salida + ", "
        +solicitud.hora_regreso + ", "
        +solicitud.destino + ", '"
        +solicitud.objeto + "', "
        +solicitud.zona_id + ", '"
        +solicitud.estado + "', "
        +solicitud.vehiculo_id + ", "
        +solicitud.conductor_id + ", '"
        +solicitud.fecha_retorno + "', "
        +solicitud.hora_salida2 + ", "
        +solicitud.id_estado + ", '"
        +solicitud.fecha_asig_estado + "'" +
        ");";


        console.log(StrQuery);
        db.query(StrQuery, (err, res) => {
        if (err) {
            callback({"Error":err});
        }else{
            callback({"Resultado":"OK"});
        }
        });

}

module.exports = dbsolicitud; 