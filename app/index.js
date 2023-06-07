const express = require('express')
const app = express()

require('./bootstrap')(app)


app.get('/', function (req, res) {
  res.render('dashboard', { layout: 'main', /* additional data */ });
});

module.exports =() =>{
        const port = process.env.APP_PORT;
        app.listen(port, ()=>{
            console.log(`Application work in port ${port}`);
        })
}