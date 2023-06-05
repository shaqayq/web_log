const express = require('express')
const app = express()

require('./bootstrap')(app)
module.exports =() =>{
        const port = process.env.APP_PORT;
        app.listen(()=>{
            console.log(`Application work in port ${port}`);
        })
}