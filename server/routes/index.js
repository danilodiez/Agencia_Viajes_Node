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




    //mandamos las rutas para el index.js
    return router;
}