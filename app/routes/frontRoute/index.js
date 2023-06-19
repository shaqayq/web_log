const express = require('express')
const router = express.Router();

const homeRoute = require('./homeRoute')
const postRoute = require('./postRoute')

router.use('/' , homeRoute)
router.use('/slug' , postRoute)

module.exports = router