const express= require('express')
const exhbs= require('express-handlebars')
const path = require('path')

module.exports = app =>{
   
    app.engine('handlebars' , exhbs.engine());
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname,'../views'))
    app.use(express.static(path.join(__dirname, '../../public')))
}