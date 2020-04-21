const Viaje = require('../models/Viajes')

exports.infoViaje = async (req, res) => {

    //Aca controlamos nuestra bd
    const viajes = await Viaje.findAll()
    res.render('viajes', {

        pagina:'Proximos viajes',
        viajes: viajes
    })

};

exports.infoURL = async (req, res) => {
    //con esto podemos leer la url donde nos encontremos
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje',{

        viaje
    })

}