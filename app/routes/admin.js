const express = require('express')
const router = express.Router();

router.get('/dashboard',(req,res) => {
    res.render('dashboard', { layout: 'main', /* additional data */ });
})

module.exports = router