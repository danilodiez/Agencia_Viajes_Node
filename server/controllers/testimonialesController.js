const Testimonial = require('../models/Testimoniales');
exports.infoTestimoniales = async (req, res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        //aca le estamos pasando la variable SOLO a la vista nosotros
        //gracias al metodo render
        pagina:'Testimoniales',
        testimoniales: testimoniales
        
    })

}

//Para mandar datos a la web usamos post
//cuando se llena el formulario
exports.agregarTestimonial = async (req,res)=>{
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
        const testimonial = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: 'Testimoniales',
            testimoniales

        })
    }else{
        //almacenar en la bd
        Testimonial.create({
            nombre,
            correo,
            mensaje
        }).then(testimonial => {res.redirect('/testimoniales')})
        .catch(error => console.log(error))
    }

}