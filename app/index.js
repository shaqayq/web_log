const express = require('express')
const application = express()
require('./bootstrap')(app)
module.exports =() =>{
        const port = process.env.APP_PORT;
        application.listen(()=>{
            console.log(`Application work in port ${port}`);
        })
}