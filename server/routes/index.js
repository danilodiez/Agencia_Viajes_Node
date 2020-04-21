const express = require('express');
//con el metodo Router vamos a definir las rutas
const router = express.Router();

const Viaje = require('../models/Viajes')


module.exports = function(){

    //definimos las rutas
    router.get('/', (req, res) => {
        //Usamos el metodo render cuando tengamos vistas!!!!
        res.render('index')
    
    
    });
    router.get('/nosotros', (req, res) => {

        res.render('nosotros', {
            //aca le estamos pasando la variable SOLO a la vista nosotros
            //gracias al metodo render
            pagina:'Sobre nosotros'
            
    });
});

    router.get('/viajes', (req, res) => {

        //Aca controlamos nuestra bd
        Viaje.findAll()
        .then(viajes => res.render('viajes', {

            pagina:'Proximos viajes',
            viajes: viajes
        }))
        .catch(error=>console.log(error))

    });


    router.get('/viajes/:id', (req, res) => {
        //con esto podemos leer la url donde nos encontremos
        Viaje.findByPk(req.params.id)
        .then(viaje => res.render('viaje',{

            viaje
        }))
        .catch(error => console.log(error))
    
});


router.get('/testimoniales', (req, res) => {

    res.render('testimoniales', {
        //aca le estamos pasando la variable SOLO a la vista nosotros
        //gracias al metodo render
        pagina:'Testimoniales'
        
});
});


//Para mandar datos a la web usamos post
//cuando se llena el formulario
    router.post('/testimoniales',(req,res)=>{
        //validar que todos los campos esten completos
        let {nombre, correo, mensaje} = req.body;

        let errores =[];
        if(!nombre){

            errores.push({'mensaje': 'Agrega tu nombre'})
        }
        if(!correo){

            errores.push({'mensaje': 'Agrega tu correo'})
        }
        if(!mensaje){

            errores.push({'mensaje': 'Agrega tu mensaje'})
        }

        // revisar por errores
        if(errores.length >0){
            //muestra la vista por errores
            res.render('testimoniales', {
                errores,
                nombre,
                correo,
                mensaje

            })
        }else{
            //almacenar en la bd
        }

    });

    //mandamos las rutas para el index.js
    return router;
}