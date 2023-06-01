const express = require('express')
const application = express()

module.exports =() =>{
        const port = process.env.APP_PORT;
        application.listen(()=>{
            console.log(`Application work on port ${port}`);
        })
}