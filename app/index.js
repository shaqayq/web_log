const express = require('express')
const app = express()

require('./bootstrap')(app)
require('./routes')(app)


module.exports =() =>{
        const port = process.env.APP_PORT;
        app.listen(port, ()=>{
            console.log(`Application work in port ${port}`);
        })
}