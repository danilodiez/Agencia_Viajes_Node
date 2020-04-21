//Importar express
//Esta es una version vieja de importar y exportar MODULOS
const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');
require('dotenv').config({ path: 'variables.env'})
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
app.use( (req, res, next)=>{
    //crear una nueva fecha
    const fecha = new Date();
    //las variables locals son para que NODE pasen entre distintos archivos
    res.locals.fechaActual = fecha.getFullYear();
    //esto retorna lo que tengamos en la url
    res.locals.ruta = req.path;
    
    //next quiere decir que voy a hacer todo esto y despues puedo seguir con el codigo
    return next();



})
//Ejecutamos el body parser
app.use(bodyParser.urlencoded({extended: true}))

//Cargar las rutas
//El .use lee cualquier verbo HTTP
app.use('/',routes())

//Puerto y host para la app

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.listen(port, host), () =>{
    console.log('El servidor esta funcionando')
}