const express= require('express')
const session = require('express-session')
const cookiParser = require('cookie-parser')
const flash = require('connect-flash')
const MySQLStore = require('express-mysql-session')(session)
const exhbs= require('express-handlebars')
const Handlebars = require('handlebars')

const mysqlOptions = {
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USERNAME,
  database: process.env.MYSQL_DATABASE,
  port: process.env.MYSQL_PORT,
  multipleStatements: true
}

const sessionStore = new MySQLStore(mysqlOptions);
Handlebars.registerHelper('isEqual', function (value1, value2, options) {
    return value1 === value2 ? options.fn(this) : options.inverse(this);
  });

const path = require('path')
const bodyParser = require('body-parser')

module.exports = app =>{
   
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: false}));

    app.use(cookiParser());
    app.use(session({
      store: sessionStore,
      secret: "92jn34kn45i5nkn5",
      resave: true,
      saveUninitialized: true,
      cookie: {
       maxAge: 24 * 60 * 60 * 1000,
      }}));
    app.use(flash());

    app.engine('handlebars' , exhbs.engine({
        helpers: {
          isEqual: Handlebars.helpers.isEqual,
        }
      }));
    app.set('view engine', 'handlebars');
    app.set('views', path.join(__dirname,'../views'))
    app.use(express.static(path.join(__dirname, '../../public')))

   
}