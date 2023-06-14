const express = require('express')
const router = express.Router();
const authController = require('../controller/authController')

router.get('/login', authController.showLogin)
router.post('/signin', authController.doLogin)






module.exports = router