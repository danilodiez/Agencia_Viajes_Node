const express = require('express');
//con el metodo Router vamos a definir las rutas
const router = express.Router();

const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');
const homePageController = require('../controllers/homeController');
const nosotrosController = require('../controllers/nosotrosController');
const viajeController = require('../controllers/viajesController');
const testimonialesController = require('../controllers/testimonialesController');


module.exports = function(){

    //definimos las rutas
    router.get('/', homePageController.infoHome);
    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes', viajeController.infoViaje);


    router.get('/viajes/:id', viajeController.infoURL);


    router.get('/testimoniales', testimonialesController.infoTestimoniales);



    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    //mandamos las rutas para el index.js
    return router;
}