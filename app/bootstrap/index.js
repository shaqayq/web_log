const express= require('express')
const exhbs= require('express-handlebars')
const Handlebars = require('handlebars')

Handlebars.registerHelper('isEqual', function (value1, value2, options) {
    return value1 === value2 ? options.fn(this) : options.inverse(this);
  });

const path = require('path')
const bodyParser = require('body-parser')
module.exports = app =>{
   
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    app.engine('handlebars' , exhbs.engine({
        helpers: {
          isEqual: Handlebars.helpers.isEqual,
        }
      }));
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname,'../views'))
    app.use(express.static(path.join(__dirname, '../../public')))
}