/**
*
* Archivo para almancear la rutas del aplicativo
*/

// Dependencias
const  usuarioController = require("../controllers/usuarioController");
const  vehiculoController = require("../controllers/vehiculoController");
const  conductorController = require("../controllers/conductorController");
const  solicitudController = require("../controllers/solicitudController");

//const  test = require("../service/test");



//inicializacion del objeto principal
 const route = {};
// aca ponemos todas las rutas
 route.createRoutes = function(app){
  //app.use(interceptorController.validarToken);
  
  // Inicio de sesión
  app.post("/corpocaldas/api/iniciarSesion",usuarioController.iniciarSesion);

  // Servicios del Vehículo
  app.post("/corpocaldas/api/vehiculo/registrarVehiculo",vehiculoController.registrarVehiculo);

  // Servicios de Conductor
  app.post("/corpocaldas/api/conductor/registrarConductor",conductorController.registrarConductor);
  
  // Servicios de Solicitud
  app.post("/corpocaldas/api/solicitud/registrarSolicitud",solicitudController.registrarSolicitud);
  app.get("/corpocaldas/api/solicitud/listarSolicitudes",solicitudController.listarSolicitudes);

//  app.get("/test",test.probar);
  
}

 module.exports = route;
 