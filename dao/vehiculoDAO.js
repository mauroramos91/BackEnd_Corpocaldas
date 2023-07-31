//Dependencias
const db = require('../libs/database');

//inicializacion del objeto principal
const dbvehiculo = {};

dbvehiculo.registrarVehiculo = function(vehiculo, callback){

/*
console.log(vehiculo.foto);
console.log(vehiculo.placa);
console.log(vehiculo.modelo);
console.log(vehiculo.marca);
console.log(vehiculo.numero_lateral);
console.log(vehiculo.clase);
console.log(vehiculo.cilindraje);
console.log(vehiculo.matricula);
console.log(vehiculo.propietario);
console.log(vehiculo.num_pasajeros);
console.log(vehiculo.vigencia_poliza);
console.log(vehiculo.vigencia_soat);
console.log(vehiculo.vigencia_revision);
console.log(vehiculo.empresa_afiliada);
console.log(vehiculo.estado_vehiculo);
console.log(vehiculo.nombre_conductor);
console.log(vehiculo.cedula_conductor);
console.log(vehiculo.adjuntar_archivos);
*/
    
    StrQuery = "INSERT INTO public.vehiculo("
        + "placa_id, placa, veh_modelo, veh_marca, veh_clase, veh_matricula, veh_lateral, modelo, veh_estado, veh_propietario, veh_capacidad, veh_cilindraje, vigencia_poliza, vigencia_soat, empresa, vigencia_tecno, foto, carga)"
        + "VALUES ((select max(placa_id) + 1 from public.vehiculo ), '" + 
        vehiculo.placa + "', '" + 
        vehiculo.modelo + "', '"  + 
        vehiculo.marca  + "','" + 
        vehiculo.clase + "', '" + 
        vehiculo.matricula + "', '" + 
        vehiculo.numero_lateral + "', '" + 
        vehiculo.modelo + "', '" + 
        vehiculo.estado_vehiculo + "', '" + 
        vehiculo.propietario + "', '" + 
        vehiculo.num_pasajeros + "', '" + 
        vehiculo.cilindraje + "', '" + 
        vehiculo.vigencia_poliza + "', '" + 
        vehiculo.vigencia_soat + "', '" + 
        vehiculo.empresa_afiliada + "', '" + 
        vehiculo.vigencia_revision + "', '" + 
        "Foto'," +
        "'Carga'" +
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

module.exports = dbvehiculo; 