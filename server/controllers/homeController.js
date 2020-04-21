const Viaje = require('../models/Viajes');
const Testimonial = require('../models/Testimoniales');

exports.infoHome = async (req, res) => {

    const viajes =await Viaje.findAll({limit:3});
    const testimoniales = await Testimonial.findAll({limit:3});

    //Pasar el promise y ejecutarlo
    //el promise .all ejecuta todos los promises que tengamos
   // const resultado = Promise.all(promises)
    
   res.render('index', {
    pagina:'Proximos viajes',
    clase: 'home',
    viajes,
    testimoniales
})



}