const express= require('express')
//const session = require('express-session')
const exhbs= require('express-handlebars')
const Handlebars = require('handlebars')
//const flash = require('connect-flash')

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

    //app.use(session({ cookie: { maxAge: 60000 }}));
    
   // app.use(flash());
}