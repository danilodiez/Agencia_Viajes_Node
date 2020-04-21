//Importar express
//Esta es una version vieja de importar y exportar MODULOS
const express = require('express');
const routes = require('./routes');


const configs = require('./config');

/*
    db.authenticate()
        .then(()=>{
            console.log('DB conectada')
        })
        .catch(error=> console.log(error))

*/

//importamos el modulo path que accede a nuestro sistema de archivos
const path = require('path');


//Configurar express
const app = express();
const port = 3000;

//Habilitamos pug que es un Template Engine
app.set('view engine', 'pug');

//agregar las vistas
app.set('views', path.join(__dirname,'./views'));

//Cargar una carpeta estatica llamada public
app.use(express.static('public'))


//validar si estamos en desarrollo o en produccion
const config = configs[app.get('env')];

//creamos la variable para el sitio web
app.locals.titulo = config.nombreSitio;

//Muestra el anio actual
//el next es
app.use( (req, res, next)=>{
    //crear una nueva fecha
    const fecha = new Date();
    //las variables locals son para que NODE pasen entre distintos archivos
    res.locals.fechaActual = fecha.getFullYear();
    
    
    return next();



})


//Cargar las rutas
//El .use lee cualquier verbo HTTP
app.use('/',routes())


app.listen(port)