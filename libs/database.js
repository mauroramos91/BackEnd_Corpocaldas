/**
*
* Archivo que maneja la conexión a la base de datos PostgreSQL
*
*/

// Dependencias
const config = require("../configuracion/config");
const { Pool } = require('pg');

// Inicializar el objeto  principal
const dbLib = {};

const pool = new Pool({
  connectionString: config.PostGres.url_conection,
  ssl: config.PostGres.ssl,
  max: config.PostGres.max_conections
});


module.exports = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback)
  },
  querySync: (text,params) => pool.query(text,params)
}