const exphbs = require('express-handlebars')
import { engine } from 'express-handlebars';
const path = require('path')
module.exports = app =>{
    

    app.engine('handlebars', engine());
    // app.set('view engine', 'handlebars');
    app.set('views' , path.join(__dirname , '../views'))
    
}