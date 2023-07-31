/**
* File for store the properties of the proyects
*
*/

// Dependencias

// incializar el objeto principal
var config ={
    "App":{
    "WebServer":
        {
            "port": 10000,
            "json_spaces" : 2
        }
    },
    "PostGres":{
        url_conection: "postgres://postgres:1234@localhost:5432/corpocaldas",
       max_conections: 20,            
    },
    "tokenSecret":"49022192DFBE5D5C90E72E2CC11DB8C9",
    "excluir_url":["/corpocaldas/api/iniciarSesion"]
};

module.exports = config;
