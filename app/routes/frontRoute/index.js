const express = require('express')
const router = express.Router();

const homeRoute = require('./homeRoute')
const postRoute = require('./postRoute')
const commentRoute = require('./commentRoute')

router.use('/' , homeRoute)
router.get('/about', function (req , res){
    res.render('front/about' , {layout: 'front' , showSidebar: true})
})

router.use('/slug' , postRoute)
router.use('/new_comment' , commentRoute)


module.exports = router