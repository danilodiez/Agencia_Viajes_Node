const Sequelize = require('sequelize')

module.exports = new Sequelize('Agencia_de_viajes','root','root',
{
    host:'127.0.0.1',
    port:'3306',
    dialect:'mysql',
    define:{
        timestamps:false
    },
    pool:{
        max:5,
        min:0,
        acquiere:30000,
        idle:10000
    },
    operatorsAliases: false


})