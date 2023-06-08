const express= require('express')
const exhbs= require('express-handlebars')
const path = require('path')
const bodyParser = require('body-parser')
module.exports = app =>{
   
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    app.engine('handlebars' , exhbs.engine());
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname,'../views'))
    app.use(express.static(path.join(__dirname, '../../public')))
}