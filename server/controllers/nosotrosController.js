exports.infoNosotros = (req, res) => {

    res.render('nosotros', {
        //aca le estamos pasando la variable SOLO a la vista nosotros
        //gracias al metodo render
        pagina:'Sobre nosotros'
        
});
}