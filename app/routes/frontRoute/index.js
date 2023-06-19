const express = require('express')
const router = express.Router();

const homeRoute = require('./homeRoute')
const postRoute = require('./postRoute')
const commentRoute = require('./commentRoute')

router.use('/' , homeRoute)
router.use('/slug' , postRoute)
router.use('/new_comment' , postRoute)


module.exports = router